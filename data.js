// SOCRA CCRP Study Data
// Based on ICH-GCP E6(R3), FDA regulations, and SOCRA content domains

// Study Plans - Based on SOCRA's Three-Read Method
const studyPlans = {
    "6week": {
        title: "6-Week Study Plan (Recommended)",
        description: "Perfect for most candidates. Balances thorough preparation with manageable daily commitment.",
        commitment: "1-2 hours per day",
        weeks: [
            {
                week: 1,
                title: "Week 1: Foundation - Study Start-Up (Part 1)",
                phase: "First Read",
                focus: "Understanding",
                goals: [
                    "Read Study Guide: Study Start-Up sections",
                    "Review 15 flashcards on protocols, IRB, and informed consent",
                    "Take notes on key concepts in your own words",
                    "Watch any available videos on GCP basics"
                ],
                tasks: [
                    { task: "Read Study Start-Up guide sections", done: false },
                    { task: "Review flashcards: Study Start-Up (first 15)", done: false },
                    { task: "Create personal notes on: Protocol requirements", done: false },
                    { task: "Create personal notes on: IRB process", done: false },
                    { task: "Create personal notes on: Informed consent elements", done: false }
                ],
                dailySchedule: "Day 1-3: Reading (30-45 min/day) | Day 4-5: Flashcards (30 min/day) | Day 6-7: Note-taking & review",
                tips: "Don't worry about memorizing yet. Focus on understanding the big picture and how concepts connect."
            },
            {
                week: 2,
                title: "Week 2: Foundation - Study Implementation (Part 1)",
                phase: "First Read",
                focus: "Understanding",
                goals: [
                    "Read Study Guide: GCP principles, adverse events, data integrity",
                    "Review 20 flashcards on implementation topics",
                    "Create flashcards for concepts you find challenging",
                    "Relate material to your work experience at Huntsman"
                ],
                tasks: [
                    { task: "Read Study Implementation guide (GCP, AEs, ALCOA+)", done: false },
                    { task: "Review flashcards: Implementation (20 cards)", done: false },
                    { task: "Create examples from work: Connect to actual trials", done: false },
                    { task: "Make personal flashcards for weak areas", done: false },
                    { task: "Practice: Identify SAE vs AE in scenarios", done: false }
                ],
                dailySchedule: "Day 1-3: Reading GCP & Data Integrity | Day 4-5: Adverse Events section | Day 6-7: Flashcards & examples",
                tips: "Your real-world experience is valuable! Connect study material to trials you've worked on."
            },
            {
                week: 3,
                title: "Week 3: Building Knowledge - Complete First Read",
                phase: "First Read Complete",
                focus: "Coverage",
                goals: [
                    "Complete remaining Study Implementation and all Study Closure material",
                    "Review ALL flashcards at least once",
                    "Take first practice quiz (20 questions)",
                    "Identify 2-3 weak areas for focused study"
                ],
                tasks: [
                    { task: "Read remaining Implementation sections", done: false },
                    { task: "Read all Study Closure guide sections", done: false },
                    { task: "Review ALL flashcards (75 total)", done: false },
                    { task: "Take Quick Quiz (20 questions)", done: false },
                    { task: "Write down: Top 3 areas I need to strengthen", done: false }
                ],
                dailySchedule: "Day 1-2: Study Closure reading | Day 3-4: Complete all flashcards | Day 5: Quick quiz | Day 6-7: Review weak areas",
                tips: "After your first practice test, don't be discouraged by your score. You're still in the learning phase!"
            },
            {
                week: 4,
                title: "Week 4: Deepening Understanding - Second Read",
                phase: "Second Read",
                focus: "Connections & Relationships",
                goals: [
                    "Re-read ALL study guide materials, focusing on relationships between concepts",
                    "Review flashcards daily, marking ones you struggle with",
                    "Take domain-specific practice test",
                    "Start using AI Tutor for difficult concepts"
                ],
                tasks: [
                    { task: "Re-read Study Start-Up (focus on connections)", done: false },
                    { task: "Re-read Study Implementation (focus on workflows)", done: false },
                    { task: "Re-read Study Closure (focus on timelines)", done: false },
                    { task: "Review ALL flashcards 2x this week", done: false },
                    { task: "Take domain practice test (choose weakest domain)", done: false },
                    { task: "Use AI Tutor: Ask about 3 confusing topics", done: false }
                ],
                dailySchedule: "Daily: 30 min reading + 30 min flashcards | End of week: Practice test + AI Tutor review",
                tips: "This is where it clicks! Focus on HOW concepts relate: How does informed consent relate to IRB? How does GCP relate to monitoring?"
            },
            {
                week: 5,
                title: "Week 5: Testing & Mastery - Third Read",
                phase: "Third Read",
                focus: "Application & Testing",
                goals: [
                    "Quick third read of study guide (should be familiar now)",
                    "Take full practice exam (100 questions)",
                    "Review incorrect answers thoroughly",
                    "Intensive flashcard review on weak areas",
                    "Target score: 71%+ (if not, add extra study time)"
                ],
                tasks: [
                    { task: "Quick re-read of all materials (skim familiar, study weak)", done: false },
                    { task: "Take FULL practice exam (100 questions)", done: false },
                    { task: "Review EVERY incorrect answer - understand WHY", done: false },
                    { task: "Intensive review: Flashcards from weak domains", done: false },
                    { task: "Create action plan if score below 71%", done: false },
                    { task: "If above 71%: Celebrate! Then keep studying", done: false }
                ],
                dailySchedule: "Day 1-2: Quick review read | Day 3: Full practice exam (2-3 hours) | Day 4-7: Review missed questions & weak areas",
                tips: "If you score 71%+ you're on track! If not, don't panic - add an extra week of study. Most people need multiple practice tests."
            },
            {
                week: 6,
                title: "Week 6: Final Preparation & Confidence Building",
                phase: "Polish & Practice",
                focus: "Exam Readiness",
                goals: [
                    "Take second full practice exam",
                    "Review all flagged flashcards",
                    "Light review of study guide (no cramming!)",
                    "Target score: 85%+ for confidence",
                    "Mental preparation and exam logistics"
                ],
                tasks: [
                    { task: "Take another full practice exam (100 questions)", done: false },
                    { task: "Review only incorrect answers + flagged cards", done: false },
                    { task: "Light review: Skim study guide for confidence", done: false },
                    { task: "Logistics: Confirm exam appointment, location, IDs", done: false },
                    { task: "Self-care: Good sleep, exercise, healthy meals", done: false },
                    { task: "Day before exam: Light review only, relax!", done: false }
                ],
                dailySchedule: "Day 1-2: Full practice exam | Day 3-4: Review weak spots | Day 5: Light review + logistics | Day 6: Minimal study, relax | Day 7: EXAM DAY!",
                tips: "If scoring 85%+ consistently, you're READY! The day before: light review only. Trust your preparation!"
            }
        ]
    },
    "4week": {
        title: "4-Week Intensive Plan",
        description: "Accelerated preparation for experienced CRCs. Requires 2-3 hours daily commitment.",
        commitment: "2-3 hours per day",
        weeks: [
            {
                week: 1,
                title: "Week 1: Complete First Read - All Domains",
                phase: "First Read",
                focus: "Rapid Coverage",
                goals: [
                    "Read entire study guide (all three domains)",
                    "Review 25 flashcards daily",
                    "Take detailed notes on unfamiliar topics",
                    "Take baseline Quick Quiz"
                ],
                tasks: [
                    { task: "Read: Study Start-Up (complete)", done: false },
                    { task: "Read: Study Implementation (complete)", done: false },
                    { task: "Read: Study Closure (complete)", done: false },
                    { task: "Review: 25+ flashcards daily", done: false },
                    { task: "Take: Quick Quiz for baseline", done: false }
                ],
                dailySchedule: "2-3 hours daily: Reading (90 min) + Flashcards (45 min) + Notes (30 min)",
                tips: "This is intense! Break study sessions into 45-minute blocks with 10-minute breaks."
            },
            {
                week: 2,
                title: "Week 2: Second Read + Testing",
                phase: "Second Read",
                focus: "Connections & Practice",
                goals: [
                    "Re-read all materials focusing on relationships",
                    "Review ALL flashcards 2x",
                    "Take domain-specific tests",
                    "Identify and address weak areas"
                ],
                tasks: [
                    { task: "Re-read all study guide materials", done: false },
                    { task: "Review ALL flashcards twice this week", done: false },
                    { task: "Take: Study Start-Up practice test", done: false },
                    { task: "Take: Study Implementation practice test", done: false },
                    { task: "Take: Study Closure practice test", done: false },
                    { task: "Create targeted notes on weak areas", done: false }
                ],
                dailySchedule: "Daily: Reading (60 min) + Flashcards (45 min) + Practice tests (45 min)",
                tips: "Focus on areas where you score below 75%. Use AI Tutor heavily this week."
            },
            {
                week: 3,
                title: "Week 3: Full Practice Exams",
                phase: "Third Read + Testing",
                focus: "Application",
                goals: [
                    "Quick third read of materials",
                    "Take two full practice exams",
                    "Thoroughly review all incorrect answers",
                    "Daily flashcard review"
                ],
                tasks: [
                    { task: "Quick review read of all materials", done: false },
                    { task: "Take: Full practice exam #1", done: false },
                    { task: "Review: All incorrect answers from exam #1", done: false },
                    { task: "Take: Full practice exam #2", done: false },
                    { task: "Review: All incorrect answers from exam #2", done: false },
                    { task: "Daily: Flashcard review (30 min)", done: false }
                ],
                dailySchedule: "Day 1-2: Full exam #1 + review | Day 3: Targeted study | Day 4-5: Full exam #2 + review | Day 6-7: Weak area focus",
                tips: "Target 75%+ on first exam, 85%+ on second. If not there, consider adding extra week."
            },
            {
                week: 4,
                title: "Week 4: Final Polish & Exam Prep",
                phase: "Mastery",
                focus: "Confidence & Readiness",
                goals: [
                    "Take final practice exam",
                    "Review only weak areas",
                    "Flashcard final review",
                    "Mental and logistical preparation",
                    "Light review before exam"
                ],
                tasks: [
                    { task: "Take: Final full practice exam", done: false },
                    { task: "Review: Only weak domains and flagged items", done: false },
                    { task: "Final flashcard review: Focus on struggles", done: false },
                    { task: "Confirm: Exam logistics (time, location, IDs)", done: false },
                    { task: "Practice: Exam timing (allocate 2.5-3 hours)", done: false },
                    { task: "Day before exam: Minimal study, rest!", done: false }
                ],
                dailySchedule: "Day 1-2: Final exam + review | Day 3-5: Targeted weak area study | Day 6: Light review + logistics | Day 7: EXAM!",
                tips: "If scoring 85%+ you're ready! Day before exam: 30 min light review maximum. Sleep well!"
            }
        ]
    },
    "8week": {
        title: "8-Week Relaxed Plan",
        description: "Thorough preparation with lighter daily commitment. Perfect for busy schedules.",
        commitment: "45-60 minutes per day",
        weeks: [
            {
                week: 1,
                title: "Week 1: Introduction to Study Start-Up",
                phase: "First Read - Begin",
                focus: "Foundation Building",
                goals: [
                    "Read Study Start-Up: Protocol & Regulations",
                    "Review 10 flashcards on basic concepts",
                    "Understand the three exam domains"
                ],
                tasks: [
                    { task: "Read: Protocol Development section", done: false },
                    { task: "Read: Regulatory Requirements section", done: false },
                    { task: "Review: 10 flashcards (Start-Up)", done: false },
                    { task: "Write: Summary of three exam domains", done: false }
                ],
                dailySchedule: "45-60 minutes daily: Reading or flashcards, not both",
                tips: "Take it slow. Understanding is more important than speed."
            },
            {
                week: 2,
                title: "Week 2: Complete Study Start-Up",
                phase: "First Read - Continue",
                focus: "Study Start-Up Mastery",
                goals: [
                    "Complete Study Start-Up sections",
                    "Review 15 more flashcards",
                    "Create personal notes"
                ],
                tasks: [
                    { task: "Read: Informed Consent section", done: false },
                    { task: "Read: IRB/IEC & Essential Documents", done: false },
                    { task: "Review: 15 flashcards (Start-Up)", done: false },
                    { task: "Create: Personal notes on key Start-Up concepts", done: false }
                ],
                dailySchedule: "45-60 minutes daily: Alternate reading and flashcard days",
                tips: "Connect study material to your actual work experiences."
            },
            {
                week: 3,
                title: "Week 3: Study Implementation - Part 1",
                phase: "First Read - Continue",
                focus: "GCP & Safety",
                goals: [
                    "Read GCP principles and adverse events sections",
                    "Review 15 flashcards on implementation",
                    "Take Quick Quiz"
                ],
                tasks: [
                    { task: "Read: GCP Principles section", done: false },
                    { task: "Read: Adverse Event Management section", done: false },
                    { task: "Review: 15 flashcards (Implementation)", done: false },
                    { task: "Take: Quick Quiz (20 questions)", done: false }
                ],
                dailySchedule: "Mon-Fri: 45 min reading or flashcards | Weekend: Quick quiz + review",
                tips: "SAE vs AE is heavily tested. Make sure you understand the difference!"
            },
            {
                week: 4,
                title: "Week 4: Study Implementation - Part 2",
                phase: "First Read - Continue",
                focus: "Data & Monitoring",
                goals: [
                    "Complete Study Implementation sections",
                    "Review 20 more flashcards",
                    "Understand ALCOA+ principles"
                ],
                tasks: [
                    { task: "Read: Data Integrity (ALCOA+) section", done: false },
                    { task: "Read: Source Documents & IP Management", done: false },
                    { task: "Read: Monitoring & Quality Assurance", done: false },
                    { task: "Review: 20 flashcards (Implementation)", done: false }
                ],
                dailySchedule: "Daily: 45-60 minutes alternating reading and flashcards",
                tips: "Implementation is 50% of the exam. Take your time here!"
            },
            {
                week: 5,
                title: "Week 5: Study Closure + First Read Complete",
                phase: "First Read - Complete",
                focus: "Closure & Review",
                goals: [
                    "Complete Study Closure sections",
                    "Review ALL flashcards once",
                    "Take domain practice test"
                ],
                tasks: [
                    { task: "Read: All Study Closure sections", done: false },
                    { task: "Review: ALL flashcards (complete set)", done: false },
                    { task: "Take: Study Implementation practice test", done: false },
                    { task: "Identify: 3 weak areas for extra focus", done: false }
                ],
                dailySchedule: "Days 1-3: Study Closure | Days 4-5: All flashcards | Weekend: Practice test",
                tips: "You've completed the first read! Now the real learning begins."
            },
            {
                week: 6,
                title: "Week 6: Second Read - Making Connections",
                phase: "Second Read",
                focus: "Relationships",
                goals: [
                    "Re-read all study guide materials",
                    "Focus on how concepts connect",
                    "Review flashcards on weak areas"
                ],
                tasks: [
                    { task: "Re-read: Study Start-Up (focus on connections)", done: false },
                    { task: "Re-read: Study Implementation (focus on workflows)", done: false },
                    { task: "Re-read: Study Closure (focus on timelines)", done: false },
                    { task: "Review: Flashcards from weak areas daily", done: false }
                ],
                dailySchedule: "Daily: 45-60 minutes reading + 15 minutes flashcards",
                tips: "Ask yourself: How does this concept relate to others? What's the workflow?"
            },
            {
                week: 7,
                title: "Week 7: Practice Testing",
                phase: "Third Read + Testing",
                focus: "Application",
                goals: [
                    "Quick third read",
                    "Take full practice exam",
                    "Review all incorrect answers",
                    "Use AI Tutor for difficult topics"
                ],
                tasks: [
                    { task: "Quick review: Skim all materials", done: false },
                    { task: "Take: Full practice exam (100 questions)", done: false },
                    { task: "Review: Every incorrect answer", done: false },
                    { task: "Use AI Tutor: 5 confusing topics", done: false },
                    { task: "Daily: Review flagged flashcards", done: false }
                ],
                dailySchedule: "Days 1-2: Quick read | Day 3: Full exam | Days 4-7: Review wrong answers",
                tips: "Target 71%+. If below, add extra study time this week."
            },
            {
                week: 8,
                title: "Week 8: Final Preparation",
                phase: "Final Polish",
                focus: "Confidence & Readiness",
                goals: [
                    "Take second practice exam",
                    "Review weak areas only",
                    "Final flashcard review",
                    "Exam logistics and mental prep"
                ],
                tasks: [
                    { task: "Take: Second full practice exam", done: false },
                    { task: "Review: Only weak areas and incorrect answers", done: false },
                    { task: "Final: Flashcard review (focus on struggles)", done: false },
                    { task: "Logistics: Confirm exam details", done: false },
                    { task: "Day before: Light review, relax, good sleep", done: false }
                ],
                dailySchedule: "Days 1-2: Practice exam | Days 3-5: Weak areas | Day 6: Light review | Day 7: EXAM!",
                tips: "If scoring 85%+ you're very ready! Trust your preparation and get good rest."
            }
        ]
    }
};

