import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-#D3D3D3 text-[17px] max-w-3xl leading-[30px]'
      >
        I’m a software developer with a strong foundation in computer science 
        and hands-on experience in a wide range of technologies. My work includes 
        building intuitive applications and scalable backend systems using tools 
        like Python, Node.js, MongoDB, and Express, as well as crafting dynamic, 
        responsive front-end designs with HTML, CSS, JavaScript, TypeScript, 
        and React. I leverage Tailwind CSS for styling, Docker for containerization, 
        Git for version control, and Figma for UI design. Let’s work together to 
        bring your innovative ideas to life!
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");