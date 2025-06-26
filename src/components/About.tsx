
import React from 'react';
import { Code, Brain, Users, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Experience with Java, React, MySQL, and modern web technologies"
    },
    {
      icon: Brain,
      title: "AI & Prompt Engineering",
      description: "Skilled in ChatGPT, Gemini, and AI-driven content creation"
    },
    {
      icon: Users,
      title: "Leadership & Volunteering",
      description: "Active placement volunteer and Leo Club member"
    },
    {
      icon: Trophy,
      title: "Conference Presenter",
      description: "Presented IoT projects at IEEE Day events"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I'm a developer with hands-on experience in both front-end and back-end technologies. 
              I've built projects in Java, React, MySQL, and IoT systems using Arduino and ESP8266. 
              I'm actively involved in tech events, have presented at an IEEE conference, and serve as 
              a Placement Volunteer and Leo Club Member.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently upskilling through internships and prompt engineering practice, I'm passionate 
              about building full-stack web apps and integrating AI-driven workflows using tools like 
              ChatGPT, Gemini, and Figma AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full mr-4">
                    <highlight.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{highlight.title}</h3>
                </div>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
