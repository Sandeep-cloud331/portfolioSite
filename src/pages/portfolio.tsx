import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/proj9.png";
import proj2 from "../assets/proj11.png";
import proj3 from "../assets/proj12.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";


const projects = [
  {
    title: "Uber clone",
    desc: "Developed an Uber-like ride-booking platform using the MERN stack with Google Maps API integration. The app includes user authentication, ride requests, fare estimation, driver-rider matching Designed for a smooth UI/UX experience with dynamic updates for both drivers and passengers",
    devstack: "MERN",
    link: "https://uber-app-gold.vercel.app/",
    git: "https://github.com/Sandeep-cloud331/uber-clone",
    src: proj2,
    type: "frontend",
  },
  {
    title: "Chat Application",
    desc: "Built a real-time Chat Application using the MERN stack (MongoDB, Express.js, React, Node.js) with Socket.io for instant messaging. Features include user authentication, one-on-one and a responsive UI. The app ensures seamless communication with an efficient WebSocket architecture",
    devstack: "MongoDB, Express, React, Node.js",
    link: "https://chat-app-kkyl.onrender.com",
    git: "https://github.com/Sandeep-cloud331/chat-app",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "Portfolio Website",
    desc: "Developed a responsive and visually appealing portfolio website showcasing projects. Implemented smooth animations and interactive UI elements using Framer Motion for an enhanced user experience. Utilized Tailwind CSS for efficient styling and responsiveness.",
    devstack: "React, Tailwind",
    link: "#",
    git: "https://github.com/Sandeep-cloud331/portfolioSite",
    src: proj3,
    type: "frontend",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-32" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown
                    className={`w-6 h-6 transform transition-transform ${expandedIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-8  bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8 mt-10">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};