const flashcardsData = [
    // Study Start-Up (40%)
    {
        domain: "startup",
        question: "What does ICH stand for and what is its primary purpose?",
        answer: "International Council for Harmonisation. It harmonizes technical requirements for pharmaceuticals for human use across regulatory authorities to ensure safe, effective, and high-quality medicines are developed and registered efficiently."
    },
    {
        domain: "startup",
        question: "What are the three fundamental principles of the Belmont Report?",
        answer: "1. Respect for Persons (autonomy and informed consent)\n2. Beneficence (maximize benefits, minimize harm)\n3. Justice (fair distribution of research risks and benefits)"
    },
    {
        domain: "startup",
        question: "What is the purpose of an Institutional Review Board (IRB)?",
        answer: "An IRB reviews and approves research to protect the rights, safety, and welfare of human subjects. It ensures research is ethical, risks are minimized, and informed consent is obtained properly."
    },
    {
        domain: "startup",
        question: "What are the essential documents required BEFORE starting a clinical trial?",
        answer: "Protocol, Investigator's Brochure (IB), IRB/IEC approval, informed consent forms, regulatory submissions (IND if applicable), financial disclosure forms, FDA Form 1572, CVs of investigators, and site agreements."
    },
    {
        domain: "startup",
        question: "What is Good Clinical Practice (GCP)?",
        answer: "An international ethical and scientific quality standard for designing, conducting, recording, and reporting trials involving human subjects. It ensures protection of rights, safety, and well-being of subjects and reliability of data."
    },
    {
        domain: "startup",
        question: "What information must be included in an informed consent document?",
        answer: "Study purpose, procedures, risks/benefits, alternatives, confidentiality, compensation, voluntary participation, right to withdraw, contact information, and a statement that participation is voluntary with no penalty for withdrawal."
    },
    {
        domain: "startup",
        question: "What is an Investigational New Drug (IND) application?",
        answer: "A request for FDA authorization to administer an investigational drug to humans. It includes preclinical data, manufacturing information, clinical protocols, and investigator information."
    },
    {
        domain: "startup",
        question: "What is the difference between a protocol and an Investigator's Brochure?",
        answer: "Protocol: detailed plan of the study including objectives, design, methodology, statistical considerations, and organization. IB: compilation of clinical and nonclinical data on the investigational product relevant to the study."
    },
    {
        domain: "startup",
        question: "What is Form FDA 1572?",
        answer: "Statement of Investigator form where the principal investigator commits to conducting the study according to GCP, protocol, and regulations, and provides qualifications and commitments."
    },
    {
        domain: "startup",
        question: "What is a Protocol Amendment and when is it required?",
        answer: "A written description of change(s) to or formal clarification of a protocol. Required when any change affects subject safety, study conduct, or interpretation of data. Must have IRB approval before implementation (except for immediate safety)."
    },
    {
        domain: "startup",
        question: "What are the requirements for valid informed consent?",
        answer: "Must be voluntary, informed (adequate information provided), comprehension (subject understands), documented (signed and dated), obtained before any study procedures, and subject receives a copy."
    },
    {
        domain: "startup",
        question: "What is the sponsor's role in a clinical trial?",
        answer: "Individual, company, or organization responsible for initiating, managing, and financing the study. Ensures proper monitoring, regulatory compliance, data management, and safety reporting."
    },
    {
        domain: "startup",
        question: "What is source documentation?",
        answer: "Original documents, data, and records where information is first recorded (e.g., hospital records, clinical notes, lab reports). Must be accurate, contemporaneous, original, attributable, legible, and complete (ALCOA)."
    },
    {
        domain: "startup",
        question: "What is the Declaration of Helsinki?",
        answer: "A set of ethical principles developed by the World Medical Association regarding human experimentation. It emphasizes that the well-being of the individual research subject must take precedence over all other interests."
    },
    {
        domain: "startup",
        question: "What training is required for research staff before study initiation?",
        answer: "GCP training, protocol-specific training, ICH guidelines, institutional policies, informed consent procedures, adverse event reporting, and any study-specific procedures or equipment training."
    },

    // Study Implementation (50%)
    {
        domain: "implementation",
        question: "What is the difference between an Adverse Event (AE) and a Serious Adverse Event (SAE)?",
        answer: "AE: Any untoward medical occurrence in a subject. SAE: AE that results in death, is life-threatening, requires hospitalization, results in persistent disability, is a congenital anomaly, or requires intervention to prevent permanent impairment."
    },
    {
        domain: "implementation",
        question: "What is the timeline for reporting Serious Adverse Events (SAEs)?",
        answer: "Fatal or life-threatening unexpected SAEs: 7 calendar days initially, 8 additional days for follow-up. All other unexpected SAEs: 15 calendar days. Timeframes begin when sponsor becomes aware of the event."
    },
    {
        domain: "implementation",
        question: "What does ALCOA+ stand for in data integrity?",
        answer: "Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available when needed. These are principles ensuring high-quality, reliable clinical trial data."
    },
    {
        domain: "implementation",
        question: "What is a protocol deviation versus a protocol violation?",
        answer: "Deviation: unplanned departure from protocol that doesn't significantly affect subject safety or data integrity (minor). Violation: significant non-compliance that may impact subject safety, rights, or data integrity (major)."
    },
    {
        domain: "implementation",
        question: "What is the purpose of monitoring in clinical trials?",
        answer: "To verify that: rights and well-being of subjects are protected, reported data is accurate and verifiable from source documents, and the study is conducted according to protocol, GCP, and regulations."
    },
    {
        domain: "implementation",
        question: "What are the essential elements of source document verification?",
        answer: "Comparing CRF/eCRF data to source documents to verify accuracy, checking for protocol compliance, ensuring informed consent is properly obtained, verifying eligibility criteria, and documenting any discrepancies."
    },
    {
        domain: "implementation",
        question: "What is an Investigational Product (IP)?",
        answer: "A pharmaceutical form of an active ingredient or placebo being tested or used as a reference in a clinical trial, including products already marketed but used differently than approved."
    },
    {
        domain: "implementation",
        question: "How should investigational products be stored and handled?",
        answer: "According to manufacturer specifications (temperature, light, humidity), in secure location with restricted access, with accurate accountability logs, proper labeling, and regular monitoring of storage conditions."
    },
    {
        domain: "implementation",
        question: "What is required for proper drug accountability?",
        answer: "Receipt logs, dispensing logs, return logs, destruction records, reconciliation of all units, temperature logs if applicable, and documentation of any discrepancies or deviations."
    },
    {
        domain: "implementation",
        question: "What is the difference between blinding and masking in clinical trials?",
        answer: "These terms are used interchangeably to describe procedures preventing trial participants (single-blind), investigators (double-blind), or others from knowing treatment assignments to reduce bias."
    },
    {
        domain: "implementation",
        question: "What is a Data Safety Monitoring Board (DSMB)?",
        answer: "An independent group that reviews accumulating study data at intervals to assess safety, efficacy, and conduct. Can recommend continuing, modifying, or stopping a trial."
    },
    {
        domain: "implementation",
        question: "What constitutes a breach of confidentiality?",
        answer: "Unauthorized disclosure of subject-identifying information including names, addresses, medical records, or any data that could identify participants without proper consent or authorization."
    },
    {
        domain: "implementation",
        question: "What is HIPAA and how does it apply to clinical research?",
        answer: "Health Insurance Portability and Accountability Act. Protects privacy of individually identifiable health information. Research requires either authorization from subject or IRB waiver of authorization."
    },
    {
        domain: "implementation",
        question: "What is required documentation for informed consent process?",
        answer: "Signed and dated consent form, documentation of consent discussion, subject's receipt of copy, any assent forms for minors, translator certifications if applicable, and documentation of re-consent if needed."
    },
    {
        domain: "implementation",
        question: "What is a Case Report Form (CRF)?",
        answer: "A printed, optical, or electronic document designed to record all protocol-required information on each trial subject. Can be paper-based or electronic (eCRF)."
    },
    {
        domain: "implementation",
        question: "What should you do if you discover an error in a source document?",
        answer: "Single line through error (don't obscure), write correct information, date, initial, and explain reason for change if not obvious. Never use correction fluid or erase. For eCRFs, use system audit trail."
    },
    {
        domain: "implementation",
        question: "What is the definition of study enrollment?",
        answer: "The point at which a subject is considered enrolled varies by protocol but typically occurs when informed consent is obtained or when subject begins protocol-specified procedures."
    },
    {
        domain: "implementation",
        question: "What are inclusion and exclusion criteria?",
        answer: "Inclusion: characteristics subjects must have to participate (e.g., age, diagnosis, disease stage). Exclusion: characteristics that disqualify subjects from participation (e.g., comorbidities, medications, pregnancy)."
    },
    {
        domain: "implementation",
        question: "What is the difference between expected and unexpected adverse events?",
        answer: "Expected: AEs listed in protocol, consent form, or Investigator's Brochure with similar nature, severity, and frequency. Unexpected: AEs not consistent with available information regarding the investigational product."
    },
    {
        domain: "implementation",
        question: "What is causality assessment in adverse event reporting?",
        answer: "Determining the relationship between the investigational product and the adverse event. Categories typically: Unrelated, Unlikely, Possible, Probable, or Definitely related. Considers timing, alternative causes, and biological plausibility."
    },
    {
        domain: "implementation",
        question: "What is a query in clinical data management?",
        answer: "A request for clarification or correction of data in a CRF. Can be raised by monitors, data managers, or statisticians when data is missing, inconsistent, or unclear. Must be documented and resolved."
    },
    {
        domain: "implementation",
        question: "What is required for proper subject identification in records?",
        answer: "Use unique subject identification number/code rather than names in study documents. Maintain separate confidential screening/enrollment log linking ID numbers to identifiable information, stored securely."
    },
    {
        domain: "implementation",
        question: "What is the purpose of site monitoring visits?",
        answer: "Verify regulatory compliance, ensure subject safety and rights protection, confirm data accuracy through source document verification, assess protocol adherence, and review study documents and drug accountability."
    },
    {
        domain: "implementation",
        question: "What is required when a subject withdraws from a study?",
        answer: "Document reason for withdrawal, complete final visit assessments if possible, obtain permission for follow-up of AEs if applicable, ensure subject understands right to withdraw, and document in source and CRF."
    },
    {
        domain: "implementation",
        question: "What is the difference between efficacy and safety endpoints?",
        answer: "Efficacy endpoints: measures of treatment benefit (e.g., tumor reduction, symptom improvement). Safety endpoints: measures of treatment safety (e.g., AE frequency, lab abnormalities, vital sign changes)."
    },

    // Study Closure (10%)
    {
        domain: "closure",
        question: "What steps are required for proper study closure?",
        answer: "Complete final monitoring visit, resolve all queries, account for all investigational product, return/destroy excess supplies, complete final regulatory submissions to IRB, archive essential documents, and complete final financial reconciliation."
    },
    {
        domain: "closure",
        question: "How long must essential documents be retained after study completion?",
        answer: "At least 2 years after the last approval of a marketing application OR 2 years after formal discontinuation if no application submitted. Some regulations require longer (e.g., pediatric studies)."
    },
    {
        domain: "closure",
        question: "What is included in the final study report?",
        answer: "Study objectives, methods, results, statistical analyses, safety data, protocol deviations, conclusions, and all relevant data according to ICH E3 guidelines. Submitted to regulatory authorities and IRB."
    },
    {
        domain: "closure",
        question: "What must be reported to the IRB at study closure?",
        answer: "Final study report, total subjects enrolled, summary of AEs/SAEs, protocol deviations, early termination reasons if applicable, and final subject disposition (completed, withdrawn, lost to follow-up)."
    },
    {
        domain: "closure",
        question: "What is drug reconciliation at study closeout?",
        answer: "Final accounting of all investigational product: received, dispensed, returned, destroyed, expired. Must match records with physical inventory and document any discrepancies with explanations."
    },
    {
        domain: "closure",
        question: "What happens to unused investigational product at study end?",
        answer: "Returned to sponsor, destroyed per protocol with documentation, or retained for other studies per sponsor instruction. Destruction requires documentation of date, method, quantity, and witnesses."
    },
    {
        domain: "closure",
        question: "What are essential documents in the Investigator Site File?",
        answer: "Regulatory documents (IRB approvals, protocol, consent forms), subject records, investigational product records, monitoring logs, correspondence, lab certifications, and staff training records. Must be archived properly."
    },
    {
        domain: "closure",
        question: "What is the purpose of a study closeout monitoring visit?",
        answer: "Verify all subjects have completed or withdrawn, resolve outstanding queries, review final data, account for investigational product, ensure proper archiving plans, and confirm regulatory closure submissions."
    },
    {
        domain: "closure",
        question: "How should study documents be archived?",
        answer: "In a secure, limited-access location with climate control, organized and indexed for easy retrieval, protected from unauthorized access, and maintained for required retention period with transfer plans if needed."
    },
    {
        domain: "closure",
        question: "What is early study termination?",
        answer: "Ending a study before planned completion. Reasons include safety concerns, futility, poor enrollment, sponsor decision, or regulatory action. Requires IRB notification, subject notification, and final reporting."
    },
    {
        domain: "closure",
        question: "What financial records must be maintained and archived?",
        answer: "Budget agreements, payment records, subject compensation documentation, expense receipts, invoices, financial disclosure forms (Form FDA 3454), and audit trails of all financial transactions."
    },
    {
        domain: "closure",
        question: "What is the Clinical Study Report (CSR)?",
        answer: "Comprehensive document presenting study results according to ICH E3 guideline. Includes full description of methods, results, statistical analyses, and is submitted to regulatory authorities."
    },
    {
        domain: "closure",
        question: "What happens to subject data after study completion?",
        answer: "Continues to be protected under confidentiality requirements, archived per regulations, accessible only to authorized personnel, and subject to same privacy protections throughout retention period."
    },
    {
        domain: "closure",
        question: "What is database lock in clinical trials?",
        answer: "The point when the clinical database is declared complete and accurate, all queries resolved, and no further changes allowed. Occurs before statistical analysis and after data cleaning is complete."
    },
    {
        domain: "closure",
        question: "What constitutes proper study site closure?",
        answer: "All subjects completed/withdrawn, final data entered, queries resolved, investigational product accounted for, essential documents archived, IRB notified, final payments processed, and site notified of closure completion."
    }
];

