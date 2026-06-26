import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";


const teamMembers = [
  {
    name: "Rasak Gbadamosi",
    role: "CEO/Lead Solar Engineer",
    bio: "Specializes in residential and commercial solar panel installations with over 10 years of experience.",
    image: "/assets/gennet2.jpeg",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },


    {
    name: "Shazaniyu Gbadamosi",
    role: "Web/Graphics designer",
    bio: "Develops website and graphics ",
    image: "/assets/niyu.jpeg",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  
 
  
];

const TeamSection = () => {
  return (
    <section className="bg-[#F4F6F8] py-24 px-6 md:px-16">
      
      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#1E4E79]">
          Meet Our <span className="text-[#F57C00]">Team</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Our dedicated professionals power your solar and CCTV installations with expertise and care.
        </p>
        <div className="w-24 h-1 bg-[#F57C00] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* TEAM GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-[#1E4E79]">{member.name}</h3>
              <p className="text-[#F57C00] font-medium mt-1">{member.role}</p>
              <p className="text-gray-600 mt-2 text-sm">{member.bio}</p>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-4 mt-4">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-[#1E4E79] hover:text-[#F57C00]" />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="text-[#1E4E79] hover:text-[#F57C00]" />
                  </a>
                )}
                {member.facebook && (
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-[#1E4E79] hover:text-[#F57C00]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;