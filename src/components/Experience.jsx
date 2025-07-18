import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDarkMode ? "#1b1b1f" : "#f3f4f6",
        color: isDarkMode ? "#fff" : "#000",
        border: isDarkMode ? "none" : "1px solid #e5e7eb",
      }}
      contentArrowStyle={{ 
        borderRight: `7px solid ${isDarkMode ? "#1b1b1f" : "#f3f4f6"}` 
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className={`text-[24px] font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`text-[14px] pl-1 tracking-wider ${isDarkMode ? 'text-white-100' : 'text-gray-800'}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-black dark:text-secondary`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-black dark:text-white`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");