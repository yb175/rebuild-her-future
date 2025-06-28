
import React from 'react';
import Card from '../myComponents/card';

const Index = () => {
  return (
    <div>
      <div id="hero-container">
        <div id="hero" style={{ textAlign: "center", padding: "5rem" }}>
          <h1>Empowering Women , Ending Domestic violence</h1>
          <p>Join us in our mission to empower women and end domestic violence.</p>
          <button id="donate">Learn more</button>
        </div>
      </div>

      <div id="features">
        <h1>Features</h1>
        <p className="text-[#0e151b] text-base font-normal leading-normal max-w-[720px]" style={{ whiteSpace: 'pre-wrap' }}>
          EmpowerHer provides a comprehensive suite of tools designed to support and protect women<br />
          experiencing domestic violence. Our features are built with safety, security, and accessibility in mind.
        </p>
      </div>

      <div className="card-container">
        <Card title="SOS Reporting" description="Quickly report abuse incidents with our SOS feature." svg="#icon-sos" path="/report" />
        <Card title="Moderate Support" description="Access moderate support options for non-emergency situations." svg="#icon-shield" path="/report" />
        <Card title="AI Fake Call Trigger" description="Trigger fake calls using AI to create a safe exit strategy." svg="#icon-robot" path="/ai-features" />
        <Card title="Blockchain Security" description="Your data is securely stored using blockchain technology." svg="#icon-lock" path="/blockchain" />
        <Card title="AI Assistance Chatbot" description="Get instant assistance and information from our AI chatbot." svg="#icon-chat" path="/chat" />
      </div>
    </div>
  );
}

export default Index;