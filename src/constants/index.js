import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    singhenterprises,
    shopify,
    carrent,
    jobit,
    tripguide,
    dragonshell,
    threejs,
    nba,
    social,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
      },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Fluenty",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2024 - Present",
      points: [
        "Developing and maintaining web-based platform to connect native Canadian English instructors with Brazilian students, enhancing English education in schools through real-time interaction.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Integrating video conferencing tools and automated session notifications for seamless virtual classes.",
        "Built features for session scheduling, progress tracking, and gamified tools like leaderboards and points.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Singh Enterprises",
      icon: singhenterprises,
      iconBg: "#E6DEDD",
      date: "September 2024 - Dec 2024",
      points: [
        "Developing and maintaining custom e-commerce website to digitize the retail store’s operations and improve online sales",
        "Implementing product management and secure user authentication using Django and React.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NBA Poeltl Solver",
      description:
        "A Flask app that helps users solve the NBA-themed Poeltl guessing game by providing refined player suggestions based on team, position, and attributes, using API-sourced stats and interactive filtering.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: nba,
      source_code_link: "https://github.com/jassidaksingh/Poeltl-Solver",
    },
    {
      name: "Social Distribution",
      description:
        "Built a distributed social networking platform, enabling authors to publish, share, and interact across interconnected nodes. The platform supports federated interactions, including posts, comments, likes, and follow requests, across multiple nodes, fostering a peer-to-peer experience. Implemented privacy settings, an inbox-based model for message delivery, and compatibility with external integrations (e.g., GitHub). Designed a streamlined RESTful API and integrated with other teams for cross-node functionality.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: social,
      source_code_link: "https://github.com/",
    },
    {
      name: "Dragonshell",
      description:
        "DragonShell is a custom shell application designed to handle basic command-line operations with additional functionality. It supports executing user commands, managing processes, and includes unique features like job control, redirection, and piping to enhance user interaction. Built with a focus on simplicity and efficiency, DragonShell offers a streamlined interface for managing system tasks.",
      tags: [
        {
          name: "c",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: dragonshell,
      source_code_link: "https://github.com/uoa-cmput379/dragonshell-jassidaksingh",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { technologies, experiences, projects };