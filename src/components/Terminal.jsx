import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Terminal = () => {
  const { isDarkMode } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [currentDir, setCurrentDir] = useState('~/chat');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const chatRef = useRef(null);
  const inputRef = useRef(null);  // Add back inputRef

  // Initialize Google AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash-lite-preview-02-05",
    generationConfig: {
      maxOutputTokens: 200,
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
    }
  });

  // Initialize chat with system context
  useEffect(() => {
    const initChat = async () => {
      const systemContext = `You are a versatile AI assistant that can:

1. Answer questions about Jassidak Singh's portfolio:
- Full-stack developer and Computer Science graduate from UAlberta
- Experience with React, Java, Spring Boot, Python, AI/ML
- Built educational platform at Fluenty (10,000+ users)
- Conducted ML research on eLSTM and RTU agents
- Created projects like PopScore, Social Distribution, NBA Poeltl Solver
- Contact: jassidaksingh@gmail.com

2. Act as a general AI assistant:
- Answer general questions
- Help with coding problems
- Explain technical concepts
- Engage in casual conversation

Response Guidelines:
- Keep responses concise and relevant
- For portfolio questions, focus on Jassidak's experience
- For general queries, provide helpful, accurate information
- Use at most one emoji, only in greetings
- For job inquiries, direct to email: jassidaksingh@gmail.com`;

      chatRef.current = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: systemContext }]
          },
          {
            role: "model",
            parts: [{ text: "Understood. I can help with both portfolio questions and general queries." }]
          }
        ]
      });
    };

    initChat();
  }, []);

  const handleChat = async (message) => {
    try {
      setIsLoading(true);
      
      const chat = chatRef.current;
      if (!chat) {
        throw new Error('Chat not initialized');
      }

      // Send the user's message
      const result = await chat.sendMessage([{ text: message }]);
      const responseText = result.response.text();

      // Update chat history
      setChatHistory(prev => [
        ...prev,
        { 
          role: "user", 
          content: message,
          parts: [{ text: message }]
        },
        { 
          role: "model", 
          content: responseText,
          parts: [{ text: responseText }]
        }
      ]);

      return responseText.split('\n');
    } catch (error) {
      console.error('Error chatting:', error);
      return ['Sorry, I encountered an error. Please try again.'];
    } finally {
      setIsLoading(false);
    }
  };

  const handleCommand = async (cmd) => {
    const trimmedCmd = cmd.trim();
    
    if (trimmedCmd === '') {
      return { output: [] };
    }

    if (trimmedCmd.toLowerCase() === 'clear') {
      setHistory([]);
      setChatHistory([]);
      // Reinitialize chat
      const initChat = async () => {
        const systemContext = `You are a versatile AI assistant that can:

1. Answer questions about Jassidak Singh's portfolio:
- Full-stack developer and Computer Science graduate from UAlberta
- Experience with React, Java, Spring Boot, Python, AI/ML
- Built educational platform at Fluenty (10,000+ users)
- Conducted ML research on eLSTM and RTU agents
- Created projects like PopScore, Social Distribution, NBA Poeltl Solver
- Contact: jassidaksingh@gmail.com

2. Act as a general AI assistant:
- Answer general questions
- Help with coding problems
- Explain technical concepts
- Engage in casual conversation

Response Guidelines:
- Keep responses concise and relevant
- For portfolio questions, focus on Jassidak's experience
- For general queries, provide helpful, accurate information
- Use at most one emoji, only in greetings
- For job inquiries, direct to email: jassidaksingh@gmail.com`;

        chatRef.current = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: systemContext }]
            },
            {
              role: "model",
              parts: [{ text: "Understood. I can help with both portfolio questions and general queries." }]
            }
          ]
        });
      };
      initChat();
      // Refocus input after clearing
      setTimeout(() => inputRef.current?.focus(), 0);
      return { output: [], clear: true };
    }

    const response = await handleChat(trimmedCmd);
    // Refocus input after response
    setTimeout(() => inputRef.current?.focus(), 0);
    return {
      output: response
    };
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim().toLowerCase() === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }
      const result = await handleCommand(input);
      if (!result.clear) {
        setHistory(prev => [...prev, { command: input, output: result.output }]);
      }
      setInput('');
    }
  };

  useEffect(() => {
    if (history.length === 0) {
      const terminalContent = document.querySelector('.terminal-content');
      if (terminalContent) {
        terminalContent.scrollTop = 0;
      }
    }
  }, [history]);

  // Keep input focused
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`w-full max-w-2xl mx-auto mt-10 rounded-lg overflow-hidden ${
        isDarkMode ? 'bg-[#1b1b1f]' : 'bg-[#f3f4f6] border border-[#e5e7eb]'
      } shadow-xl`}
      onClick={handleTerminalClick}
    >
      <div className={`flex items-center px-4 py-2.5 ${isDarkMode ? 'bg-[#323232]' : 'bg-[#e9ecef] border-b border-[#e5e7eb]'}`}>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
          <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
        </div>
        <div className="flex-1 text-center">
          <span className={`text-sm font-mono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentDir}</span>
        </div>
      </div>

      <div className="terminal-content p-5 font-mono text-sm h-[320px] overflow-y-auto">
        {history.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <span className="text-sm">
              Welcome to my interactive chat terminal!
              <br />
              Feel free to ask me anything about myself or my work.
              <br />
              Type "clear" to reset our conversation.
            </span>
          </motion.div>
        )}

        {history.map((item, index) => (
          <div key={`${index}-${item.command}-${Date.now()}`} className="mb-4">
            <div className="flex items-start text-sm">
              <span className="text-[#00CA4E]">➜</span>
              <span className={`ml-2 ${isDarkMode ? 'text-[#c89050]' : 'text-[#b87030]'}`}>{currentDir}</span>
              <span className={`ml-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>$</span>
              <span className={`ml-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.command}</span>
            </div>
            {item.output.map((line, i) => (
              <div 
                key={`${index}-${i}-${line}-${Date.now()}`} 
                className={`ml-4 mt-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {line}
              </div>
            ))}
          </div>
        ))}

        <div className="flex items-start text-sm">
          <span className="text-[#00CA4E]">➜</span>
          <span className={`ml-2 ${isDarkMode ? 'text-[#c89050]' : 'text-[#b87030]'}`}>{currentDir}</span>
          <span className={`ml-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`flex-1 ml-2 bg-transparent outline-none border-none text-sm ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            } ${isLoading ? 'opacity-50' : ''}`}
            spellCheck="false"
            autoComplete="off"
            disabled={isLoading}
            placeholder={isLoading ? "Thinking..." : ""}
          />
        </div>
        {isLoading && (
          <div className="ml-4 mt-2 text-sm text-gray-500">
            Thinking...
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;