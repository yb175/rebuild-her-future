
import React, { useState } from 'react';
import { Lock, Shield, FileText, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Blockchain = () => {
  const [evidenceFiles, setEvidenceFiles] = useState([]);
  const [contractStatus, setContractStatus] = useState('active');
  const [reportCount, setReportCount] = useState(0);
  const { toast } = useToast();

  // Mock blockchain data
  const blockchainData = {
    totalReports: 1247,
    securedEvidence: 3892,
    activeContracts: 156,
    alertsTriggered: 23
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      uploadTime: new Date().toISOString(),
      hash: 'bc' + Math.random().toString(36).substr(2, 9), // Mock hash
      encrypted: true,
      accessible: ['Organization', 'Authorized Courts']
    }));
    
    setEvidenceFiles(prev => [...prev, ...newFiles]);
    
    toast({
      title: "Evidence Secured",
      description: `${files.length} file(s) encrypted and stored on blockchain`,
      variant: "default"
    });
  };

  const simulateReportSubmission = () => {
    const newCount = reportCount + 1;
    setReportCount(newCount);
    
    if (newCount >= 2) {
      toast({
        title: "Smart Contract Triggered",
        description: "Multiple reports detected. Automatic alert sent to authorities.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Report Recorded",
        description: "First report logged on blockchain. Smart contract monitoring active.",
        variant: "default"
      });
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blockchain Security</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced blockchain technology ensures your evidence is secure, immutable, and accessible only to authorized parties. 
            Smart contracts automatically trigger alerts for repeat offenses.
          </p>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{blockchainData.totalReports}</div>
            <div className="text-sm text-gray-600">Total Reports Secured</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{blockchainData.securedEvidence}</div>
            <div className="text-sm text-gray-600">Evidence Files Encrypted</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{blockchainData.activeContracts}</div>
            <div className="text-sm text-gray-600">Active Smart Contracts</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{blockchainData.alertsTriggered}</div>
            <div className="text-sm text-gray-600">Automatic Alerts Sent</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Evidence Storage */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <Lock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Secure Evidence Storage</h2>
                <p className="text-gray-600">Upload and encrypt evidence on the blockchain</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Evidence Files
                </label>
                <input
                  type="file"
                  onChange={handleFileUpload}
                  multiple
                  accept="image/*,audio/*,video/*,.pdf,.doc,.docx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Supported: Images, Audio, Video, PDF, Documents
                </p>
              </div>

              {evidenceFiles.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-800">Uploaded Evidence:</h3>
                  {evidenceFiles.map(file => (
                    <div key={file.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm text-gray-800">{file.name}</span>
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </div>
                      <div className="text-xs text-gray-600 space-y-1">
                        <div>Size: {formatFileSize(file.size)}</div>
                        <div>Hash: {file.hash}</div>
                        <div>Uploaded: {new Date(file.uploadTime).toLocaleString()}</div>
                        <div className="flex items-center">
                          <Lock className="h-3 w-3 mr-1" />
                          Encrypted & Secured
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-xs text-gray-600 mb-1">Access Authorized For:</div>
                        <div className="flex flex-wrap gap-1">
                          {file.accessible.map((entity, index) => (
                            <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                              {entity}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Security Features:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• End-to-end encryption</li>
                <li>• Immutable blockchain storage</li>
                <li>• Access limited to authorized parties</li>
                <li>• Tamper-proof evidence integrity</li>
                <li>• Automatic backup and redundancy</li>
              </ul>
            </div>
          </div>

          {/* Smart Contracts */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Smart Contract Monitor</h2>
                <p className="text-gray-600">Automated alerts for repeat offenses</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-800">Contract Status</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    contractStatus === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {contractStatus === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Smart contract is monitoring for repeat abuse reports. 
                  Automatic alerts will be triggered when patterns are detected.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-gray-800">Report Count</span>
                  <span className="text-2xl font-bold text-purple-600">{reportCount}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Current reports in the system. Alert threshold: 2 reports.
                </p>
                <button
                  onClick={simulateReportSubmission}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                >
                  Simulate Report Submission
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-gray-800">Contract Rules:</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      First report: Logged and monitored
                    </span>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-4 w-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Second report: Automatic alert to authorities
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">
                      Multiple reports: Enhanced protection protocols
                    </span>
                  </div>
                </div>
              </div>

              {reportCount >= 2 && (
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                    <span className="font-medium text-red-800">Alert Triggered</span>
                  </div>
                  <p className="text-sm text-red-700 mt-1">
                    Multiple reports detected. Authorities have been automatically notified 
                    and enhanced protection measures are now active.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technology Information */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            How Our Blockchain Technology Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Encryption & Storage</h3>
              <p className="text-sm text-gray-600">
                All evidence is encrypted using military-grade encryption before being stored 
                on our private blockchain network.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-3">Access Control</h3>
              <p className="text-sm text-gray-600">
                Smart contracts control who can access data. Only authorized organizations 
                and courts can view evidence.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-3">Automated Alerts</h3>
              <p className="text-sm text-gray-600">
                Smart contracts monitor patterns and automatically trigger alerts 
                when repeat offenses are detected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