const practiceQuestions = [
    // Study Start-Up Questions
    {
        domain: "startup",
        question: "According to ICH-GCP, who is ultimately responsible for the quality and integrity of the trial data?",
        options: [
            "The Principal Investigator",
            "The Sponsor",
            "The IRB/IEC",
            "The Clinical Research Coordinator"
        ],
        correct: 1,
        explanation: "The Sponsor is ultimately responsible for implementing and maintaining quality assurance and quality control systems with written procedures to ensure trials are conducted and data generated, documented, and reported in compliance with protocol, GCP, and regulations."
    },
    {
        domain: "startup",
        question: "Which of the following is NOT required before IRB approval can be granted?",
        options: [
            "Protocol and amendments",
            "Informed consent form",
            "Recruitment materials",
            "Completed Case Report Forms"
        ],
        correct: 3,
        explanation: "Case Report Forms are completed during the study conduct phase. IRB needs protocol, consent forms, and recruitment materials before approval, but not completed CRFs which don't exist yet."
    },
    {
        domain: "startup",
        question: "What is the primary purpose of the Investigator's Brochure?",
        options: [
            "To provide marketing information about the drug",
            "To provide clinical and nonclinical data about the investigational product",
            "To outline the statistical analysis plan",
            "To document adverse events"
        ],
        correct: 1,
        explanation: "The IB provides comprehensive current information on the investigational product including nonclinical and clinical data to help investigators and others involved understand rationale for and compliance with key features of protocol."
    },
    {
        domain: "startup",
        question: "Which element is NOT required in an informed consent document per ICH-GCP?",
        options: [
            "Subject's social security number",
            "Statement that participation is voluntary",
            "Foreseeable risks and inconveniences",
            "Compensation available to subjects"
        ],
        correct: 0,
        explanation: "Social security numbers are not required in consent forms and including them would create unnecessary privacy risks. All other elements are required per ICH-GCP guidelines."
    },
    {
        domain: "startup",
        question: "When must a protocol amendment be submitted to the IRB?",
        options: [
            "Only if it changes the study objectives",
            "Before implementation, except when necessary to eliminate immediate hazards",
            "Within 30 days after implementation",
            "Only at annual renewal"
        ],
        correct: 1,
        explanation: "Protocol amendments must receive IRB approval before implementation, except when the change is necessary to eliminate immediate hazards to trial subjects, in which case the IRB should be notified as soon as possible."
    },

    // Study Implementation Questions
    {
        domain: "implementation",
        question: "A subject develops hives 30 minutes after taking investigational product and requires epinephrine in the emergency department. This is classified as:",
        options: [
            "Adverse Event only",
            "Serious Adverse Event",
            "Expected adverse reaction",
            "Not reportable"
        ],
        correct: 1,
        explanation: "This is an SAE because it required medical intervention (epinephrine) and emergency department visit (hospitalization or intervention to prevent serious outcome). All SAEs must be reported according to protocol timelines."
    },
    {
        domain: "implementation",
        question: "When must source documents be available for review?",
        options: [
            "Only at study closure",
            "Within 30 days of a request",
            "At any time during and after the study",
            "Only if an audit is scheduled"
        ],
        correct: 2,
        explanation: "Source documents must be available for monitoring, auditing, IRB review, and regulatory inspection at any time during the study and throughout the required retention period after study completion."
    },
    {
        domain: "implementation",
        question: "What is the correct way to correct an error in a paper source document?",
        options: [
            "Use correction fluid, then write the correct information",
            "Single line through the error, add correction, date, and initial",
            "Erase the error and write the correct information",
            "Start a new page"
        ],
        correct: 1,
        explanation: "Corrections must be made by drawing a single line through the error (keeping it legible), adding the correct information, dating, and initialing. The original entry must remain readable for audit trail."
    },
    {
        domain: "implementation",
        question: "A subject meets all inclusion criteria except one. The investigator believes the subject would benefit from the study. What should the coordinator do?",
        options: [
            "Enroll the subject since they would benefit",
            "Enroll the subject and document the deviation",
            "Do not enroll the subject and document why they screen failed",
            "Ask the sponsor for an exception"
        ],
        correct: 2,
        explanation: "Subjects must meet all inclusion criteria and have no exclusion criteria to be enrolled. Screen failures should be documented. Protocol violations of eligibility criteria can invalidate study results and compromise subject safety."
    },
    {
        domain: "implementation",
        question: "What must be done if a subject withdraws consent?",
        options: [
            "All subject data must be destroyed",
            "No further study procedures; data collected up to withdrawal can be used unless subject requests deletion",
            "The subject must complete the final visit",
            "The subject cannot withdraw once enrolled"
        ],
        correct: 1,
        explanation: "Subjects can withdraw at any time. Upon withdrawal, no further study procedures should be performed. Data collected up to that point can typically be used unless the subject specifically requests data deletion per protocol and regulations."
    },
    {
        domain: "implementation",
        question: "Which of the following represents proper investigational product accountability?",
        options: [
            "Recording dispensing in the CRF only",
            "Maintaining separate logs for receipt, dispensing, and returns with reconciliation",
            "Keeping all unused product at the site indefinitely",
            "Allowing subjects to keep unused product"
        ],
        correct: 1,
        explanation: "Proper accountability requires separate logs documenting receipt, dispensing to subjects, returns from subjects, and destruction/return to sponsor, with regular reconciliation to ensure all product is accounted for."
    },
    {
        domain: "implementation",
        question: "A monitor identifies a discrepancy between source and CRF. What should happen?",
        options: [
            "The monitor corrects the CRF directly",
            "A query is issued for site to address and resolve",
            "The discrepancy is noted but not corrected",
            "Only major discrepancies need correction"
        ],
        correct: 1,
        explanation: "Discrepancies should be addressed through the query process. The site reviews the query, investigates the discrepancy, and makes appropriate corrections with documentation. Monitors don't directly correct site data."
    },
    {
        domain: "implementation",
        question: "What information about adverse events must be collected?",
        options: [
            "Description only",
            "Description, start/stop dates, severity, relationship to study drug, outcome, and action taken",
            "Only the description and whether it's serious",
            "AEs don't need to be documented if they resolve"
        ],
        correct: 1,
        explanation: "Complete AE documentation includes: description, start and stop dates, severity grade, relationship to study product, seriousness determination, outcome, and any action taken with study drug or additional treatments."
    },

    // Study Closure Questions
    {
        domain: "closure",
        question: "How long must essential documents be retained after study completion in the United States?",
        options: [
            "1 year",
            "2 years after marketing approval or discontinuation",
            "5 years",
            "Indefinitely"
        ],
        correct: 1,
        explanation: "Per FDA regulations, records must be retained for 2 years after marketing application approval or 2 years after formal discontinuation if no application is filed. Some circumstances require longer retention."
    },
    {
        domain: "closure",
        question: "What must be completed before database lock?",
        options: [
            "Only primary endpoint data entry",
            "All data entered, cleaned, queries resolved, and data verified",
            "At least 80% of data entered",
            "Only safety data needs to be complete"
        ],
        correct: 1,
        explanation: "Database lock requires 100% data entry, all data cleaning completed, all queries resolved, and final verification performed. Once locked, no further changes are permitted, ensuring data integrity for analysis."
    },
    {
        domain: "closure",
        question: "What should be done with remaining investigational product at study closure?",
        options: [
            "Given to subjects for continued use",
            "Returned to sponsor or destroyed per protocol with documentation",
            "Kept at site for potential future studies",
            "Disposed of in regular trash"
        ],
        correct: 1,
        explanation: "Unused investigational product must be returned to sponsor or destroyed according to protocol and sponsor instructions, with complete documentation of the method and quantity. Accountability must be reconciled."
    },
    {
        domain: "closure",
        question: "What must be reported to the IRB at study completion?",
        options: [
            "Only that the study is complete",
            "Final number of subjects enrolled and summary of results",
            "Nothing if the study completed normally",
            "Only serious adverse events"
        ],
        correct: 1,
        explanation: "IRB must receive a final report including total enrollment, study completion status, summary of findings, adverse events, protocol deviations, and any other information required by the IRB."
    },
    {
        domain: "closure",
        question: "What is the primary purpose of a closeout monitoring visit?",
        options: [
            "To collect final payment",
            "To verify study completion, data accuracy, IP accountability, and regulatory compliance",
            "To destroy source documents",
            "To conduct the final subject visit"
        ],
        correct: 1,
        explanation: "Closeout visits verify all activities are complete: subjects finished/withdrawn, data accurate and complete, IP reconciled, essential documents present for archiving, and regulatory submissions completed."
    }
];

