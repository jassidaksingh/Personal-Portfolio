import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

const Terminal = () => {
  const { isDarkMode } = useTheme();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [currentDir, setCurrentDir] = useState('~/portfolio');
  const inputRef = useRef(null);

  const commands = {
    help: {
      description: 'List all available commands',
      execute: () => ({
        output: [
          'Available commands:',
          'help     - Show this help message',
          'about    - Learn about me',
          'skills   - View my technical skills',
          'projects - List my projects',
          'contact  - Get my contact information',
          'clear    - Clear the terminal',
          '',
          'Tip: Use Tab for command completion'
        ]
      })
    },
    about: {
      description: 'Learn about me',
      execute: () => ({
        output: [
          'Hi! I\'m Jassidak Singh',
          'I\'m a full-stack developer passionate about creating',
          'innovative web applications and digital experiences.',
          '',
          'Currently working on exciting projects using:',
          '- React, Node.js, MongoDB',
          '- TypeScript, Python',
          '- Cloud Technologies'
        ]
      })
    },
    skills: {
      description: 'View my technical skills',
      execute: () => ({
        output: [
          'Technical Skills:',
          '',
          'Frontend:',
          '- React, Vue.js, Next.js',
          '- HTML5, CSS3, JavaScript/TypeScript',
          '- Tailwind CSS, SASS',
          '',
          'Backend:',
          '- Node.js, Express, Python',
          '- MongoDB, PostgreSQL',
          '- RESTful APIs, GraphQL',
          '',
          'Tools & Others:',
          '- Git, Docker, AWS',
          '- Agile/Scrum, CI/CD',
          '- Test-Driven Development'
        ]
      })
    },
    projects: {
      description: 'List my projects',
      execute: () => ({
        output: [
          'Recent Projects:',
          '',
          '1. Portfolio Website',
          '   - React, Tailwind CSS, Three.js',
          '   - Modern UI/UX with 3D elements',
          '',
          '2. Dragon Shell',
          '   - Real-time chat application',
          '   - WebSocket, MongoDB, Express',
          '',
          '3. NBA Stats Analyzer',
          '   - Data visualization dashboard',
          '   - Python, React, D3.js',
          '',
          'Type "cd <project-name>" for more details'
        ]
      })
    },
    contact: {
      description: 'Get my contact information',
      execute: () => ({
        output: [
          'Contact Information:',
          '',
          'Email: jassidaksingh@gmail.com',
          'LinkedIn: linkedin.com/in/jassidak-singh',
          'GitHub: github.com/jassidaksingh',
          '',
          'Feel free to reach out!'
        ]
      })
    },
    clear: {
      description: 'Clear the terminal',
      execute: () => {
        setHistory([]);
        return { output: [], clear: true };
      }
    }
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') {
      return { output: [] };
    }

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return { output: [], clear: true };
    }

    const command = commands[trimmedCmd];
    if (command) {
      return command.execute();
    }

    return {
      output: [`Command not found: ${trimmedCmd}`, 'Type "help" for available commands']
    };
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim().toLowerCase() === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }
      const result = handleCommand(input);
      if (!result.clear) {
        setHistory(prev => [...prev, { command: input, output: result.output }]);
      }
      setInput('');
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const matchingCommands = Object.keys(commands).filter(cmd => 
        cmd.startsWith(input.toLowerCase())
      );
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      }
    }
  };

  // Add useEffect to ensure history stays cleared
  useEffect(() => {
    if (history.length === 0) {
      const terminalContent = document.querySelector('.terminal-content');
      if (terminalContent) {
        terminalContent.scrollTop = 0;
      }
    }
  }, [history]);

  // Focus input on mount and when clicking terminal
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
      {/* Terminal Header */}
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

      {/* Terminal Content */}
      <div className="terminal-content p-5 font-mono text-sm h-[320px] overflow-y-auto">
        {/* Welcome Message */}
        {history.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <span className="text-sm">
              Welcome to my interactive terminal!
              <br />
              Type "help" to see available commands.
            </span>
          </motion.div>
        )}

        {/* Command History */}
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

        {/* Current Input Line */}
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
            }`}
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal; 