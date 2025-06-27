
# SafeGuard - Domestic Violence Prevention Platform

SafeGuard is a comprehensive web platform designed to combat domestic violence against women using cutting-edge AI and blockchain technologies. The platform provides immediate support, secure evidence storage, and intelligent safety features to protect victims and prevent abuse.

## 🌟 Features

### 1. Emergency Reporting System
- **SOS Support**: Immediate emergency response with officer dispatch to nearest rehab center
- **Moderate Support**: Professional mediation and counseling services
- **Anonymous Reporting**: Option to submit reports without revealing identity
- **Evidence Upload**: Secure file upload for photos, audio, video, and documents

### 2. AI-Powered Safety Features
- **Fake Call Trigger**: Emergency exit strategy through simulated phone calls
  - Multiple scenarios (work emergency, family emergency, health issue, friend needs help)
  - Realistic call simulation with customizable scripts
- **Voice Detection**: Multi-language emergency keyword detection
  - Supports English, Hindi, Spanish, French, and Arabic
  - Keywords include "Help me", "bachao", "ayúdame", etc.
  - Real-time audio monitoring for distress signals

### 3. Blockchain Security
- **Secure Evidence Storage**: Military-grade encryption on private blockchain
- **Access Control**: Evidence accessible only to authorized organizations and courts
- **Smart Contracts**: Automated monitoring and alert system
  - Tracks repeat offenses
  - Triggers automatic alerts for multiple reports
  - Immutable record keeping

### 4. AI Assistance Chatbot
- **24/7 Support**: Always available confidential assistance
- **Multi-scenario Responses**: Handles emergency, counseling, and resource requests
- **Resource Provision**: Access to hotlines, shelters, and legal aid
- **Safety Planning**: Guided assistance for creating personalized safety plans
- **End-to-end Encryption**: All conversations are secure and private

## 🚀 Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for single-page application
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Lucide React**: Beautiful and consistent icons
- **Shadcn/ui**: High-quality UI components

### Backend (To be implemented with Node.js)
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: Database for storing reports and user data
- **Blockchain Integration**: For secure evidence storage
- **AI/ML Services**: For voice detection and chatbot functionality
- **WebRTC**: For real-time voice processing

## 📁 Project Structure

