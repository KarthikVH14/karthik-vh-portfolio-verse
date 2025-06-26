
import React, { useState } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown, Code, Brain, Users, Trophy, ExternalLink, Database, Cpu, Briefcase, GraduationCap, Award, Calendar, Phone, Send, MapPin } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/RenderCV_sb2nov_Theme.pdf';
    link.download = 'Karthik_VH_Resume.pdf';
    link.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const experiences = [
    {
      type: "internship",
      title: "Java Full Stack Intern",
      company: "Alpha Tech Academy",
      period: "Feb 2025 – Present",
      icon: Briefcase
    },
    {
      type: "internship",
      title: "Java Developer Intern",
      company: "Edubridge Learning",
      period: "Mar 2025 – May 2025",
      icon: Briefcase
    },
    {
      type: "internship",
      title: "SQL Intern",
      company: "Besant Technologies",
      period: "Feb 2025 – May 2025",
      icon: Briefcase
    }
  ];

  const education = [
    {
      degree: "B.E. Electronics and Communication Engineering",
      institution: "Visvesvaraya Technological University",
      period: "2021–2025"
    },
    {
      degree: "PUC – Science (PCMC)",
      institution: "Shree Venkateshwara PU College",
      period: "2019–2021"
    }
  ];

  const achievements = [
    "Presented air quality monitoring project at IEEE Day event",
    "Active Placement Volunteer at SEA College, helping peers with resumes and job prep",
    "Completed GUVI AI & Figma Workshop",
    "5-Day Gen AI Bootcamp by Google (Prompt Engineering, Vector Stores)",
    "Leo Club Member – Leadership & Social Volunteering",
    "Attended Industrial Visit for real-world tech exposure"
  ];

  const certifications = [
    "Java Full Stack – Alpha Tech Academy, Edubridge",
    "SQL – Besant Technologies",
    "Google Gen AI Bootcamp (Prompt Engineering)",
    "GUVI Workshop on AI with Figma"
  ];

  return (
    <div className="min-h-screen">
      {/* All-in-One Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Karthik V H
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Java Full Stack Developer | Web Development Enthusiast | Prompt Engineering Explorer
              </p>
              <p className="text-lg mb-12 text-gray-300 max-w-3xl mx-auto">
                Final-year engineering student exploring the intersection of software development, 
                user experience, and AI-powered content creation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </button>
                <button 
                  onClick={scrollToContact}
                  className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Contact Me
                </button>
              </div>

              <div className="flex justify-center gap-6 mb-16">
                <a href="https://github.com/KarthikVH14" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/karthikvh" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <button 
              onClick={scrollToAbout}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-20 bg-gray-50 text-gray-800">
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
        </div>

        {/* Skills Section */}
        <div className="py-20 bg-white text-gray-800">
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
        </div>

        {/* Projects Section */}
        <div className="py-20 bg-gray-50 text-gray-800">
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
        </div>

        {/* Experience Section */}
        <div className="py-20 bg-white text-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Experience & Education</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Experience & Education */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <Briefcase className="text-blue-600" />
                  Internships
                </h3>
                <div className="space-y-6 mb-12">
                  {experiences.map((exp, index) => (
                    <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-600">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-600 p-2 rounded-full">
                          <exp.icon className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                          <p className="text-blue-600 font-medium">{exp.company}</p>
                          <p className="text-gray-600 flex items-center gap-2 mt-1">
                            <Calendar size={16} />
                            {exp.period}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <GraduationCap className="text-purple-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-600">
                      <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                      <p className="text-purple-600 font-medium">{edu.institution}</p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1">
                        <Calendar size={16} />
                        {edu.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements & Certifications */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <Award className="text-green-600" />
                  Achievements
                </h3>
                <div className="space-y-4 mb-12">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border-l-4 border-green-600">
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                  <Award className="text-orange-600" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border-l-4 border-orange-600">
                      <p className="text-gray-700">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Let's discuss your next project or explore opportunities to work together
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <a href="mailto:karthik02132003@gmail.com" className="text-white hover:text-blue-400 transition-colors duration-200">
                        karthik02132003@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-green-600 p-3 rounded-full">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-gray-300">Phone</p>
                      <a href="tel:+918088836529" className="text-white hover:text-green-400 transition-colors duration-200">
                        +91 8088836529
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-300">Location</p>
                      <p className="text-white">Bengaluru, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://github.com/KarthikVH14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                    <a 
                      href="https://linkedin.com/in/karthikvh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-gray-300 border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-gray-300 border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white bg-opacity-20 border border-gray-300 border-opacity-30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project or say hello!"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Future Goals Section */}
            <div className="mt-20 text-center">
              <h3 className="text-3xl font-bold mb-8">Future Goals</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Master Full Stack</h4>
                  <p className="text-sm text-gray-300">Advanced frameworks & scalable applications</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
                  <h4 className="font-semibold mb-2">AI Integration</h4>
                  <p className="text-sm text-gray-300">Build AI-integrated tools & workflows</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Prompt Engineering</h4>
                  <p className="text-sm text-gray-300">Continue exploring API usage & UX</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Career Growth</h4>
                  <p className="text-sm text-gray-300">Secure full-time software development role</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">© 2025 Karthik V H. All rights reserved.</p>
              </div>
              
              <div className="flex gap-4">
                <a 
                  href="https://github.com/KarthikVH14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/karthikvh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:karthik02132003@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Index;
