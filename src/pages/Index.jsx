
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, MessageCircle, Lock, AlertTriangle, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-purple-600 mr-2" />
              <span className="text-xl font-bold text-gray-800">SafeGuard</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/report" className="text-gray-700 hover:text-purple-600 transition-colors">Report Abuse</Link>
              <Link to="/ai-features" className="text-gray-700 hover:text-purple-600 transition-colors">AI Safety</Link>
              <Link to="/blockchain" className="text-gray-700 hover:text-purple-600 transition-colors">Secure Data</Link>
              <Link to="/chat" className="text-gray-700 hover:text-purple-600 transition-colors">Get Help</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-purple-600">
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
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Breaking the Silence,
            <span className="text-purple-600 block">Building Safety</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive platform using AI and blockchain technology to prevent domestic violence, 
            provide immediate support, and ensure survivor safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/report" 
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <AlertTriangle className="h-5 w-5 mr-2" />
              Emergency Report
            </Link>
            <Link 
              to="/chat" 
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Support
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Emergency Reporting</h3>
            <p className="text-gray-600 mb-4">
              Quick access to SOS support with immediate officer dispatch or moderate support for mediation and counseling.
            </p>
            <Link to="/report" className="text-red-600 hover:text-red-700 font-medium">
              Report Now →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Safety Features</h3>
            <p className="text-gray-600 mb-4">
              Fake call trigger for safe exits and voice detection in multiple languages for emergency situations.
            </p>
            <Link to="/ai-features" className="text-blue-600 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Blockchain Security</h3>
            <p className="text-gray-600 mb-4">
              Secure evidence storage with smart contracts for automatic alerts and authorized access only.
            </p>
            <Link to="/blockchain" className="text-green-600 hover:text-green-700 font-medium">
              View Security →
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Making a Difference</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Confidential</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">AI</div>
              <div className="text-gray-600">Powered Safety</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center text-white">
          <Heart className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">You Are Not Alone</h2>
          <p className="text-lg mb-6 opacity-90">
            Our platform is here to support you with cutting-edge technology and compassionate care.
          </p>
          <Link 
            to="/chat" 
            className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Start Confidential Chat
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
