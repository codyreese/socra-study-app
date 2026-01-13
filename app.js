// SOCRA CCRP Study Assistant - Main Application Logic

class StudyApp {
    constructor() {
        this.currentSection = 'dashboard';
        this.flashcards = [...flashcardsData];
        this.currentCardIndex = 0;
        this.isFlipped = false;
        this.cardProgress = this.loadProgress('cardProgress') || {};
        this.testResults = this.loadProgress('testResults') || [];
        this.studyStreak = this.loadProgress('studyStreak') || { current: 0, lastDate: null };
        this.studyTime = this.loadProgress('studyTime') || 0;
        this.activityLog = this.loadProgress('activityLog') || [];
        this.currentTest = null;
        this.testAnswers = [];
        this.currentQuestionIndex = 0;
        this.currentPlan = '6week';
        this.planProgress = this.loadProgress('planProgress') || {};

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateDashboard();
        this.loadStudyGuide('startup');
        this.loadStudyPlan(this.currentPlan);
        this.updateStreak();
        this.startSessionTimer();
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.showSection(e.target.dataset.section);
            });
        });

        // Study guide domain buttons
        document.querySelectorAll('.domain-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.domain-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.loadStudyGuide(e.target.dataset.domain);
            });
        });

        // Domain filter for flashcards
        document.getElementById('domainFilter').addEventListener('change', (e) => {
            this.filterCards(e.target.value);
        });

        // Chat input
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    showSection(sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Update navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected section
        document.getElementById(sectionName).classList.add('active');
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        this.currentSection = sectionName;

        // Reset test selection if going back to practice test
        if (sectionName === 'practice-test') {
            document.getElementById('testSelection').style.display = 'block';
            document.getElementById('testInProgress').style.display = 'none';
            document.getElementById('testResults').style.display = 'none';
        }

        // Load analytics when shown
        if (sectionName === 'analytics') {
            this.updateAnalytics();
        }

        // Load first card when showing flashcards
        if (sectionName === 'flashcards' && this.flashcards.length > 0) {
            this.displayCard();
        }
    }

    // Flashcard Functions
    displayCard() {
        if (this.flashcards.length === 0) {
            document.getElementById('cardQuestion').textContent = 'No cards available for this filter';
            document.getElementById('cardAnswer').textContent = '';
            document.getElementById('cardNumber').textContent = 'Card 0 of 0';
            return;
        }

        const card = this.flashcards[this.currentCardIndex];
        document.getElementById('cardQuestion').textContent = card.question;
        document.getElementById('cardAnswer').textContent = card.answer;
        document.getElementById('cardNumber').textContent = `Card ${this.currentCardIndex + 1} of ${this.flashcards.length}`;
        document.getElementById('cardDomain').textContent = this.getDomainName(card.domain);

        // Reset flip state
        this.isFlipped = false;
        document.getElementById('flashcard').classList.remove('flipped');
    }

    flipCard() {
        this.isFlipped = !this.isFlipped;
        document.getElementById('flashcard').classList.toggle('flipped');
    }

    nextCard() {
        if (this.currentCardIndex < this.flashcards.length - 1) {
            this.currentCardIndex++;
        } else {
            this.currentCardIndex = 0; // Loop back to start
        }
        this.displayCard();
    }

    previousCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
        } else {
            this.currentCardIndex = this.flashcards.length - 1; // Loop to end
        }
        this.displayCard();
    }

    markKnown(known) {
        const card = this.flashcards[this.currentCardIndex];
        const cardId = `${card.domain}-${this.currentCardIndex}`;

        if (!this.cardProgress[cardId]) {
            this.cardProgress[cardId] = { known: 0, unknown: 0 };
        }

        if (known) {
            this.cardProgress[cardId].known++;
        } else {
            this.cardProgress[cardId].unknown++;
        }

        this.saveProgress('cardProgress', this.cardProgress);
        this.logActivity(`Studied flashcard: ${card.question.substring(0, 50)}...`);
        this.updateDashboard();
        this.nextCard();
    }

    shuffleCards() {
        for (let i = this.flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
        }
        this.currentCardIndex = 0;
        this.displayCard();
        this.logActivity('Shuffled flashcards');
    }

    filterCards(domain) {
        if (domain === 'all') {
            this.flashcards = [...flashcardsData];
        } else {
            this.flashcards = flashcardsData.filter(card => card.domain === domain);
        }
        this.currentCardIndex = 0;
        this.displayCard();
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all flashcard progress? This cannot be undone.')) {
            this.cardProgress = {};
            this.saveProgress('cardProgress', this.cardProgress);
            this.updateDashboard();
            alert('Flashcard progress has been reset.');
        }
    }

    // Practice Test Functions
    startTest(testType) {
        let questions = [];
        let testTitle = '';

        switch(testType) {
            case 'full':
                questions = this.getRandomQuestions(100);
                testTitle = 'Full Practice Exam (100 Questions)';
                break;
            case 'startup':
                questions = practiceQuestions.filter(q => q.domain === 'startup').slice(0, 40);
                testTitle = 'Study Start-Up Practice Test (40 Questions)';
                break;
            case 'implementation':
                questions = practiceQuestions.filter(q => q.domain === 'implementation').slice(0, 50);
                testTitle = 'Study Implementation Practice Test (50 Questions)';
                break;
            case 'closure':
                questions = practiceQuestions.filter(q => q.domain === 'closure').slice(0, 10);
                testTitle = 'Study Closure Practice Test (10 Questions)';
                break;
            case 'quick':
                questions = this.getRandomQuestions(20);
                testTitle = 'Quick Quiz (20 Questions)';
                break;
        }

        // If we don't have enough questions, use what we have and repeat
        if (testType === 'full' && questions.length < 100) {
            while (questions.length < 100) {
                questions.push(...this.getRandomQuestions(Math.min(10, 100 - questions.length)));
            }
        }

        this.currentTest = {
            type: testType,
            title: testTitle,
            questions: questions,
            startTime: Date.now(),
            flagged: []
        };

        this.testAnswers = new Array(questions.length).fill(null);
        this.currentQuestionIndex = 0;

        document.getElementById('testSelection').style.display = 'none';
        document.getElementById('testInProgress').style.display = 'block';
        document.getElementById('testTitle').textContent = testTitle;

        this.displayQuestion();
        this.logActivity(`Started ${testTitle}`);
    }

    getRandomQuestions(count) {
        const shuffled = [...practiceQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, Math.min(count, shuffled.length));
    }

    displayQuestion() {
        const question = this.currentTest.questions[this.currentQuestionIndex];
        document.getElementById('testQuestionNumber').textContent =
            `Question ${this.currentQuestionIndex + 1} of ${this.currentTest.questions.length}`;
        document.getElementById('questionText').textContent = question.question;

        const optionsHtml = question.options.map((option, index) => `
            <div class="answer-option ${this.testAnswers[this.currentQuestionIndex] === index ? 'selected' : ''}"
                 onclick="app.selectAnswer(${index})">
                <input type="radio" name="answer" value="${index}"
                       ${this.testAnswers[this.currentQuestionIndex] === index ? 'checked' : ''}>
                <label>${option}</label>
            </div>
        `).join('');

        document.getElementById('answerOptions').innerHTML = optionsHtml;

        // Update flag button
        const isFlagged = this.currentTest.flagged.includes(this.currentQuestionIndex);
        document.getElementById('flagBtn').textContent = isFlagged ? 'Unflag' : 'Flag for Review';
    }

    selectAnswer(optionIndex) {
        this.testAnswers[this.currentQuestionIndex] = optionIndex;
        this.displayQuestion(); // Refresh to show selection
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentTest.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    flagQuestion() {
        const index = this.currentQuestionIndex;
        if (this.currentTest.flagged.includes(index)) {
            this.currentTest.flagged = this.currentTest.flagged.filter(i => i !== index);
        } else {
            this.currentTest.flagged.push(index);
        }
        this.displayQuestion();
    }

    submitTest() {
        const unanswered = this.testAnswers.filter(a => a === null).length;
        if (unanswered > 0) {
            if (!confirm(`You have ${unanswered} unanswered questions. Submit anyway?`)) {
                return;
            }
        }

        // Calculate score
        let correct = 0;
        const domainScores = { startup: {correct: 0, total: 0}, implementation: {correct: 0, total: 0}, closure: {correct: 0, total: 0} };

        this.currentTest.questions.forEach((question, index) => {
            const isCorrect = this.testAnswers[index] === question.correct;
            if (isCorrect) {
                correct++;
                domainScores[question.domain].correct++;
            }
            domainScores[question.domain].total++;
        });

        const percentage = Math.round((correct / this.currentTest.questions.length) * 100);
        const passed = percentage >= 71;

        const result = {
            date: new Date().toISOString(),
            type: this.currentTest.type,
            title: this.currentTest.title,
            score: percentage,
            correct: correct,
            total: this.currentTest.questions.length,
            passed: passed,
            duration: Math.round((Date.now() - this.currentTest.startTime) / 60000), // minutes
            domainScores: domainScores
        };

        this.testResults.push(result);
        this.saveProgress('testResults', this.testResults);

        // Display results
        document.getElementById('testInProgress').style.display = 'none';
        document.getElementById('testResults').style.display = 'block';
        document.getElementById('finalScore').textContent = `${percentage}%`;
        document.getElementById('passFail').textContent = passed ? 'PASS' : 'FAIL';
        document.getElementById('passFail').className = 'big-stat pass-fail ' + (passed ? 'pass' : 'fail');
        document.getElementById('correctAnswers').textContent = `${correct}/${this.currentTest.questions.length}`;

        // Domain breakdown
        let domainHtml = '';
        for (const [domain, scores] of Object.entries(domainScores)) {
            if (scores.total > 0) {
                const domainPct = Math.round((scores.correct / scores.total) * 100);
                domainHtml += `
                    <div class="domain-result">
                        <span>${this.getDomainName(domain)}</span>
                        <span>${scores.correct}/${scores.total} (${domainPct}%)</span>
                    </div>
                `;
            }
        }
        document.getElementById('domainResults').innerHTML = domainHtml;

        this.logActivity(`Completed ${this.currentTest.title}: ${percentage}% (${passed ? 'PASS' : 'FAIL'})`);
        this.updateDashboard();
    }

    reviewTest() {
        // TODO: Implement detailed review showing each question, selected answer, correct answer, and explanation
        alert('Review feature coming soon! For now, you can retake the test to see which questions you missed.');
    }

    // Study Guide Functions
    loadStudyGuide(domain) {
        const content = studyGuideContent[domain];
        if (!content) return;

        let html = `<h3>${content.title}</h3>`;
        content.sections.forEach(section => {
            html += `
                <div class="study-section">
                    <h4>${section.heading}</h4>
                    ${section.content}
                </div>
            `;
        });

        document.getElementById('studyContent').innerHTML = html;
    }

    // Study Plan Functions
    loadStudyPlan(planType) {
        this.currentPlan = planType;
        const plan = studyPlans[planType];
        if (!plan) return;

        // Ensure progress exists for this plan
        if (!this.planProgress[planType]) {
            this.planProgress[planType] = {};
        }

        let html = `
            <div class="plan-header">
                <h3>${plan.title}</h3>
                <p>${plan.description}</p>
                <p><strong>Time Commitment:</strong> ${plan.commitment}</p>
            </div>
        `;

        plan.weeks.forEach(week => {
            const weekId = `${planType}-week${week.week}`;
            const weekProgress = this.planProgress[planType][weekId] || { tasks: week.tasks.map(t => ({...t})) };

            const completedTasks = weekProgress.tasks.filter(t => t.done).length;
            const totalTasks = weekProgress.tasks.length;
            const progressPercent = Math.round((completedTasks / totalTasks) * 100);

            html += `
                <div class="week-card">
                    <div class="week-header">
                        <h4>${week.title}</h4>
                        <span class="phase-badge">${week.phase}</span>
                    </div>
                    <div class="week-progress">
                        <div class="week-progress-bar">
                            <div class="week-progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <span>${completedTasks}/${totalTasks} tasks complete</span>
                    </div>
                    <div class="week-details">
                        <p><strong>Focus:</strong> ${week.focus}</p>
                        <p><strong>Schedule:</strong> ${week.dailySchedule}</p>

                        <div class="week-goals">
                            <strong>This Week's Goals:</strong>
                            <ul>
                                ${week.goals.map(goal => `<li>${goal}</li>`).join('')}
                            </ul>
                        </div>

                        <div class="week-tasks">
                            <strong>Task Checklist:</strong>
                            ${weekProgress.tasks.map((task, idx) => `
                                <label class="task-item ${task.done ? 'done' : ''}">
                                    <input type="checkbox"
                                           ${task.done ? 'checked' : ''}
                                           onchange="app.toggleTask('${weekId}', ${idx})">
                                    <span>${task.task}</span>
                                </label>
                            `).join('')}
                        </div>

                        <div class="week-tip">
                            <strong>💡 Tip:</strong> ${week.tips}
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById('studyPlanContent').innerHTML = html;

        // Setup plan selector buttons
        document.querySelectorAll('.plan-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.plan === planType) {
                btn.classList.add('active');
            }
            btn.onclick = () => this.loadStudyPlan(btn.dataset.plan);
        });
    }

    toggleTask(weekId, taskIndex) {
        const [planType, weekPart] = weekId.split('-week');
        if (!this.planProgress[planType]) {
            this.planProgress[planType] = {};
        }
        if (!this.planProgress[planType][weekId]) {
            const plan = studyPlans[planType];
            const weekNum = parseInt(weekPart);
            const weekData = plan.weeks.find(w => w.week === weekNum);
            this.planProgress[planType][weekId] = { tasks: weekData.tasks.map(t => ({...t})) };
        }

        // Toggle the task
        const task = this.planProgress[planType][weekId].tasks[taskIndex];
        task.done = !task.done;

        this.saveProgress('planProgress', this.planProgress);
        this.loadStudyPlan(this.currentPlan);

        const action = task.done ? 'Completed' : 'Uncompleted';
        this.logActivity(`${action} study plan task: ${task.task.substring(0, 50)}...`);
    }

    // AI Tutor Functions
    saveApiKey() {
        const apiKey = document.getElementById('apiKey').value.trim();
        if (!apiKey) {
            alert('Please enter an API key');
            return;
        }
        if (!apiKey.startsWith('sk-ant-')) {
            alert('Invalid API key format. Anthropic API keys start with "sk-ant-"');
            return;
        }
        localStorage.setItem('anthropic_api_key', apiKey);
        alert('API key saved successfully! You can now use the AI Tutor.');
    }

    async sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();

        if (!message) return;

        const apiKey = localStorage.getItem('anthropic_api_key');
        if (!apiKey) {
            alert('Please set up your API key first (expand "Setup API Key" above)');
            return;
        }

        // Add user message to chat
        this.addChatMessage(message, 'user');
        input.value = '';

        // Disable send button
        const sendBtn = document.getElementById('sendBtn');
        sendBtn.disabled = true;
        sendBtn.textContent = 'Thinking...';

        try {
            // Get user's study history for context
            const studyContext = this.getStudyContext();

            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: 'claude-3-5-sonnet-20241022',
                    max_tokens: 2048,
                    messages: [{
                        role: 'user',
                        content: `You are a knowledgeable tutor helping someone study for the SOCRA CCRP (Certified Clinical Research Professional) exam. This exam covers clinical research coordination, GCP, FDA regulations, and ethical conduct of clinical trials.

The exam has three main domains:
1. Study Start-Up (40%) - protocol development, IRB, informed consent, regulatory requirements
2. Study Implementation (50%) - GCP, adverse events, data management, monitoring, drug accountability
3. Study Closure (10%) - closeout procedures, archiving, final reporting

Important update: As of January 1, 2026, the exam reflects ICH-GCP E6(R3) guidelines.

Student's study progress:
${studyContext}

Provide clear, accurate explanations. If asked to quiz them, create relevant SOCRA exam-style questions. Adapt your explanations based on their understanding level - if they seem to struggle with a concept, explain it more simply with examples from clinical trials.

Student's question: ${message}`
                    }]
                })
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            const data = await response.json();
            const aiResponse = data.content[0].text;

            this.addChatMessage(aiResponse, 'assistant');
            this.logActivity('Used AI Tutor');

        } catch (error) {
            console.error('AI API Error:', error);
            this.addChatMessage(
                'Sorry, I encountered an error. Please check your API key and try again. Error: ' + error.message,
                'error'
            );
        }

        sendBtn.disabled = false;
        sendBtn.textContent = 'Send';
    }

    addChatMessage(message, type) {
        const messagesDiv = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${type}`;
        messageDiv.innerHTML = `<p>${this.formatMessage(message)}</p>`;
        messagesDiv.appendChild(messageDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    formatMessage(message) {
        // Simple markdown-like formatting
        return message
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
    }

    askSuggested(button) {
        document.getElementById('chatInput').value = button.textContent;
        this.sendMessage();
    }

    getStudyContext() {
        const cardsStudied = Object.keys(this.cardProgress).length;
        const testsCompleted = this.testResults.length;
        const avgScore = testsCompleted > 0
            ? Math.round(this.testResults.reduce((sum, r) => sum + r.score, 0) / testsCompleted)
            : 0;

        let weakDomains = [];
        const domainPerformance = { startup: [], implementation: [], closure: [] };

        this.testResults.forEach(result => {
            for (const [domain, scores] of Object.entries(result.domainScores)) {
                if (scores.total > 0) {
                    domainPerformance[domain].push(scores.correct / scores.total);
                }
            }
        });

        for (const [domain, scores] of Object.entries(domainPerformance)) {
            if (scores.length > 0) {
                const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
                if (avg < 0.7) {
                    weakDomains.push(domain);
                }
            }
        }

        return `
- Flashcards reviewed: ${cardsStudied}
- Practice tests completed: ${testsCompleted}
- Average test score: ${avgScore}%
- Weaker domains: ${weakDomains.length > 0 ? weakDomains.map(d => this.getDomainName(d)).join(', ') : 'None identified'}
`;
    }

    // Analytics and Dashboard Functions
    updateDashboard() {
        const cardsStudied = Object.keys(this.cardProgress).length;
        const testsCompleted = this.testResults.length;
        const avgScore = testsCompleted > 0
            ? Math.round(this.testResults.reduce((sum, r) => sum + r.score, 0) / testsCompleted)
            : 0;

        document.getElementById('cardsStudied').textContent = `${cardsStudied}/${flashcardsData.length}`;
        document.getElementById('testsCompleted').textContent = testsCompleted;
        document.getElementById('avgScore').textContent = avgScore > 0 ? `${avgScore}%` : '--';

        // Readiness assessment
        let readiness = 'Not Ready';
        if (avgScore >= 85 && testsCompleted >= 3) {
            readiness = 'Exam Ready!';
        } else if (avgScore >= 75 && testsCompleted >= 2) {
            readiness = 'Almost Ready';
        } else if (avgScore >= 71 && testsCompleted >= 1) {
            readiness = 'Getting There';
        }
        document.getElementById('readinessScore').textContent = readiness;

        // Update overall progress
        const totalProgress = Math.min(100, Math.round(
            (cardsStudied / flashcardsData.length * 50) +
            (Math.min(testsCompleted, 5) / 5 * 50)
        ));
        document.getElementById('overallProgress').style.width = `${totalProgress}%`;
        document.getElementById('progressText').textContent = `${totalProgress}% Complete`;
    }

    updateAnalytics() {
        // Study streak
        document.getElementById('studyStreak').textContent = this.studyStreak.current;

        // Total study time (in hours)
        const hours = Math.round(this.studyTime / 60);
        document.getElementById('totalTime').textContent = `${hours}h`;

        // Mastery level
        const totalScore = this.testResults.reduce((sum, r) => sum + r.score, 0);
        const avgScore = this.testResults.length > 0 ? totalScore / this.testResults.length : 0;
        let level = 'Beginner';
        if (avgScore >= 85) level = 'Expert';
        else if (avgScore >= 75) level = 'Advanced';
        else if (avgScore >= 65) level = 'Intermediate';
        document.getElementById('masteryLevel').textContent = level;

        // Domain mastery
        const domainMastery = { startup: [], implementation: [], closure: [] };
        this.testResults.forEach(result => {
            for (const [domain, scores] of Object.entries(result.domainScores)) {
                if (scores.total > 0) {
                    domainMastery[domain].push((scores.correct / scores.total) * 100);
                }
            }
        });

        for (const [domain, scores] of Object.entries(domainMastery)) {
            const avg = scores.length > 0
                ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
                : 0;
            document.getElementById(`${domain}Mastery`).style.width = `${avg}%`;
            document.getElementById(`${domain}Percent`).textContent = `${avg}%`;
        }

        // Activity log
        const recentActivities = this.activityLog.slice(-10).reverse();
        const activityHtml = recentActivities.length > 0
            ? recentActivities.map(a => `<li>${a.date}: ${a.activity}</li>`).join('')
            : '<li>No activity yet. Start studying to see your progress!</li>';
        document.getElementById('activityLog').innerHTML = activityHtml;
    }

    // Utility Functions
    getDomainName(domain) {
        const names = {
            startup: 'Study Start-Up',
            implementation: 'Study Implementation',
            closure: 'Study Closure'
        };
        return names[domain] || domain;
    }

    updateStreak() {
        const today = new Date().toDateString();
        if (this.studyStreak.lastDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (this.studyStreak.lastDate === yesterday.toDateString()) {
                this.studyStreak.current++;
            } else if (this.studyStreak.lastDate !== null) {
                this.studyStreak.current = 1;
            } else {
                this.studyStreak.current = 1;
            }

            this.studyStreak.lastDate = today;
            this.saveProgress('studyStreak', this.studyStreak);
        }
    }

    startSessionTimer() {
        // Track time every minute
        setInterval(() => {
            this.studyTime++;
            this.saveProgress('studyTime', this.studyTime);
        }, 60000);
    }

    logActivity(activity) {
        const log = {
            date: new Date().toLocaleString(),
            activity: activity
        };
        this.activityLog.push(log);
        if (this.activityLog.length > 100) {
            this.activityLog.shift(); // Keep only last 100
        }
        this.saveProgress('activityLog', this.activityLog);
    }

    saveProgress(key, data) {
        localStorage.setItem(`socra_${key}`, JSON.stringify(data));
    }

    loadProgress(key) {
        const data = localStorage.getItem(`socra_${key}`);
        return data ? JSON.parse(data) : null;
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new StudyApp();
});
