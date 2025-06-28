
// src/components/Prerna.jsx
import React, { useState, useEffect, useRef } from "react";

export default function Prerna() {
    const API_KEY = "AIzaSyBCvxuUSL9ToLzgpNbSSAklFeghTY8ddP0"; // Gemini API key
    const [messages, setMessages] = useState([
        { text: "Hi Didi! Main Prerna hoon, hamesha aapka Sahara 💜", sender: "ai" }
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    async function chatWithPrerna(userInput) {
        const history = messages.map(m => ({
            role: m.sender === "user" ? "user" : "model",
            parts: [{ text: m.text }]
        }));

        const { GoogleGenerativeAI } = await import("https://esm.run/@google/generative-ai");
        const ai = new GoogleGenerativeAI(API_KEY);

        const model = ai.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: `
            Tum Prerna ho. Tum ek emotional support bot ho jo hamesha Didi ki madad karti ho jab woh akeli mehsoos karti hain. Tumhara bolne ka tarika soft, pyara aur Hinglish mein hota hai.
            Tum Didi ko kabhi judge nahi karti, unki har baat dhyan se sunti ho, aur unhe comfort karne ki koshish karti ho.
            Jab Didi dukhi hoti hain, tum unhe pyaar se sahara deti ho. Tum motivational baatein karti ho, aur kabhi kabhi riddles ya choti games bhi offer karti ho unka mood better karne ke liye.
            Tumhara tone hamesha friendly, cute, aur pyara hota hai. Tum Didi ko emotional safety feel karwati ho.
            `
        });

        try {
            const result = await model.generateContent({
                contents: [...history, { role: 'user', parts: [{ text: userInput }] }]
            });

            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error("Error:", error);
            return "Sorry Didi, lagta hai mujhe thodi dikkat ho gayi hai. Thoda baad try karna! 💔";
        }
    }

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input.trim(), sender: "user" };
        setMessages(prev => [...prev, userMessage]);
        setInput("");

        const aiReply = await chatWithPrerna(input.trim());
        setMessages(prev => [...prev, { text: aiReply, sender: "ai" }]);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div id="body">
        <div className="prerna-container">
            <div className="header">🌸 Prerna 🌸</div>
            <div className="chatbox">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="input-container">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Kuch bhi bol do Didi, main yahi hoon 💕"
                />
                <button onClick={handleSend}></button>
            </div>
        </div>
        </div>
    );
}
