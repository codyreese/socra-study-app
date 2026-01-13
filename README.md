# SOCRA CCRP Study Assistant

A comprehensive web application to help Clinical Research Coordinators study for the SOCRA (Society of Clinical Research Associates) CCRP (Certified Clinical Research Professional) certification exam.

## Features

### 📚 Complete Study Suite
- **Interactive Flashcards**: 75+ flashcards covering all exam domains with progress tracking
- **Practice Tests**: Multiple test modes including full exams, domain-specific tests, and quick quizzes
- **Study Guide**: Comprehensive study materials organized by exam domains
- **AI Tutor**: Chat with an AI assistant powered by Claude that adapts to your learning level
- **Analytics Dashboard**: Track your progress, study streaks, and domain mastery

### 🎯 Exam-Focused Content
Based on the official SOCRA CCRP exam structure:
- **Study Start-Up** (40% of exam)
- **Study Implementation** (50% of exam)
- **Study Closure** (10% of exam)

Updated for **ICH-GCP E6(R3)** guidelines (effective January 1, 2026)

### 🤖 AI-Powered Features
- Adaptive explanations based on your understanding level
- Contextual help using your study history
- Interactive Q&A for complex topics
- Personalized study recommendations

## Getting Started

### Quick Start

1. **Open the app**: Simply open `index.html` in your web browser (Chrome, Firefox, Safari, or Edge)
   - Double-click the file, or
   - Right-click and select "Open with" → your browser

2. **Start studying immediately**: No installation or setup required!

### Using the AI Tutor (Optional)

To unlock the AI Tutor feature:

