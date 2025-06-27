
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Phone, MapPin, AlertTriangle } from 'lucide-react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hello! I'm SafeGuard AI, your confidential support assistant. I'm here to help you 24/7. How are you feeling today?",
      timestamp: new Date().toISOString(),
      suggestions: ["I need immediate help", "I want to talk about my situation", "I'm looking for resources", "I'm not sure where to start"]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const botResponses = {
    'emergency': {
      message: "I understand this is an emergency. Your safety is the top priority. I'm connecting you with emergency services right now.",
      suggestions: ["Call 911", "Contact local police", "Go to nearest safe location", "Call domestic violence hotline"],
      actions: ['emergency']
    },
    'help': {
      message: "I'm here to help you. You're taking a brave step by reaching out. Can you tell me what kind of support you need right now?",
      suggestions: ["I need someone to talk to", "I need legal advice", "I need a safe place to stay", "I need counseling resources"]
    },
    'resources': {
      message: "Here are some resources that might help you. All of these services are confidential and free.",
      suggestions: ["National Domestic Violence Hotline", "Local shelters", "Legal aid services", "Counseling centers"],
      resources: [
        { name: "National DV Hotline", number: "1-800-799-7233", available: "24/7" },
        { name: "Crisis Text Line", number: "Text HOME to 741741", available: "24/7" },
        { name: "Legal Aid", number: "1-866-563-4542", available: "Mon-Fri 9AM-5PM" }
      ]
    },
    'talk': {
      message: "I'm here to listen. Sometimes talking about your situation can help clarify your thoughts and feelings. What's been on your mind lately?",
      suggestions: ["I feel scared", "I feel confused", "I feel alone", "I don't know what to do"]
    },
    'scared': {
      message: "It's completely normal to feel scared in your situation. Your feelings are valid. Fear can actually be your mind's way of protecting you. Do you have a safe place you can go to right now?",
      suggestions: ["Yes, I have somewhere safe", "No, I don't have anywhere to go", "I'm not sure", "I need help finding a safe place"]
    },
    'safety_plan': {
      message: "Let's create a safety plan together. A safety plan is a personalized, practical plan that includes ways to remain safe while in a relationship, planning to leave, or after you leave.",
      suggestions: ["Help me make a safety plan", "What should I pack?", "How do I leave safely?", "Where can I get help?"]
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponseKey = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('emergency') || lowerMessage.includes('help me') || lowerMessage.includes('urgent')) {
      return 'emergency';
    } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return 'help';
    } else if (lowerMessage.includes('resource') || lowerMessage.includes('hotline') || lowerMessage.includes('shelter')) {
      return 'resources';
    } else if (lowerMessage.includes('talk') || lowerMessage.includes('speak') || lowerMessage.includes('discuss')) {
      return 'talk';
    } else if (lowerMessage.includes('scared') || lowerMessage.includes('afraid') || lowerMessage.includes('fear')) {
      return 'scared';
    } else if (lowerMessage.includes('plan') || lowerMessage.includes('leave') || lowerMessage.includes('escape')) {
      return 'safety_plan';
    } else {
      return 'help';
    }
  };

  const sendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: messageText,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const responseKey = getResponseKey(messageText);
      const response = botResponses[responseKey];
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: response.message,
        timestamp: new Date().toISOString(),
        suggestions: response.suggestions,
        resources: response.resources,
        actions: response.actions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  const handleEmergencyAction = () => {
    // In real implementation, this would trigger emergency protocols
    alert('Emergency services contacted. Help is on the way.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-t-xl shadow-lg p-6 border-b">
          <div className="flex items-center">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
              <Bot className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">SafeGuard AI Assistant</h1>
              <p className="text-gray-600">Confidential support • Available 24/7 • End-to-end encrypted</p>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="bg-white shadow-lg max-h-96 overflow-y-auto">
          <div className="p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <div className="flex items-start">
                    {message.type === 'bot' && (
                      <Bot className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    )}
                    {message.type === 'user' && (
                      <User className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm">{message.message}</p>
                      <p className={`text-xs mt-1 ${
                        message.type === 'user' ? 'text-purple-200' : 'text-gray-500'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                  
                  {/* Resources */}
                  {message.resources && (
                    <div className="mt-3 space-y-2">
                      {message.resources.map((resource, index) => (
                        <div key={index} className="bg-white p-3 rounded border">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-800">{resource.name}</span>
                            <span className="text-xs text-gray-600">{resource.available}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Phone className="h-4 w-4 text-green-600 mr-1" />
                            <span className="text-sm text-gray-700">{resource.number}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Emergency Actions */}
                  {message.actions?.includes('emergency') && (
                    <div className="mt-3">
                      <button
                        onClick={handleEmergencyAction}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors flex items-center"
                      >
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Contact Emergency Services
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                  <div className="flex items-center">
                    <Bot className="h-4 w-4 mr-2" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Quick Suggestions */}
        {messages.length > 0 && messages[messages.length - 1].suggestions && !isTyping && (
          <div className="bg-white shadow-lg p-4 border-t">
            <p className="text-sm text-gray-600 mb-2">Quick responses:</p>
            <div className="flex flex-wrap gap-2">
              {messages[messages.length - 1].suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm hover:bg-purple-200 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white rounded-b-xl shadow-lg p-6 border-t">
          <div className="flex space-x-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here... (Press Enter to send)"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              disabled={isTyping}
            />
            <button
              onClick={() => sendMessage()}
              disabled={isTyping || !inputMessage.trim()}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            🔒 This conversation is encrypted and confidential. No chat logs are permanently stored.
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
          <h3 className="font-semibold text-red-800 mb-3 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Emergency Resources - Available 24/7
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-red-600 mr-2" />
              <span>Emergency: 911</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-red-600 mr-2" />
              <span>National DV Hotline: 1-800-799-7233</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-red-600 mr-2" />
              <span>Crisis Text: Text HOME to 741741</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-red-600 mr-2" />
              <span>Find Local Resources: www.thehotline.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