const studyGuideContent = {
    startup: {
        title: "Study Start-Up (40% of exam)",
        sections: [
            {
                heading: "Protocol Development",
                content: `
                    <p>The protocol is the foundation of any clinical trial. Key components include:</p>
                    <ul>
                        <li><strong>Title and Protocol Number:</strong> Clear identification</li>
                        <li><strong>Objectives & Endpoints:</strong> Primary and secondary aims</li>
                        <li><strong>Study Design:</strong> Randomization, blinding, controls</li>
                        <li><strong>Subject Population:</strong> Inclusion/exclusion criteria</li>
                        <li><strong>Treatment/Intervention:</strong> Dosing, duration, procedures</li>
                        <li><strong>Safety Monitoring:</strong> AE definitions, stopping rules</li>
                        <li><strong>Statistical Analysis:</strong> Sample size, analysis methods</li>
                        <li><strong>Ethics & Regulations:</strong> Informed consent, IRB requirements</li>
                    </ul>
                    <p><strong>Key Point:</strong> Protocol amendments require IRB approval before implementation (except for immediate safety changes).</p>
                `
            },
            {
                heading: "Regulatory Requirements",
                content: `
                    <h4>FDA Form 1572 - Statement of Investigator</h4>
                    <p>This critical document includes the investigator's commitment to:</p>
                    <ul>
                        <li>Conduct the study per protocol and GCP</li>
                        <li>Personally conduct or supervise the investigation</li>
                        <li>Report adverse events per regulations</li>
                        <li>Maintain adequate records and make them available</li>
                        <li>Ensure IRB review and approval</li>
                    </ul>

                    <h4>Investigational New Drug (IND) Application</h4>
                    <p>Required when studying unapproved drugs or approved drugs for new indications. Contains:</p>
                    <ul>
                        <li>Preclinical data (animal studies, toxicology)</li>
                        <li>Manufacturing and composition information</li>
                        <li>Clinical protocol(s)</li>
                        <li>Investigator qualifications</li>
                    </ul>
                `
            },
            {
                heading: "Informed Consent",
                content: `
                    <p>Informed consent is both a process and a document. It must include:</p>
                    <ul>
                        <li>Statement that the study involves research</li>
                        <li>Purpose, duration, and procedures</li>
                        <li>Reasonably foreseeable risks or discomforts</li>
                        <li>Potential benefits to subject or others</li>
                        <li>Alternative treatments available</li>
                        <li>Confidentiality protections and limits</li>
                        <li>Compensation for injury (if applicable)</li>
                        <li>Contacts for questions</li>
                        <li>Statement that participation is voluntary</li>
                        <li>Statement that refusal or withdrawal has no penalty</li>
                    </ul>
                    <p><strong>Important:</strong> Consent must be in language understandable to the subject. Use of short form with interpreter requires witness documentation.</p>
                `
            },
            {
                heading: "IRB/IEC Responsibilities",
                content: `
                    <p>The Institutional Review Board (IRB) or Independent Ethics Committee (IEC) protects human subjects by:</p>
                    <ul>
                        <li>Reviewing and approving protocols before initiation</li>
                        <li>Ensuring risks are minimized and reasonable relative to benefits</li>
                        <li>Ensuring informed consent is adequate</li>
                        <li>Ensuring equitable subject selection</li>
                        <li>Monitoring ongoing research through continuing review</li>
                        <li>Reviewing modifications and adverse events</li>
                    </ul>
                    <p><strong>Continuing Review:</strong> Required at least annually, more frequently for higher-risk studies.</p>
                `
            },
            {
                heading: "Essential Documents",
                content: `
                    <p>Documents required BEFORE study start:</p>
                    <ul>
                        <li>Protocol and amendments</li>
                        <li>Investigator's Brochure (current version)</li>
                        <li>IRB approval letter and approved consent forms</li>
                        <li>FDA Form 1572 (if FDA-regulated)</li>
                        <li>Financial disclosure forms (FDA 3454/3455)</li>
                        <li>CVs and medical licenses of investigators</li>
                        <li>Laboratory certifications (CLIA, CAP)</li>
                        <li>Clinical trial agreement</li>
                        <li>Monitoring plan</li>
                    </ul>
                `
            }
        ]
    },
    implementation: {
        title: "Study Implementation (50% of exam)",
        sections: [
            {
                heading: "Good Clinical Practice (GCP) Principles",
                content: `
                    <p>ICH-GCP E6(R3) is the foundation for conducting clinical trials. Core principles:</p>
                    <ol>
                        <li>Rights, safety, and well-being of subjects are most important</li>
                        <li>Trials should be scientifically sound and described in clear protocol</li>
                        <li>Trials should be conducted per approved protocol and GCP</li>
                        <li>Medical care and decisions should be supervised by qualified physician</li>
                        <li>Each individual should freely give informed consent</li>
                        <li>Trial information should be recorded, handled, and stored to ensure accuracy and confidentiality</li>
                        <li>Investigational products should be manufactured per GMP and used per protocol</li>
                    </ol>
                `
            },
            {
                heading: "Adverse Event Management",
                content: `
                    <h4>Definitions:</h4>
                    <p><strong>Adverse Event (AE):</strong> Any untoward medical occurrence in a subject, not necessarily causally related to treatment.</p>

                    <p><strong>Serious Adverse Event (SAE):</strong> An AE that:</p>
                    <ul>
                        <li>Results in death</li>
                        <li>Is life-threatening</li>
                        <li>Requires inpatient hospitalization or prolongs hospitalization</li>
                        <li>Results in persistent or significant disability/incapacity</li>
                        <li>Is a congenital anomaly/birth defect</li>
                        <li>Requires intervention to prevent permanent impairment</li>
                    </ul>

                    <h4>Reporting Timelines:</h4>
                    <ul>
                        <li><strong>Fatal or life-threatening unexpected SAEs:</strong> 7 calendar days (initial), 8 days (follow-up)</li>
                        <li><strong>Other unexpected SAEs:</strong> 15 calendar days</li>
                        <li><strong>IRB reporting:</strong> Per IRB policy, typically within 5-10 days</li>
                    </ul>

                    <h4>Causality Assessment:</h4>
                    <ul>
                        <li><strong>Unrelated:</strong> No temporal relationship or other cause is clear</li>
                        <li><strong>Unlikely:</strong> Temporal relationship exists but other cause more likely</li>
                        <li><strong>Possible:</strong> Temporal relationship exists, causation plausible</li>
                        <li><strong>Probable:</strong> Temporal relationship, no other likely cause</li>
                        <li><strong>Definite:</strong> Clear temporal relationship, rechallenge positive</li>
                    </ul>
                `
            },
            {
                heading: "Data Integrity - ALCOA+",
                content: `
                    <p>Data quality principles for clinical trials:</p>
                    <ul>
                        <li><strong>Attributable:</strong> Who recorded it and when? Must be traceable to source.</li>
                        <li><strong>Legible:</strong> Data must be readable throughout retention period.</li>
                        <li><strong>Contemporaneous:</strong> Recorded when the activity occurred, not later.</li>
                        <li><strong>Original:</strong> First recording of data (source data).</li>
                        <li><strong>Accurate:</strong> Free from errors, correct transcription.</li>
                        <li><strong>Complete:</strong> All required data collected and recorded.</li>
                        <li><strong>Consistent:</strong> Data is consistent across systems and time.</li>
                        <li><strong>Enduring:</strong> Data preserved throughout retention period.</li>
                        <li><strong>Available:</strong> Accessible when needed for review, audit, inspection.</li>
                    </ul>
                `
            },
            {
                heading: "Source Document Management",
                content: `
                    <p><strong>Source documents</strong> are where information is first recorded. Examples:</p>
                    <ul>
                        <li>Hospital/clinic charts</li>
                        <li>Clinical notes</li>
                        <li>Laboratory reports</li>
                        <li>Pharmacy records</li>
                        <li>ECGs, imaging reports</li>
                        <li>Informed consent forms</li>
                        <li>Subject diaries (if designated as source)</li>
                    </ul>

                    <p><strong>Source Data Verification (SDV):</strong> Process of comparing data in CRF to source documents to confirm:</p>
                    <ul>
                        <li>Data accuracy and completeness</li>
                        <li>Protocol compliance</li>
                        <li>GCP compliance</li>
                        <li>Proper documentation</li>
                    </ul>

                    <p><strong>Corrections:</strong> Single line through error (keep legible), correct data, date, initial, reason if needed.</p>
                `
            },
            {
                heading: "Investigational Product Management",
                content: `
                    <h4>Receipt and Storage:</h4>
                    <ul>
                        <li>Verify shipment contents against packing slip</li>
                        <li>Document receipt (date, quantity, lot numbers, condition)</li>
                        <li>Store per specifications (temperature, light, humidity)</li>
                        <li>Maintain temperature logs if required</li>
                        <li>Secure storage with restricted access</li>
                    </ul>

                    <h4>Accountability:</h4>
                    <ul>
                        <li>Maintain drug accountability logs</li>
                        <li>Document dispensing (date, subject ID, quantity, lot)</li>
                        <li>Document returns from subjects</li>
                        <li>Regular reconciliation of inventory</li>
                        <li>Investigate and document discrepancies</li>
                    </ul>

                    <h4>Dispensing:</h4>
                    <ul>
                        <li>Verify subject eligibility and randomization</li>
                        <li>Follow protocol-specific instructions</li>
                        <li>Provide subject instructions for administration and storage</li>
                        <li>Document dispensing in source and accountability log</li>
                        <li>Maintain blinding if applicable</li>
                    </ul>
                `
            },
            {
                heading: "Monitoring and Quality Assurance",
                content: `
                    <p><strong>Purpose of Monitoring:</strong> Verify that:</p>
                    <ul>
                        <li>Rights and well-being of subjects are protected</li>
                        <li>Reported trial data are accurate, complete, and verifiable</li>
                        <li>Conduct complies with protocol, GCP, and regulations</li>
                    </ul>

                    <p><strong>Monitoring Activities:</strong></p>
                    <ul>
                        <li>Source data verification (SDV)</li>
                        <li>Informed consent review</li>
                        <li>Eligibility verification</li>
                        <li>Protocol compliance assessment</li>
                        <li>Drug accountability review</li>
                        <li>AE/SAE review</li>
                        <li>Regulatory document review</li>
                        <li>Query resolution</li>
                    </ul>
                `
            }
        ]
    },
    closure: {
        title: "Study Closure (10% of exam)",
        sections: [
            {
                heading: "Closeout Activities",
                content: `
                    <p>Essential steps for proper study closure:</p>
                    <ol>
                        <li><strong>Subject Completion:</strong> All subjects completed or formally withdrawn</li>
                        <li><strong>Data Completion:</strong> All data entered, queries resolved, database locked</li>
                        <li><strong>IP Accountability:</strong> All investigational product accounted for, returned or destroyed</li>
                        <li><strong>Document Review:</strong> All essential documents complete and organized</li>
                        <li><strong>Monitoring:</strong> Final/closeout monitoring visit completed</li>
                        <li><strong>IRB Reporting:</strong> Final report submitted to IRB</li>
                        <li><strong>Financial Closeout:</strong> Final payments and reconciliation</li>
                        <li><strong>Archiving:</strong> Documents properly archived per requirements</li>
                    </ol>
                `
            },
            {
                heading: "Database Lock and Final Analysis",
                content: `
                    <p><strong>Database Lock</strong> is the point when the database is declared complete and no further changes are allowed.</p>

                    <p>Prerequisites for database lock:</p>
                    <ul>
                        <li>100% data entry completed</li>
                        <li>All data cleaning completed</li>
                        <li>All queries resolved and closed</li>
                        <li>Medical coding completed</li>
                        <li>Final data review by sponsor</li>
                        <li>Quality control checks passed</li>
                    </ul>

                    <p>After lock, statistical analysis begins. Any changes require formal database unlock procedures with documentation and justification.</p>
                `
            },
            {
                heading: "Final Reporting",
                content: `
                    <h4>Clinical Study Report (CSR):</h4>
                    <p>Comprehensive document following ICH E3 guidelines containing:</p>
                    <ul>
                        <li>Synopsis of study and results</li>
                        <li>Introduction and study objectives</li>
                        <li>Investigational plan</li>
                        <li>Study subjects (disposition, demographics)</li>
                        <li>Efficacy evaluation</li>
                        <li>Safety evaluation</li>
                        <li>Discussion and conclusions</li>
                        <li>Tables, figures, and listings</li>
                    </ul>

                    <h4>IRB Final Report:</h4>
                    <ul>
                        <li>Total enrollment numbers</li>
                        <li>Study completion status</li>
                        <li>Summary of adverse events</li>
                        <li>Protocol deviations summary</li>
                        <li>Brief results summary</li>
                        <li>Date of study closure</li>
                    </ul>
                `
            },
            {
                heading: "Document Retention and Archiving",
                content: `
                    <p><strong>Retention Requirements:</strong></p>
                    <p>At least 2 years after:</p>
                    <ul>
                        <li>Marketing application approval, OR</li>
                        <li>Formal discontinuation of clinical development</li>
                    </ul>
                    <p>Special cases may require longer retention (e.g., pediatric studies).</p>

                    <p><strong>Essential Documents to Archive:</strong></p>
                    <ul>
                        <li>Protocol and all amendments</li>
                        <li>IRB correspondence and approvals</li>
                        <li>Informed consent forms (all versions)</li>
                        <li>Subject identification log</li>
                        <li>Source documents</li>
                        <li>CRFs (paper or electronic copies)</li>
                        <li>Drug accountability records</li>
                        <li>AE/SAE reports</li>
                        <li>Monitoring logs and reports</li>
                        <li>Correspondence with sponsor</li>
                        <li>Regulatory submissions and approvals</li>
                        <li>Laboratory certifications</li>
                        <li>Staff training records</li>
                    </ul>

                    <p><strong>Archiving Requirements:</strong></p>
                    <ul>
                        <li>Secure, limited access location</li>
                        <li>Climate controlled</li>
                        <li>Organized with index for easy retrieval</li>
                        <li>Protection from destruction or loss</li>
                        <li>Transfer procedures if location changes</li>
                    </ul>
                `
            },
            {
                heading: "Early Termination",
                content: `
                    <p>Studies may be terminated early for various reasons:</p>
                    <ul>
                        <li><strong>Safety concerns:</strong> Unacceptable adverse events</li>
                        <li><strong>Futility:</strong> Unlikely to meet objectives</li>
                        <li><strong>Poor enrollment:</strong> Cannot achieve target sample size</li>
                        <li><strong>Sponsor decision:</strong> Business or strategic reasons</li>
                        <li><strong>Regulatory action:</strong> FDA clinical hold</li>
                    </ul>

                    <p><strong>Required Actions:</strong></p>
                    <ul>
                        <li>Notify IRB immediately</li>
                        <li>Notify all subjects and discontinue investigational product</li>
                        <li>Complete all required closeout activities</li>
                        <li>Submit final report to IRB explaining reason for termination</li>
                        <li>Complete safety follow-up as required</li>
                        <li>Archive all documents</li>
                    </ul>
                `
            }
        ]
    },
    regulations: {
        title: "Key Regulations and Guidelines",
        sections: [
            {
                heading: "ICH-GCP E6(R3)",
                content: `
                    <p>The International Council for Harmonisation Guideline for Good Clinical Practice, updated to E6(R3) effective January 1, 2026.</p>

                    <h4>Key Updates in E6(R3):</h4>
                    <ul>
                        <li>Enhanced focus on critical data and processes</li>
                        <li>Risk-based quality management</li>
                        <li>Greater flexibility in monitoring approaches</li>
                        <li>Emphasis on essential study activities</li>
                        <li>Updated roles and responsibilities</li>
                    </ul>

                    <p><strong>Study your current IB and protocol carefully - E6(R3) changes may be tested!</strong></p>
                `
            },
            {
                heading: "21 CFR Parts 50, 56, 312",
                content: `
                    <h4>21 CFR Part 50 - Protection of Human Subjects:</h4>
                    <ul>
                        <li>Informed consent requirements</li>
                        <li>Elements of consent</li>
                        <li>Special protections for vulnerable populations</li>
                    </ul>

                    <h4>21 CFR Part 56 - IRB Regulations:</h4>
                    <ul>
                        <li>IRB composition and functions</li>
                        <li>IRB review requirements</li>
                        <li>Criteria for approval</li>
                        <li>Continuing review</li>
                    </ul>

                    <h4>21 CFR Part 312 - IND Regulations:</h4>
                    <ul>
                        <li>IND application requirements</li>
                        <li>Investigator responsibilities</li>
                        <li>Sponsor responsibilities</li>
                        <li>IND safety reporting</li>
                    </ul>
                `
            },
            {
                heading: "Common Rule (45 CFR 46)",
                content: `
                    <p>Federal Policy for the Protection of Human Subjects, applicable to HHS-funded research.</p>

                    <h4>Key Provisions:</h4>
                    <ul>
                        <li>Basic IRB requirements</li>
                        <li>Informed consent standards</li>
                        <li>Subparts B, C, D: Additional protections for vulnerable populations
                            <ul>
                                <li>Subpart B: Pregnant women, fetuses, neonates</li>
                                <li>Subpart C: Prisoners</li>
                                <li>Subpart D: Children</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            {
                heading: "HIPAA Privacy Rule",
                content: `
                    <p>Protects privacy of individually identifiable health information.</p>

                    <p><strong>Research Use Requires Either:</strong></p>
                    <ul>
                        <li><strong>Authorization:</strong> Subject signs HIPAA authorization form, OR</li>
                        <li><strong>Waiver:</strong> IRB grants waiver of authorization, OR</li>
                        <li><strong>De-identification:</strong> Data properly de-identified per HIPAA standards</li>
                    </ul>

                    <p><strong>Minimum Necessary Standard:</strong> Use, disclose, or request only minimum PHI necessary to accomplish intended purpose.</p>
                `
            }
        ]
    }
};
