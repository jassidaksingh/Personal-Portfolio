import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#c89050]' />
          <div className='w-1 sm:h-40 h-40' style={{ backgroundColor: '#c89050' }} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#c89050]'>Jassidak</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, and digital 
            tools that enhance user experience.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className='w-full h-full flex items-center justify-center'>
        <ComputersCanvas />
      </div>

    </section>
  );
};

export default Hero;