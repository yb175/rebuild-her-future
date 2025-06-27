
import React, { useState } from 'react';
import { AlertTriangle, Phone, MessageCircle, MapPin, Clock, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReportAbuse = () => {
  const [reportType, setReportType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    urgency: '',
    description: '',
    evidence: null,
    phone: '',
    anonymous: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      if (reportType === 'sos') {
        toast({
          title: "SOS Alert Sent",
          description: "Emergency services have been notified. An officer will reach you within 10 minutes.",
          variant: "default"
        });
      } else {
        toast({
          title: "Report Submitted",
          description: "Your report has been received. A counselor will contact you within 24 hours.",
          variant: "default"
        });
      }
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        location: '',
        urgency: '',
        description: '',
        evidence: null,
        phone: '',
        anonymous: false
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Report Abuse</h1>
          <p className="text-lg text-gray-600">
            Choose the type of support you need. All reports are handled with complete confidentiality.
          </p>
        </div>

        {/* Support Type Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div 
            className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer border-2 transition-all ${
              reportType === 'sos' ? 'border-red-500 ring-4 ring-red-100' : 'border-gray-200 hover:border-red-300'
            }`}
            onClick={() => setReportType('sos')}
          >
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-600">SOS Support</h3>
                <p className="text-sm text-gray-600">Immediate Emergency Response</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-red-500" />
                Nearest officer dispatch
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-red-500" />
                Safe transport to rehab center
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-red-500" />
                Response within 10 minutes
              </li>
            </ul>
          </div>

          <div 
            className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer border-2 transition-all ${
              reportType === 'moderate' ? 'border-purple-500 ring-4 ring-purple-100' : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => setReportType('moderate')}
          >
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <MessageCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-600">Moderate Support</h3>
                <p className="text-sm text-gray-600">Mediation & Counseling</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-2 text-purple-500" />
                Professional mediation
              </li>
              <li className="flex items-center">
                <Shield className="h-4 w-4 mr-2 text-purple-500" />
                Counseling sessions
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-purple-500" />
                Response within 24 hours
              </li>
            </ul>
          </div>
        </div>

        {/* Report Form */}
        {reportType && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">
              {reportType === 'sos' ? 'Emergency Report Form' : 'Support Request Form'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name {formData.anonymous && '(Optional)'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required={!formData.anonymous}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location/Address
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                >
                  <option value="">Select urgency level</option>
                  <option value="critical">Critical - Immediate danger</option>
                  <option value="high">High - Ongoing threat</option>
                  <option value="medium">Medium - Recent incident</option>
                  <option value="low">Low - Seeking advice</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Describe the Situation
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Please provide details about the situation. This information will be kept confidential."
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Evidence (Optional)
                </label>
                <input
                  type="file"
                  name="evidence"
                  onChange={handleInputChange}
                  multiple
                  accept="image/*,audio/*,video/*,.pdf"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload photos, audio recordings, or documents. All files are encrypted and securely stored.
                </p>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  Submit this report anonymously
                </label>
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setReportType('')}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg text-white font-semibold transition-colors ${
                    reportType === 'sos' 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-purple-600 hover:bg-purple-700'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Submitting...' : 
                   reportType === 'sos' ? 'Send SOS Alert' : 'Submit Report'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportAbuse;
