
import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const Experience = () => {
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
    <section className="py-20 bg-white">
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
    </section>
  );
};

export default Experience;
