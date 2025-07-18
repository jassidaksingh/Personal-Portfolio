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
    fluenty,
    ualberta,
    knok,
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
      title: "Product Owner & Full Stack Developer",
      company_name: "Fluenty",
      icon: fluenty,
      iconBg: "#383E56",
      date: "January 2025 - April 2025",
      points: [
        "Led the development of a real-time web platform that connected native Canadian English instructors with over 10,000 Brazilian students to enhance English education through live interaction.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Designed AI-driven recommendation systems for personalized learning and live progress tracking, resulting in 40% higher student engagement.",
        "Added secure video calls and live chat to support real-time classes and feedback, making it easier to schedule sessions and improving attendance by 25%.",
      ],
    },
    {
      title: "Machine Learning Researcher",
      company_name: " University of Alberta",
      icon: ualberta,
      iconBg: "#E6DEDD",
      date: "January 2025 - April 2025",
      points: [
        "Built streaming and batch reinforcement learning agents using Stream-Q and tested them on T-maze environments; eLSTM-RTRL agents converged up to 40% faster than BPTT in long-horizon tasks.",
        "Implemented and compared eLSTM and RTU models on the Copy Task, achieving over 95% accuracy with eLSTM and showing better memory retention than RTU.",
        "Used Real-Time Recurrent Learning (RTRL) for fully online training, allowing RL agents to learn in partially observable environments without replay buffers and improving learning efficiency.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Singh Enterprises",
      icon: singhenterprises,
      iconBg: "#E6DEDD",
      date: "September 2024 - December 2024",
      points: [
        "Engineered an e-commerce website to digitize the retail store’s operations and increased online sales by 20% through improved product management and intuitive user flows.",
        "Integrated secure authentication and payment systems using the Stripe API, enhancing user trust and streamlining the checkout experience.",
        "Refactored backend API architecture and database queries to support real-time inventory updates and reduce response times by 35%.",
      ],
    },
    {
      title: "Sales Manager",
      company_name: "Knok - Telus Partner",
      icon: knok,
      iconBg: "#E6DEDD",
      date: "May 2023 - August 2024",
      points: [
        "Sold a full range of Telus products, with a primary focus on security alarm systems, by directly engaging and building relationships with customers to understand and meet their needs.",
        "Mentored new hires on pitch strategy, objection handling, and daily workflows, accelerating their onboarding and boosting early performance.",
        "Adapted sales strategies in real-time based on customer behavior and neighborhood patterns, leading to higher close rates in competitive territories",
      ],
    },
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