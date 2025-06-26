
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "HTML5", "CSS"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["React.js", "Spring Boot (basic)", "Oracle", "JDBC"]
    },
    {
      title: "Databases",
      skills: ["MySQL"]
    },
    {
      title: "Dev Tools",
      skills: ["Git", "GitHub", "VS Code", "Eclipse", "Postman"]
    },
    {
      title: "AI & Prompt Engineering",
      skills: ["ChatGPT", "Gemini", "DALL·E", "Figma AI"]
    },
    {
      title: "Design & UI",
      skills: ["Figma", "UI/UX Basics"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Volunteering", "Teamwork"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
