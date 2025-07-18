import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "./ThemeProvider";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { isDarkMode } = useTheme();

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_vvu1i4k',
        'template_d5zxgaw',
        {
          from_name: form.name,
          to_name: "Jassidak Singh",
          from_email: form.email,
          to_email: "sjassidak@gmail.com",
          message: form.message,
        },
        '9-b6xPz0oAxllX7WS'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-[0.75] ${
          isDarkMode ? 'bg-[#1b1b1f]' : 'bg-[#f3f4f6] border border-[#e5e7eb]'
        } p-8 rounded-2xl`}
      >
        <p className={`${styles.sectionSubText} text-black dark:text-secondary`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-black dark:text-white`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className={`${
                isDarkMode ? 'bg-[#2b2b2f] text-white' : 'bg-white text-gray-900 border border-gray-300'
              } py-4 px-6 placeholder:text-secondary rounded-lg outline-none font-medium focus:ring-2 focus:ring-[#c89050]`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className={`${
                isDarkMode ? 'bg-[#2b2b2f] text-white' : 'bg-white text-gray-900 border border-gray-300'
              } py-4 px-6 placeholder:text-secondary rounded-lg outline-none font-medium focus:ring-2 focus:ring-[#c89050]`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className={`${
                isDarkMode ? 'bg-[#2b2b2f] text-white' : 'bg-white text-gray-900 border border-gray-300'
              } py-4 px-6 placeholder:text-secondary rounded-lg outline-none font-medium focus:ring-2 focus:ring-[#c89050]`}
            />
          </label>

          <button
            type='submit'
            className={`${
              isDarkMode 
                ? 'bg-[#2b2b2f] text-white hover:bg-[#3b3b3f]' 
                : 'bg-[#c89050] text-white hover:bg-[#b88040]'
            } py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md transition-colors duration-200`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");