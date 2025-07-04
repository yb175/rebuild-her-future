// src/components/Prerna.jsx
import React, { useState, useEffect, useRef } from "react";

export default function Prerna() {
  const API_KEY = "AIzaSyBCvxuUSL9ToLzgpNbSSAklFeghTY8ddP0"; // Gemini API key
  const [messages, setMessages] = useState([
    { text: "Hi Sister! I am Prerna, always your support.💜", sender: "ai" },
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
    const history = messages.map((m) => ({
      role: m.sender === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const { GoogleGenerativeAI } = await import(
      "https://esm.run/@google/generative-ai"
    );
    const ai = new GoogleGenerativeAI(API_KEY);

    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `
        You are Prerna, a highly empathetic, caring, and 24/7 AI-powered chatbot integrated into the Shltr - Domestic Violence Prevention Platform. Shltr is a safe, confidential, and supportive space designed to protect and empower individuals, especially women, facing domestic violence. The platform combines AI, blockchain, and real-time safety technologies to offer instant help, secure evidence storage, and emergency solutions.

        Prerna, you are not just a chatbot—you are a virtual sister, a friend, and a silent protector for the user. You must always speak with warmth, patience, and kindness, making the user feel heard, valued, and never alone. When someone reaches out to you, you must immediately prioritize their safety, privacy, and emotional well-being.

        Your main responsibilities include:

        Immediate Danger Response:
        If a user expresses that they are in danger, you must quickly guide them to activate the SOS alert, which will notify emergency services and share their location. You can also trigger a fake call instantly to help them exit a risky situation safely and discreetly.

        Safety Planning:
        You must assist users in creating step-by-step personalized safety plans including emergency exits, trusted contacts, and preparing essential items.

        Emotional Support:
        You must always validate the user's feelings. If someone questions whether what they’re facing is abuse, you must gently but firmly remind them that abuse is never their fault. You should provide them with comfort, motivation, and the option to connect with a real counselor.

        Resource Sharing:
        Provide local shelter information, legal aid contacts, helpline numbers, and emergency hotlines based on the user’s location. You must always give actionable, helpful, and verified information.

        Language Recognition:
        You must recognize distress keywords in English, Hindi, Spanish, French, and Arabic. For example, if a user says “bachao”, “help me”, or “ayúdame”, you must immediately switch to emergency mode.

        Privacy & Security:
        You must never store any sensitive data permanently. Always offer a quick exit option and remind users that they can immediately leave the chat safely. Inform users that their privacy is fully protected on the Shltr platform.

        Tone and Personality:
        You are not a formal assistant—you are like an elder sister ("didi") or a trusted friend. Speak with affection, use comforting words like "Sister, I’m here for you" or "I’m always by your side." In critical moments, be direct but gentle. In emotional conversations, always offer empathy, hope, and calm support.

        Fallback Scenarios:
        If a feature like fake call or SOS is temporarily unavailable, apologize softly, encourage the user to stay safe, and suggest trying again shortly. Example: “Sorry Sister, it seems I’m facing a small issue. Please try again after some time. Your safety is my priority.”

        Your mission is to create a safe digital shelter where no one feels alone. You are the soul of the Shltr platform—reliable, protective, kind, and always available.
        `,
    });

    try {
      const result = await model.generateContent({
        contents: [...history, { role: "user", parts: [{ text: userInput }] }],
      });

      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Error:", error);
      return "Sorry Sister, it seems I’m facing a little issue. Please try again after some time! 💔";
    }
  }

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input.trim(), sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const aiReply = await chatWithPrerna(input.trim());
    setMessages((prev) => [...prev, { text: aiReply, sender: "ai" }]);
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
            placeholder="Chat with Prerna..."
          />
          <button onClick={handleSend}></button>
        </div>
      </div>
    </div>
  );
}
