import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Users, Target, Award, ChevronRight } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "Sarah Mwila",
      role: "Project Lead & AI Researcher",
      image: "/images/sarah.jpg",
      bio: "Passionate about using AI to solve agricultural challenges in Zambia"
    },
    {
      name: "James Banda",
      role: "Agricultural Expert",
      image: "/images/james.jpg", 
      bio: "15+ years working with Zambian farming communities"
    },
    {
      name: "Grace Phiri",
      role: "Community Outreach",
      image: "/images/grace.jpg",
      bio: "Connecting technology with farmers' real-world needs"
    },
    {
      name: "David Tembo",
      role: "Software Developer",
      image: "/images/david.jpg",
      bio: "Building accessible technology for rural communities"
    }
  ];

  const partners = [
    { name: "Zambia Agricultural Research Institute", logo: "/images/zari.png" },
    { name: "Ministry of Agriculture", logo: "/images/ministry.png" },
    { name: "University of Zambia", logo: "/images/unza.png" },
    { name: "Open Source Initiative", logo: "/images/osi.png" }
  ];

  const milestones = [
    {
      date: "January 2024",
      title: "Project Inception",
      description: "Identified the critical need for early crop disease detection in Zambian farming communities"
    },
    {
      date: "March 2024", 
      title: "Research Phase",
      description: "Conducted extensive field research and farmer interviews across Lusaka province"
    },
    {
      date: "May 2024",
      title: "AI Model Development",
      description: "Began training machine learning models on local crop disease data"
    },
    {
      date: "July 2024",
      title: "Community Testing",
      description: "Launched pilot program with 50+ farmers for real-world testing"
    },
    {
      date: "September 2024",
      title: "Open Source Launch",
      description: "Made the platform freely available to all Zambian farmers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CropAI Zambia
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-green-100">
              Empowering Zambian farmers with accessible AI technology for early crop disease detection and sustainable agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every aspect of our work is driven by a commitment to Zambian farmers and sustainable agriculture.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === 'mission'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'vision'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === 'values'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Values
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="text-center">
                <Target className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To provide Zambian farmers with free, accessible AI-powered tools for early crop disease detection, 
                  enabling timely intervention, reducing crop losses, and improving food security through technology that 
                  serves the community.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center">
                <Award className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A future where every Zambian farmer has access to cutting-edge agricultural technology, 
                  where crop diseases are detected and prevented before they impact yields, and where technology 
                  bridges the gap between traditional farming knowledge and modern innovation.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community First</h4>
                  <p className="text-gray-600">Every decision starts with what's best for farmers and their communities</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                  <p className="text-gray-600">Technology should be available to everyone, regardless of income or location</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
                  <p className="text-gray-600">Committed to the highest standards in AI research and agricultural science</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChevronRight className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600">Continuously pushing boundaries to solve real-world agricultural challenges</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse team of researchers, agricultural experts, and technologists united by a common purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform Zambian agriculture through AI.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-green-600 font-bold mb-2">{milestone.date}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2 pl-8">
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading organizations to advance agricultural technology in Zambia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <p className="text-sm text-gray-600 font-medium">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions, want to collaborate, or need support? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@cropai-zambia.org</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+260 211 123456</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Lusaka, Zambia</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-600">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;