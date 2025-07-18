import { motion } from "framer-motion";

import { styles } from "../styles";
import { useTheme } from "./ThemeProvider";
import Terminal from "./Terminal";

const Hero = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`relative w-full h-screen mx-auto bg-primary-light dark:bg-primary-dark`}>
      <div className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col justify-start pt-20`}>
        <div className='flex flex-row items-start gap-5'>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#c89050]' />
            <div className='w-1 sm:h-40 h-40 bg-[#c89050]' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm <span className='text-[#c89050]'>Jassidak</span>
            </h1>
            <p className={`${styles.heroSubText} mt-1`}>
              I develop web applications, and digital 
              tools that enhance user experience.
            </p>
            <div className="mt-6">
              <a
                href="/Jassidak Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold
                  ${isDarkMode 
                    ? 'bg-[#c89050] text-white hover:bg-[#b88040]' 
                    : 'bg-[#c89050] text-white hover:bg-[#b88040]'
                  } transition-colors`}
              >
                View Resume
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-4 h-4"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Terminal Component */}
        <div className="mt-6 max-w-2xl mx-auto w-full">
          <Terminal />
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex justify-center items-center pb-8">
        <a href="#about">
          <div className={`w-[35px] h-[64px] rounded-3xl border-4 ${
            isDarkMode ? 'border-white' : 'border-black'
          } flex justify-center items-start p-2`}>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full ${
                isDarkMode ? 'bg-white' : 'bg-black'
              } mb-1`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;