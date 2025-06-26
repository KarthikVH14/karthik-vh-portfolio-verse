
import React from 'react';
import { ExternalLink, Github, Database, Code, Cpu, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description: "A core Java and MySQL-based app to manage book inventory and transactions.",
      technologies: ["Java", "MySQL", "JDBC"],
      icon: Database,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "To-Do List App",
      description: "A task manager built using HTML, CSS, and JavaScript with local storage functionality.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      icon: Code,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Stress Analysis and Care Prediction using IoT",
      description: "Monitored stress levels using ESP8266, GSR Sensor, OLED, and visualized data in ThingSpeak.",
      technologies: ["ESP8266", "Arduino", "ThingSpeak", "IoT"],
      icon: Cpu,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "AI Content Generator",
      description: "Created 60+ horror shorts and UI content using structured prompts with ChatGPT and Figma AI.",
      technologies: ["ChatGPT", "Figma AI", "Prompt Engineering"],
      icon: Brain,
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                <div className="flex items-center mb-4">
                  <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                    <project.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                    <Github size={16} />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
