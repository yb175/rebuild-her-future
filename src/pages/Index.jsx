
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, MessageCircle, Lock, AlertTriangle, Heart, Users, Globe, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-2 mr-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SafeGuard</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/report" className="text-gray-700 hover:text-red-600 transition-all duration-300 font-medium relative group">
                Report Abuse
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/ai-features" className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                AI Safety
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/blockchain" className="text-gray-700 hover:text-green-600 transition-all duration-300 font-medium relative group">
                Secure Data
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/chat" className="text-gray-700 hover:text-indigo-600 transition-all duration-300 font-medium relative group">
                Get Help
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-purple-600 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 animate-pulse shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Breaking the Silence,
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent block">
              Building Safety
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive platform using AI and blockchain technology to prevent domestic violence, 
            provide immediate support, and ensure survivor safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/report" 
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <AlertTriangle className="h-5 w-5 mr-2" />
              Emergency Report
            </Link>
            <Link 
              to="/chat" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Support
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-red-200 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Emergency Reporting</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Quick access to SOS support with immediate officer dispatch or moderate support for mediation and counseling.
            </p>
            <Link to="/report" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center group">
              Report Now 
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">AI Safety Features</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fake call trigger for safe exits and voice detection in multiple languages for emergency situations.
            </p>
            <Link to="/ai-features" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
              Learn More 
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-green-100 hover:border-green-200 transform hover:-translate-y-2">
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Blockchain Security</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Secure evidence storage with smart contracts for automatic alerts and authorized access only.
            </p>
            <Link to="/blockchain" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center group">
              View Security 
              <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-white/90 to-purple-50/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 mb-16 border border-purple-100">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Making a Difference</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <Globe className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <MessageCircle className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-gray-600 font-medium">Languages Supported</div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <Shield className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-gray-600 font-medium">Confidential</div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-white mb-2">AI</div>
                <Zap className="h-8 w-8 text-white mx-auto" />
              </div>
              <div className="text-gray-600 font-medium">Powered Safety</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">You Are Not Alone</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our platform is here to support you with cutting-edge technology and compassionate care.
            </p>
            <Link 
              to="/chat" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Start Confidential Chat
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
