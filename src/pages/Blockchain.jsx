// Blockchain.jsx
import React, { useState } from 'react';
import Message from '../myComponents/message';

const Blockchain = () => {
  const [fileSubmit,setFileSubmit] = useState(false);
  const [evidenceFiles, setEvidenceFiles] = useState([]);
  const [reportCount, setReportCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
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
      hash: 'bc' + Math.random().toString(36).substr(2, 9),
      encrypted: true,
      accessible: ['Organization', 'Authorized Courts']
    }));
    setEvidenceFiles(prev => [...prev, ...newFiles]);
    setFileSubmit(true);
  };

  const simulateReportSubmission = () => {
    setReportCount(prev => prev + 1);
    setShowMessage(true);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="container">
      <h1 className="title">Blockchain Security</h1>
      <p className="subtitle">Secure evidence storage using blockchain technology with smart contract monitoring.</p>

      <div className="dashboard">
        <DashboardItem label="Total Reports" value={blockchainData.totalReports} />
        <DashboardItem label="Evidence Files" value={blockchainData.securedEvidence} />
        <DashboardItem label="Active Contracts" value={blockchainData.activeContracts} />
        <DashboardItem label="Alerts Triggered" value={blockchainData.alertsTriggered} />
      </div>

      <div className="sections">
        <EvidenceSection evidenceFiles={evidenceFiles} handleFileUpload={handleFileUpload} formatFileSize={formatFileSize} fileSubmit={fileSubmit}/>
        <SmartContractSection reportCount={reportCount} simulateReportSubmission={simulateReportSubmission} />
      </div>
      {showMessage&& <Message mess={"Report submitted successfully"}/>}
    </div>
  );
};

const DashboardItem = ({ label, value }) => (
  <div className="dashboard-item">
    <h3>{value}</h3>
    <p>{label}</p>
  </div>
);

const EvidenceSection = ({ evidenceFiles, handleFileUpload, formatFileSize,fileSubmit }) => (
  <div className="section">
    <h2>Secure Evidence Storage</h2>
    <input type="file" onChange={handleFileUpload} multiple className="file-input" />
    {evidenceFiles.length > 0 && (
      <div className="file-list">
        {evidenceFiles.map(file => (
          <div key={file.id} className="file-item">
            <strong>{file.name}</strong> - {formatFileSize(file.size)}
          </div>
        ))}
      </div>
    )}
    {fileSubmit && <Message mess={"File uploaded successfully"}/>}
  </div>
);

const SmartContractSection = ({ reportCount, simulateReportSubmission }) => (
  <div className="section">
    <h2>Smart Contract Monitor</h2>
    <p>Report Count: {reportCount}</p>
    <button onClick={simulateReportSubmission} className="submit-button">Submit Report</button>
    {reportCount >= 2 && <p className="alert">Alert triggered: Multiple reports detected!</p>}
  </div>

);

export default Blockchain;
