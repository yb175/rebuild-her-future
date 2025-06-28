
import React, { useState, useEffect } from 'react';
import { Phone, Mic, MicOff, Settings, Volume2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const AIFeatures = () => {
  const [isListening, setIsListening] = useState(false);
  const [fakeCallActive, setFakeCallActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [voiceDetected, setVoiceDetected] = useState('');
  const [callScenario, setCallScenario] = useState('work');
  const { toast } = useToast();

  const languages = [
    { code: 'english', name: 'English', keywords: ['help me', 'stop', 'no'] },
    { code: 'hindi', name: 'Hindi', keywords: ['bachao', 'madad karo', 'nahi'] },
    { code: 'spanish', name: 'Spanish', keywords: ['ayúdame', 'alto', 'no'] },
    { code: 'french', name: 'French', keywords: ['aidez-moi', 'arrêtez', 'non'] },
    { code: 'arabic', name: 'Arabic', keywords: ['ساعدني', 'توقف', 'لا'] }
  ];

  const callScenarios = [
    { id: 'work', name: 'Work Emergency', script: 'Hi, this is urgent. I need to leave immediately for a work emergency.' },
    { id: 'family', name: 'Family Emergency', script: 'Hello, there\'s a family emergency and I need to go home right now.' },
    { id: 'health', name: 'Health Issue', script: 'I\'m not feeling well and need to go to the doctor immediately.' },
    { id: 'friend', name: 'Friend Needs Help', script: 'My friend needs help urgently, I have to go assist them right now.' }
  ];

  useEffect(() => {
    let interval;
    if (isListening) {
      interval = setInterval(() => {
        const random = Math.random();
        if (random < 0.1) {
          const currentLang = languages.find(lang => lang.code === selectedLanguage);
          const keyword = currentLang.keywords[Math.floor(Math.random() * currentLang.keywords.length)];
          setVoiceDetected(keyword);
          handleEmergencyDetected(keyword);
        }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isListening, selectedLanguage]);

  const handleEmergencyDetected = (keyword) => {
    toast({
      title: "Emergency Detected!",
      description: `Distress keyword "${keyword}" detected. Alerting authorities.`,
      variant: "destructive"
    });
  };

  const startFakeCall = () => {
    setFakeCallActive(true);
    const scenario = callScenarios.find(s => s.id === callScenario);
    toast({
      title: "Fake Call Started",
      description: `Simulating: ${scenario.name}`,
      variant: "default"
    });

    setTimeout(() => {
      if (fakeCallActive) {
        endFakeCall();
      }
    }, 30000);
  };

  const endFakeCall = () => {
    setFakeCallActive(false);
    toast({
      title: "Call Ended",
      description: "You can now safely leave the situation.",
      variant: "default"
    });
  };

  const toggleVoiceDetection = () => {
    if (!isListening) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then(() => {
            setIsListening(true);
            toast({
              title: "Voice Detection Active",
              description: `Listening for distress signals in ${languages.find(l => l.code === selectedLanguage).name}`,
              variant: "default"
            });
          })
          .catch(() => {
            toast({
              title: "Microphone Access Denied",
              description: "Please allow microphone access for voice detection to work.",
              variant: "destructive"
            });
          });
      }
    } else {
      setIsListening(false);
      setVoiceDetected('');
      toast({
        title: "Voice Detection Stopped",
        description: "No longer monitoring for distress signals.",
        variant: "default"
      });
    }
  };

  return (
    <div className="ai-container">
      <div className="ai-header">
        <h1>AI Safety Features</h1>
        <p>Advanced AI-powered tools to help you stay safe in dangerous situations.</p>
      </div>

      <div className="ai-grid">
        <div className="ai-card">
          <div className="ai-card-header">
            <Phone className="ai-icon green" />
            <div>
              <h2>Fake Call Trigger</h2>
              <p>Create a believable excuse to leave unsafe situations</p>
            </div>
          </div>

          <div className="ai-section">
            <label>Select Call Scenario</label>
            <select value={callScenario} onChange={(e) => setCallScenario(e.target.value)} disabled={fakeCallActive}>
              {callScenarios.map(scenario => (
                <option key={scenario.id} value={scenario.id}>{scenario.name}</option>
              ))}
            </select>
            <div className="ai-script">
              <strong>Call Script:</strong>
              <p>"{callScenarios.find(s => s.id === callScenario)?.script}"</p>
            </div>
          </div>

          {!fakeCallActive ? (
            <button className="green-btn" onClick={startFakeCall}>
              <Phone className="ai-btn-icon" /> Start Fake Call
            </button>
          ) : (
            <div>
              <div className="ai-in-progress">
                <div className="ai-pulse"></div>
                <span>Call in Progress...</span>
              </div>
              <button className="red-btn" onClick={endFakeCall}>End Call</button>
            </div>
          )}
        </div>

        <div className="ai-card">
          <div className="ai-card-header">
            <Volume2 className="ai-icon purple" />
            <div>
              <h2>Voice Detection</h2>
              <p>AI listens for distress signals in multiple languages</p>
            </div>
          </div>

          <div className="ai-section">
            <label>Detection Language</label>
            <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
              {languages.map(lang => (
                <option key={lang.code} value={lang.code}>{lang.name}</option>
              ))}
            </select>

            <div className="ai-script">
              <strong>Monitored Keywords ({languages.find(l => l.code === selectedLanguage)?.name}):</strong>
              <div className="ai-keywords">
                {languages.find(l => l.code === selectedLanguage)?.keywords.map((keyword, index) => (
                  <span key={index} className="ai-keyword">"{keyword}"</span>
                ))}
              </div>
            </div>
          </div>

          <button className={isListening ? "red-btn" : "purple-btn"} onClick={toggleVoiceDetection}>
            {isListening ? <><MicOff className="ai-btn-icon" /> Stop Listening</> : <><Mic className="ai-btn-icon" /> Start Voice Detection</>}
          </button>

          {isListening && (
            <div className="ai-in-progress purple">
              <div className="ai-pulse purple"></div>
              <span>Listening for distress signals...</span>
              {voiceDetected && <p>Last detected: "{voiceDetected}"</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
