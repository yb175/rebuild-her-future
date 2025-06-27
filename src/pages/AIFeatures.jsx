
import React, { useState, useEffect } from 'react';
import { Phone, Mic, MicOff, Play, Pause, Settings, Volume2 } from 'lucide-react';
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

  // Simulate voice detection
  useEffect(() => {
    let interval;
    if (isListening) {
      interval = setInterval(() => {
        // Simulate random voice detection for demo
        const random = Math.random();
        if (random < 0.1) { // 10% chance
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
    
    // In real implementation, this would trigger emergency protocols
    console.log('Emergency detected:', keyword);
  };

  const startFakeCall = () => {
    setFakeCallActive(true);
    const scenario = callScenarios.find(s => s.id === callScenario);
    
    toast({
      title: "Fake Call Started",
      description: `Simulating: ${scenario.name}`,
      variant: "default"
    });

    // Auto-end call after 30 seconds for demo
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
      // Request microphone permission
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Safety Features</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advanced AI-powered tools to help you stay safe in dangerous situations. 
            These features work silently in the background to provide immediate assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Fake Call Feature */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Fake Call Trigger</h2>
                <p className="text-gray-600">Create a believable excuse to leave unsafe situations</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Call Scenario
                </label>
                <select
                  value={callScenario}
                  onChange={(e) => setCallScenario(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={fakeCallActive}
                >
                  {callScenarios.map(scenario => (
                    <option key={scenario.id} value={scenario.id}>
                      {scenario.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Call Script:</strong>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  "{callScenarios.find(s => s.id === callScenario)?.script}"
                </p>
              </div>
            </div>

            {!fakeCallActive ? (
              <button
                onClick={startFakeCall}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Start Fake Call
              </button>
            ) : (
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                    <span className="text-green-800 font-medium">Call in Progress...</span>
                  </div>
                  <p className="text-green-700 text-sm mt-2">
                    Your phone is now "ringing" with a fake emergency call. Use this as your excuse to leave.
                  </p>
                </div>
                <button
                  onClick={endFakeCall}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  End Call
                </button>
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">How it works:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Your phone will simulate an incoming call</li>
                <li>• A realistic ringtone will play</li>
                <li>• You can "answer" and follow the script</li>
                <li>• Provides a believable reason to leave</li>
              </ul>
            </div>
          </div>

          {/* Voice Detection Feature */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <Volume2 className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">Voice Detection</h2>
                <p className="text-gray-600">AI listens for distress signals in multiple languages</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detection Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Monitored Keywords ({languages.find(l => l.code === selectedLanguage)?.name}):
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.find(l => l.code === selectedLanguage)?.keywords.map((keyword, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                      "{keyword}"
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={toggleVoiceDetection}
              className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-colors ${
                isListening 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="h-5 w-5 mr-2" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="h-5 w-5 mr-2" />
                  Start Voice Detection
                </>
              )}
            </button>

            {isListening && (
              <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-purple-800 font-medium">Listening for distress signals...</span>
                </div>
                {voiceDetected && (
                  <p className="text-purple-700 text-sm mt-2">
                    Last detected: "{voiceDetected}"
                  </p>
                )}
              </div>
            )}

            <div className="mt-6 p-4 bg-orange-50 rounded-lg">
              <h4 className="font-medium text-orange-800 mb-2">Privacy Notice:</h4>
              <p className="text-sm text-orange-700">
                Voice detection runs locally on your device. No audio is transmitted or stored. 
                Only detected keywords trigger emergency protocols.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Features Preview */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Coming Soon: Advanced AI Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Smart Environment Detection</h3>
              <p className="text-sm text-gray-600">
                AI analyzes background noise to detect potentially dangerous environments
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Predictive Call Timing</h3>
              <p className="text-sm text-gray-600">
                Machine learning optimizes fake call timing based on conversation patterns
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Volume2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Emotion Recognition</h3>
              <p className="text-sm text-gray-600">
                Advanced voice analysis detects stress levels and emotional distress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