1. **Get an Anthropic API Key**:
   - Visit [console.anthropic.com](https://console.anthropic.com/)
   - Sign up for an account (if you don't have one)
   - Navigate to API Keys section
   - Create a new API key
   - **Note**: Anthropic offers free credits for new users, and Claude API usage is very affordable

2. **Configure the API Key**:
   - Open the app and click on "AI Tutor" in the navigation
   - Expand the "Setup API Key" section
   - Enter your API key (it starts with `sk-ant-`)
   - Click "Save API Key"
   - Your key is stored locally in your browser only (never sent anywhere except Anthropic's API)

3. **Start chatting**: Ask questions, request explanations, or quiz yourself!

## How to Use

### Dashboard
- View exam overview and requirements
- Track your overall progress
- See performance statistics
- Quick access to all features

### Flashcards
- **Filter by domain**: Focus on specific exam areas
- **Shuffle**: Randomize card order for better retention
- **Mark known/unknown**: Track which concepts you've mastered
- **Flip to reveal**: Click the card to see the answer
- Progress automatically saved

### Practice Tests
Choose from multiple test formats:
- **Full Practice Exam**: 100 questions (simulates actual exam)
- **Domain-Specific Tests**: Focus on Start-Up, Implementation, or Closure
- **Quick Quiz**: 20 random questions for quick review

Features:
- Flag questions for review
- Immediate scoring with detailed breakdown
- Performance analysis by domain
- Pass/Fail based on 71% threshold (actual exam requirement)

### Study Guide
Comprehensive study materials covering:
- Protocol development and regulations
- IRB requirements and informed consent
- GCP principles and data integrity
- Adverse event management
- Study closure procedures
- Key regulations (21 CFR, ICH-GCP)

### AI Tutor
Intelligent study assistant that can:
- Answer questions about SOCRA topics
- Explain complex concepts in simple terms
- Create custom quiz questions
- Adapt explanations based on your performance
- Provide study recommendations

Example questions:
- "What are the key responsibilities during study start-up?"
- "Explain the difference between SAE and AE"
- "Quiz me on informed consent requirements"
- "What changed in ICH-GCP E6(R3)?"

### Analytics
Monitor your study progress:
- Study streak counter
- Total study time
- Mastery level assessment
- Domain-specific performance
- Recent activity log

## Exam Information

### SOCRA CCRP Exam Details
- **Total Questions**: 130 (100 scored, 30 unscored beta questions)
- **Passing Score**: 71/100 correct (71%)
- **Format**: Computer-based at Prometric centers
- **Results**: Immediate score report
- **Valid**: SOCRA certification is recognized nationwide (not state-specific)

### Content Distribution
1. **Study Start-Up (40%)**
   - Protocol development
   - Regulatory submissions (IRB, IND)
   - Informed consent
   - Site selection and training
   - Essential documents

2. **Study Implementation (50%)**
   - GCP compliance
   - Subject management
   - Investigational product management
   - Adverse event reporting
   - Data management and monitoring

3. **Study Closure (10%)**
   - Closeout procedures
   - Final reports
   - Document archiving
   - Drug accountability reconciliation

## Tips for Success

### Study Strategy
1. **Start with flashcards**: Build foundational knowledge
2. **Read the study guide**: Deep dive into each domain
3. **Take practice tests**: Identify weak areas
4. **Use AI Tutor**: Get personalized help on challenging topics
5. **Review analytics**: Focus on domains where you score below 71%
6. **Repeat**: Continue until consistently scoring 85%+ on practice tests

### Recommended Study Plan
- **Beginner**: 1-2 hours/day for 4-6 weeks
- **Experienced CRCs**: 1 hour/day for 2-3 weeks
- **Final Week**: Take full practice exams daily

### Exam Day Tips
- Arrive early at the Prometric center
- Bring two forms of ID
- Read each question carefully (watch for "EXCEPT" or "NOT")
- Flag uncertain questions and review at the end
- Don't overthink - trust your knowledge

## Data Privacy

### Local Storage Only
- All your progress is stored in your browser's local storage
- No data is sent to any server (except AI Tutor API calls to Anthropic)
- Your API key is stored locally and never shared
- Clearing browser data will reset your progress

### Backup Your Progress
To save your progress:
1. Open browser developer tools (F12)
2. Go to Console tab
3. Type: `localStorage` and press Enter
4. Copy items starting with `socra_`
5. Save them in a text file

To restore:
1. Open developer tools
2. Run: `localStorage.setItem('key', 'value')` for each saved item

## Technical Details

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Technologies Used
- Pure HTML5, CSS3, JavaScript (ES6+)
- No build process or dependencies
- Anthropic Claude API for AI features
- LocalStorage for data persistence

### Offline Use
- App works completely offline (except AI Tutor)
- All study materials available without internet
- Progress tracking works offline

## Troubleshooting

### Flashcards not showing?
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)
- Try refreshing the page

### AI Tutor not working?
- Verify your API key is correct (starts with `sk-ant-`)
- Check your internet connection
- Ensure you have API credits remaining at console.anthropic.com
- Check browser console for specific error messages

### Progress lost?
- Avoid clearing browser data/cache
- Use the same browser each time
- Consider backing up your localStorage (see Data Privacy section)

### Page looks broken?
- Try a different browser
- Clear cache and reload (Ctrl+Shift+R or Cmd+Shift+R)
- Make sure all three files (index.html, styles.css, app.js, data.js) are in the same folder

## Customization

### Adding More Questions
Edit `data.js` and add objects to `practiceQuestions` array:
```javascript
{
    domain: "implementation",
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: 1, // Index of correct answer (0-3)
    explanation: "Why this is correct..."
}
```

### Adding Flashcards
Edit `data.js` and add objects to `flashcardsData` array:
```javascript
{
    domain: "startup",
    question: "Your question?",
    answer: "Your answer explanation."
}
```

## Support & Resources

### Official SOCRA Resources
- [SOCRA Website](https://www.socra.org/)
- [CCRP Certification Overview](https://www.socra.org/certification/certification-program/program-overview/)
- [Exam Preparation](https://www.socra.org/certification/ccrp-certification-exam/preparing-for-the-exam/)

### Additional Study Materials
- ICH-GCP E6(R3) Guidelines
- 21 CFR Parts 50, 56, 312
- FDA Guidance Documents
- Your institution's GCP training materials

## Contributing

Found an error in the study materials? Have suggestions for improvement?
- Create detailed notes about the issue
- Reference official sources (ICH-GCP, FDA regulations, etc.)
- Edit the `data.js` file with corrections

## License

This is a study tool created for educational purposes. The content is based on publicly available information about SOCRA CCRP exam topics and clinical research regulations.

## Disclaimer

This study assistant is an independent study tool and is not affiliated with or endorsed by SOCRA (Society of Clinical Research Associates). While the content is based on official exam domains and regulations, users should consult official SOCRA materials and guidelines for the most current and accurate information.

The AI Tutor feature uses Claude API and requires your own API key. Usage costs are your responsibility.

## About

Created to help Clinical Research Coordinators achieve their certification goals and advance their careers in clinical research. Good luck with your exam preparation!

---

**Questions or Issues?**
Check the Troubleshooting section above or review the official SOCRA website for exam-specific questions.

**Ready to start studying?** Open `index.html` and let's get your wife that raise and promotion! 🎓