```
safeguard/
├── src/
│   ├── components/
│   │   └── ui/           # Reusable UI components
│   ├── pages/
│   │   ├── Index.jsx     # Homepage with hero section and features
│   │   ├── ReportAbuse.jsx # Emergency reporting system
│   │   ├── AIFeatures.jsx  # AI safety features
│   │   ├── Blockchain.jsx  # Blockchain security dashboard
│   │   └── ChatBot.jsx     # AI assistance chatbot
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── App.jsx           # Main application component
├── public/               # Static assets
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd safeguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🔧 Features Implementation Status

### ✅ Currently Implemented (Frontend)
- [x] Responsive homepage with navigation
- [x] Emergency reporting system with SOS/Moderate options
- [x] Fake call trigger with multiple scenarios
- [x] Voice detection interface (frontend only)
- [x] Blockchain dashboard with evidence upload
- [x] AI chatbot with conversation flow
- [x] Mobile-responsive design
- [x] Clean, accessible UI

### 🚧 Requires Backend Implementation
- [ ] **Real Voice Detection**: Integration with speech recognition APIs
- [ ] **Actual Emergency Dispatch**: Connection to emergency services
- [ ] **Blockchain Storage**: Real blockchain implementation for evidence
- [ ] **Database Storage**: Persistent data storage for reports
- [ ] **User Authentication**: Secure login/registration system
- [ ] **Email/SMS Notifications**: Alert system for authorities
- [ ] **File Upload Processing**: Server-side file handling and encryption
- [ ] **Advanced AI Chatbot**: Integration with GPT/Claude APIs

## 🔒 Security Features

### Data Protection
- All sensitive data encrypted before storage
- Blockchain ensures immutable evidence records
- Access controls limit data visibility to authorized parties
- No permanent storage of chat conversations

### Privacy Measures
- Anonymous reporting options
- End-to-end encryption for communications
- Local processing for voice detection (no audio transmitted)
- Secure file upload with automatic encryption

### Smart Contract Features
- Automatic monitoring for repeat offenses
- Triggered alerts for pattern recognition
- Tamper-proof evidence integrity
- Decentralized access control

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- **Desktop**: Full feature access with comprehensive dashboard
- **Tablet**: Touch-optimized interface with collapsible navigation
- **Mobile**: Emergency-focused quick access with simplified flows
- **Accessibility**: Screen reader compatible with ARIA labels

## 🌐 Multi-language Support

### Currently Supported Languages
- **English**: Primary language with full feature set
- **Hindi**: Voice detection keywords and basic interface
- **Spanish**: Voice detection keywords
- **French**: Voice detection keywords  
- **Arabic**: Voice detection keywords

### Planned Language Expansion
- Regional Indian languages (Tamil, Telugu, Bengali)
- Additional European languages
- Sign language support through video recognition

## 🚨 Emergency Protocols

### SOS Support Flow
1. User selects SOS support option
2. Form submission triggers immediate alert
3. GPS location shared with emergency services
4. Nearest officer dispatched within 10 minutes
5. Safe transport arranged to rehabilitation center
6. 24/7 follow-up support provided

### Moderate Support Flow
1. User selects moderate support option
2. Report logged in secure database
3. Professional counselor assigned within 24 hours
4. Mediation services offered if requested
5. Ongoing support and safety planning
6. Regular check-ins and resource provision

## 🤖 AI Implementation Details

### Fake Call Feature
- **Trigger Mechanism**: Single button press activation
- **Scenarios**: Pre-programmed realistic conversation scripts
- **Customization**: Ability to modify caller details and urgency
- **Duration**: Configurable call length (15-60 seconds)
- **Audio**: Realistic ringtone and conversation simulation

### Voice Detection AI
- **Real-time Processing**: Continuous audio monitoring
- **Keyword Recognition**: Context-aware distress signal detection
- **Language Models**: Multi-language speech recognition
- **Privacy**: Local processing, no cloud transmission
- **Accuracy**: Machine learning models trained on distress patterns

### Chatbot Intelligence
- **Natural Language Processing**: Understanding context and emotion
- **Response Generation**: Contextually appropriate replies
- **Resource Matching**: Intelligent resource recommendation
- **Crisis Detection**: Automatic escalation for emergency situations
- **Learning**: Continuous improvement through interaction patterns

## 🔗 Integration Requirements

### Backend Services Needed
1. **Emergency Services API**: Integration with local police/emergency services
2. **Blockchain Network**: Private blockchain for evidence storage
3. **AI/ML Services**: Voice recognition and natural language processing
4. **Notification Services**: SMS, email, and push notification systems
5. **Geolocation Services**: Real-time location tracking for emergency response
6. **File Storage**: Secure cloud storage with encryption
7. **Database Services**: Scalable database for user data and reports

### Third-party APIs
- **Twilio**: SMS and voice services
- **Google Cloud Speech-to-Text**: Voice recognition
- **OpenAI GPT**: Advanced chatbot responses
- **Mapbox**: Location services and mapping
- **AWS S3**: Secure file storage
- **Stripe**: Payment processing for donations/support

## 📊 Analytics & Monitoring

### Planned Metrics
- Response time to emergency reports
- Success rate of fake call feature
- Voice detection accuracy rates
- User engagement with chatbot
- Evidence upload and access patterns
- Geographic distribution of reports

### Privacy-Compliant Analytics
- No personal data collection
- Anonymized usage statistics
- Opt-in analytics reporting
- Regular data purging policies

## 🤝 Contributing

### Development Guidelines
1. Follow React best practices and hooks patterns
2. Use Tailwind CSS for all styling
3. Maintain responsive design principles
4. Add proper TypeScript types for new features
5. Include accessibility attributes (ARIA labels)
6. Test on multiple devices and browsers

### Code Structure
- Components should be small and focused
- Use custom hooks for shared logic
- Keep API calls in separate service files
- Follow consistent naming conventions
- Add JSDoc comments for complex functions

## 📄 License

This project is developed for educational and humanitarian purposes. Please ensure proper licensing before commercial deployment.

## 🆘 Emergency Resources

### 24/7 Crisis Hotlines
- **Emergency Services**: 911
- **National Domestic Violence Hotline**: 1-800-799-7233
- **Crisis Text Line**: Text HOME to 741741
- **National Sexual Assault Hotline**: 1-800-656-4673

### Online Resources
- **TheHotline.org**: National domestic violence resources
- **RAINN.org**: Sexual assault resources and support
- **WomensLaw.org**: Legal information and resources

## 📞 Support & Contact

For technical support or feature requests, please contact the development team or create an issue in the project repository.

---

**Remember: If you or someone you know is in immediate danger, call 911 or your local emergency services immediately.**

This platform is designed to supplement, not replace, professional emergency services and support systems.
