
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Phone, Shield, Users, ArrowLeft, Upload, MapPin } from 'lucide-react';

const ReportAbuse = () => {
  const [selectedSupport, setSelectedSupport] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    location: '',
    urgency: 'high',
    description: '',
    evidence: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${selectedSupport} support request submitted. Help is on the way!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-lg shadow-lg border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors mb-4">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-3 mr-4">
              <AlertTriangle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Report Abuse</h1>
              <p className="text-gray-600">Get immediate help and support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Support Type Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div 
            className={`group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-1 ${
              selectedSupport === 'SOS' 
                ? 'border-red-500 bg-gradient-to-br from-red-50 to-pink-50 shadow-lg' 
                : 'border-gray-200 bg-white/80 hover:border-red-300 hover:shadow-lg'
            }`}
            onClick={() => setSelectedSupport('SOS')}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`rounded-xl p-3 ${
                selectedSupport === 'SOS' 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                  : 'bg-red-100 group-hover:bg-red-200'
              } transition-all duration-300`}>
                <AlertTriangle className={`h-8 w-8 ${selectedSupport === 'SOS' ? 'text-white' : 'text-red-600'}`} />
              </div>
              {selectedSupport === 'SOS' && (
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">SOS Support</h3>
            <p className="text-gray-600 mb-4">Immediate emergency response with officer dispatch to nearest rehab center for your safety.</p>
            <div className="bg-red-100 rounded-lg p-3">
              <p className="text-sm text-red-700 font-medium">⚡ Instant Response • 🚔 Officer Dispatch • 🏥 Safe Transfer</p>
            </div>
          </div>

          <div 
            className={`group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 transform hover:-translate-y-1 ${
              selectedSupport === 'Moderate' 
                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg' 
                : 'border-gray-200 bg-white/80 hover:border-blue-300 hover:shadow-lg'
            }`}
            onClick={() => setSelectedSupport('Moderate')}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`rounded-xl p-3 ${
                selectedSupport === 'Moderate' 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                  : 'bg-blue-100 group-hover:bg-blue-200'
              } transition-all duration-300`}>
                <Users className={`h-8 w-8 ${selectedSupport === 'Moderate' ? 'text-white' : 'text-blue-600'}`} />
              </div>
              {selectedSupport === 'Moderate' && (
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Moderate Support</h3>
            <p className="text-gray-600 mb-4">Professional mediation and counseling services for resolution and healing.</p>
            <div className="bg-blue-100 rounded-lg p-3">
              <p className="text-sm text-blue-700 font-medium">🤝 Mediation • 💬 Counseling • 📋 Support Plan</p>
            </div>
          </div>
        </div>

        {/* Report Form */}
        {selectedSupport && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className={`rounded-xl p-2 mr-3 ${
                selectedSupport === 'SOS' 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500'
              }`}>
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedSupport} Support Request
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 000-0000"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Current Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Street address, city, state"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Situation Description
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Please describe your situation..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Upload Evidence (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Drag and drop files here, or click to select</p>
                  <input type="file" className="hidden" multiple accept="image/*,video/*,audio/*" />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                  selectedSupport === 'SOS'
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                }`}
              >
                Submit {selectedSupport} Request
              </button>
            </form>
          </div>
        )}

        {/* Emergency Contacts */}
        <div className="mt-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 border border-orange-200">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <Phone className="h-5 w-5 mr-2 text-orange-600" />
            Emergency Contacts
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/80 rounded-lg p-3">
              <p className="font-semibold text-gray-800">Emergency Services</p>
              <p className="text-gray-600">911</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="font-semibold text-gray-800">Domestic Violence Hotline</p>
              <p className="text-gray-600">1-800-799-7233</p>
            </div>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="font-semibold text-gray-800">Crisis Text Line</p>
              <p className="text-gray-600">Text HOME to 741741</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportAbuse;
