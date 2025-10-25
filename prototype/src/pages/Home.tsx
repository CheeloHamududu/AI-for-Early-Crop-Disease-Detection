import { Link } from 'react-router-dom';
import { Leaf, Camera, Users, BarChart3, ArrowRight, Shield, Zap, Globe, CheckCircle, Heart, MessageCircle } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: "AI-Powered Detection",
      description: "Upload crop photos for instant disease identification using advanced machine learning"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Farmer Community",
      description: "Connect with fellow farmers and share experiences in managing crop diseases"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Data-Driven Insights",
      description: "Get personalized recommendations based on local conditions and disease patterns"
    }
  ];

  const journeySteps = [
    {
      step: "01",
      title: "Identifying the Core Problem",
      description: "The silent threat in fields - crop diseases like Maize Streak Virus, Early Blight, and Rust were devastating harvests across Zambia, often detected too late for effective intervention.",
      challenge: "Farmers losing entire harvests to diseases identified too late"
    },
    {
      step: "02", 
      title: "Brainstorming Solutions",
      description: "Exploring technological solutions led to AI - a system that could 'see' subtle disease signs invisible to the human eye, providing instant diagnosis right in the field.",
      solution: "AI-powered image recognition for early disease detection"
    },
    {
      step: "03",
      title: "Research & Feasibility",
      description: "With smartphone penetration rising and mature AI technology available, we confirmed that an AI-powered mobile tool for early crop disease detection was not just possible, but essential.",
      validation: "Technology ready, smartphones available, local solutions needed"
    },
    {
      step: "04",
      title: "Community Engagement",
      description: "Creating comprehensive surveys to understand farmers' needs, current practices, and readiness for such technology. Multi-pronged approach through LinkedIn, WhatsApp, and direct outreach.",
      approach: "Listening to farmers through surveys and community engagement"
    },
    {
      step: "05",
      title: "Open Source Commitment",
      description: "Deliberate choice to make this project open-source - fostering transparency, trust, and broader community contribution without commercial barriers.",
      philosophy: "Technology should serve everyone, not create barriers"
    }
  ];

  const impactStats = [
    { number: "70%", label: "of crop losses preventable with early detection" },
    { number: "3M+", label: "smallholder farmers in Zambia" },
    { number: "50%", label: "reduction in pesticide use with accurate diagnosis" },
    { number: "24/7", label: "AI assistance availability" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Leaf className="h-16 w-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Idea to Innovation</h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-green-100">Your Journey to an Open Source AI for Early Crop Disease Detection in Zambia</h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-green-50">
              Empowering Zambian farmers with AI technology to achieve healthier harvests and more secure livelihoods through early disease detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/detect"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-green-700 bg-white hover:bg-green-50 transition-colors"
              >
                Try Disease Detection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/survey"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-green-700 transition-colors"
              >
                Take Farmer Survey
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How CropAI Zambia Helps Farmers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides the tools farmers need to detect, prevent, and manage crop diseases effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey So Far
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From identifying a critical problem to developing an innovative solution - every step driven by community needs.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-green-600 font-bold mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {step.challenge || step.solution || step.validation || step.approach || step.philosophy}
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-full md:w-1/2 md:pl-8">
                    {/* Empty space for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Next for CropAI Zambia?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Collection & Analysis</h4>
                    <p className="text-gray-600">Diligently collecting and analyzing survey data to inform AI model training</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Model Development</h4>
                    <p className="text-gray-600">Building robust machine learning models trained on local crop disease data</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Testing</h4>
                    <p className="text-gray-600">Partnering with farmers for real-world testing and feedback</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Open Source Launch</h4>
                    <p className="text-gray-600">Making the platform freely available to all Zambian farmers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-6">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Mission</h3>
                <p className="text-gray-600">Every farmer who participates brings us closer to a future with healthier crops and secure livelihoods.</p>
              </div>
              
              <div className="space-y-4">
                <Link
                  to="/survey"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Share Your Experience
                </Link>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Have questions or want to collaborate?{' '}
                    <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                      Contact our team
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by principles that put farmers first and technology in service of community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Open Source</h3>
              <p className="text-gray-600">
                Transparency and accessibility - no commercial barriers to technology that saves livelihoods.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Zap className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Harnessing cutting-edge AI to solve age-old agricultural challenges in new ways.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Globe className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community-Driven</h3>
              <p className="text-gray-600">
                Built with farmers, for farmers - every feature shaped by real agricultural needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join hundreds of Zambian farmers already using CropAI Zambia to protect their crops and increase yields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-green-700 bg-white hover:bg-green-50 transition-colors"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-green-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;