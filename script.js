const questions = [
  {
    topic: "Number", title: "Number & ratio",
    prompt: "Work out ¾ + ⅚.",
    options: ["1 ⁷⁄₁₂", "1 ⁵⁄₁₂", "1 ¹⁄₁₂", "1 ⁹⁄₁₂"], answer: 0,
    explanation: "Use a common denominator of 12: ¾ = 9⁄12 and ⅚ = 10⁄12. So 9⁄12 + 10⁄12 = 19⁄12 = 1 ⁷⁄₁₂."
  },
  {
    topic: "Number", title: "Number & ratio",
    prompt: "Share ₦55 in the ratio 4 : 7. How much does the smaller share receive?",
    options: ["₦20", "₦25", "₦28", "₦35"], answer: 0,
    explanation: "There are 4 + 7 = 11 parts. Each part is ₦55 ÷ 11 = ₦5, so the smaller share is 4 × ₦5 = ₦20."
  },
  {
    topic: "Number", title: "Number & ratio",
    prompt: "Find 15% of 240.",
    options: ["24", "30", "36", "40"], answer: 2,
    explanation: "10% of 240 is 24 and 5% is 12. Therefore 15% = 24 + 12 = 36."
  },
  {
    topic: "Number", title: "Number & ratio",
    prompt: "Find the simple interest on ₦12,000 at 5% per year for 2 years.",
    options: ["₦600", "₦1,000", "₦1,200", "₦2,400"], answer: 2,
    explanation: "Simple interest = P × R × T ÷ 100 = 12,000 × 5 × 2 ÷ 100 = ₦1,200."
  },
  {
    topic: "Number", title: "Number & ratio",
    prompt: "Write 0.00072 in standard form.",
    options: ["7.2 × 10⁻⁴", "7.2 × 10⁻⁵", "72 × 10⁻⁴", "0.72 × 10⁻³"], answer: 0,
    explanation: "Move the decimal point 4 places to the right to get 7.2. Moving it right gives a negative power, so 0.00072 = 7.2 × 10⁻⁴."
  },
  {
    topic: "Algebra", title: "Algebra",
    prompt: "Simplify 3(2x − 5) + 4.",
    options: ["6x − 11", "6x − 19", "5x − 11", "6x + 1"], answer: 0,
    explanation: "Multiply each term inside the brackets by 3: 6x − 15 + 4. Combine the constants to get 6x − 11."
  },
  {
    topic: "Algebra", title: "Algebra",
    prompt: "Solve 5x − 7 = 18.",
    options: ["x = 3", "x = 5", "x = 7", "x = 11"], answer: 1,
    explanation: "Add 7 to both sides: 5x = 25. Divide both sides by 5 to get x = 5."
  },
  {
    topic: "Algebra", title: "Algebra",
    prompt: "Factorise x² + 7x + 12.",
    options: ["(x + 2)(x + 6)", "(x + 3)(x + 4)", "(x − 3)(x − 4)", "(x + 1)(x + 12)"], answer: 1,
    explanation: "Find two numbers whose product is 12 and whose sum is 7: 3 and 4. Therefore x² + 7x + 12 = (x + 3)(x + 4)."
  },
  {
    topic: "Algebra", title: "Algebra",
    prompt: "Solve the inequality 3x + 2 < 14.",
    options: ["x < 4", "x > 4", "x < 12", "x > 12"], answer: 0,
    explanation: "Subtract 2 from both sides to get 3x < 12. Divide by positive 3, so the inequality sign stays the same: x < 4."
  },
  {
    topic: "Algebra", title: "Algebra",
    prompt: "What is the next term in this sequence? 4, 9, 14, 19, …",
    options: ["21", "23", "24", "25"], answer: 2,
    explanation: "Each term increases by 5. Add 5 to 19 to get the next term, 24."
  },
  {
    topic: "Geometry", title: "Geometry",
    prompt: "Two angles in a triangle are 52° and 61°. Find the third angle.",
    options: ["57°", "67°", "77°", "113°"], answer: 1,
    explanation: "Angles in a triangle add up to 180°. The third angle is 180° − 52° − 61° = 67°."
  },
  {
    topic: "Geometry", title: "Geometry",
    prompt: "What is the size of each interior angle of a regular pentagon?",
    options: ["72°", "90°", "108°", "120°"], answer: 2,
    explanation: "The interior angle sum of a pentagon is (5 − 2) × 180° = 540°. A regular pentagon has 5 equal angles, so each is 540° ÷ 5 = 108°."
  },
  {
    topic: "Geometry", title: "Geometry",
    prompt: "A right-angled triangle has shorter sides of 6 cm and 8 cm. Find the hypotenuse.",
    options: ["9 cm", "10 cm", "12 cm", "14 cm"], answer: 1,
    explanation: "By Pythagoras, c² = 6² + 8² = 36 + 64 = 100. Therefore c = √100 = 10 cm."
  },
  {
    topic: "Geometry", title: "Geometry",
    prompt: "Three angles of a quadrilateral are 85°, 95° and 110°. Find the fourth angle.",
    options: ["60°", "70°", "80°", "90°"], answer: 1,
    explanation: "The interior angles of a quadrilateral add up to 360°. The fourth angle is 360° − (85° + 95° + 110°) = 70°."
  },
  {
    topic: "Geometry", title: "Geometry",
    prompt: "A regular hexagon has how many lines of symmetry?",
    options: ["3", "4", "6", "8"], answer: 2,
    explanation: "A regular hexagon has 6 lines of symmetry: 3 through opposite vertices and 3 through the midpoints of opposite sides."
  },
  {
    topic: "Measure", title: "Measurement",
    prompt: "Find the area of a trapezium with parallel sides 8 cm and 14 cm, and height 5 cm.",
    options: ["45 cm²", "50 cm²", "55 cm²", "70 cm²"], answer: 2,
    explanation: "Area = ½ × (sum of parallel sides) × height = ½ × (8 + 14) × 5 = 55 cm²."
  },
  {
    topic: "Measure", title: "Measurement",
    prompt: "Find the circumference of a circle with radius 7 cm. Use π = ²²⁄₇.",
    options: ["22 cm", "44 cm", "88 cm", "154 cm"], answer: 1,
    explanation: "Circumference = 2πr = 2 × ²²⁄₇ × 7 = 44 cm."
  },
  {
    topic: "Measure", title: "Measurement",
    prompt: "A cylinder has radius 7 cm and height 10 cm. Find its volume. Use π = ²²⁄₇.",
    options: ["440 cm³", "770 cm³", "1,540 cm³", "3,080 cm³"], answer: 2,
    explanation: "Volume = πr²h = ²²⁄₇ × 7² × 10 = 1,540 cm³."
  },
  {
    topic: "Measure", title: "Measurement",
    prompt: "On a map, 1 cm represents 2 km. What real distance is represented by 7.5 cm?",
    options: ["3.75 km", "9.5 km", "15 km", "150 km"], answer: 2,
    explanation: "Each centimetre represents 2 km, so 7.5 cm represents 7.5 × 2 = 15 km."
  },
  {
    topic: "Data", title: "Data & chance",
    prompt: "Find the mean of 4, 6, 6, 8 and 11.",
    options: ["6", "7", "8", "35"], answer: 1,
    explanation: "Add the values: 4 + 6 + 6 + 8 + 11 = 35. Divide by the 5 values: 35 ÷ 5 = 7."
  },
  {
    topic: "Data", title: "Data & chance",
    prompt: "A bag contains 3 red, 5 blue and 2 green counters. What is the probability of picking a blue counter?",
    options: ["¹⁄₅", "⅓", "½", "⅗"], answer: 2,
    explanation: "There are 10 counters altogether and 5 are blue. The probability is 5⁄10 = ½."
  },
  {
    topic: "Data", title: "Data & chance",
    prompt: "Find the median of 3, 5, 6, 9, 12, 14 and 20.",
    options: ["6", "9", "10", "12"], answer: 1,
    explanation: "The values are already in order. With 7 values, the median is the 4th value, which is 9."
  },
  {
    topic: "Other", title: "Graphs & more",
    prompt: "The midpoint of the line segment joining (2, 1) and (8, 7) is…",
    options: ["(3, 4)", "(5, 4)", "(5, 8)", "(10, 8)"], answer: 1,
    explanation: "Average the x-coordinates and y-coordinates separately: ((2 + 8) ÷ 2, (1 + 7) ÷ 2) = (5, 4)."
  },
  {
    topic: "Other", title: "Graphs & more",
    prompt: "A bus travels 150 km in 3 hours. What is its average speed?",
    options: ["30 km/h", "45 km/h", "50 km/h", "450 km/h"], answer: 2,
    explanation: "Average speed = distance ÷ time = 150 km ÷ 3 h = 50 km/h."
  }
];

const storageKey = "maths-made-easy-jss3-progress";
const elements = {
  topicButtons: [...document.querySelectorAll(".topic-button")],
  progressLabel: document.querySelector("#progress-label"),
  progressFill: document.querySelector("#progress-fill"),
  progressBar: document.querySelector('[role="progressbar"]'),
  sectionKicker: document.querySelector("#section-kicker"),
  panelTitle: document.querySelector("#panel-title"),
  questionCard: document.querySelector("#question-card"),
  questionTopic: document.querySelector("#question-topic"),
  questionNumber: document.querySelector("#question-number"),
  questionText: document.querySelector("#question-text"),
  answerList: document.querySelector("#answer-list"),
  feedback: document.querySelector("#feedback"),
  feedbackIcon: document.querySelector("#feedback-icon"),
  feedbackTitle: document.querySelector("#feedback-title"),
  feedbackText: document.querySelector("#feedback-text"),
  nextButton: document.querySelector("#next-button"),
  shuffleButton: document.querySelector("#shuffle-button"),
  keyboardHint: document.querySelector(".keyboard-hint")
};

let activeTopic = "all";
let sessionQuestions = [...questions];
let questionIndex = 0;
let selectedAnswer = null;
let answerChecked = false;
let sessionScore = 0;
const sessionAnswered = new Set();
let completedQuestions = loadProgress();

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return new Set(Array.isArray(saved)
      ? saved.filter((id) => Number.isInteger(id) && id >= 0 && id < questions.length)
      : []);
  } catch (error) {
    console.warn("Could not load saved maths progress.", error);
    return new Set();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completedQuestions]));
  } catch (error) {
    console.warn("Could not save maths progress.", error);
  }
}

function renderProgress() {
  const completed = completedQuestions.size;
  const percent = Math.round((completed / questions.length) * 100);
  elements.progressLabel.textContent = `${completed} / ${questions.length} done`;
  elements.progressFill.style.width = `${percent}%`;
  elements.progressBar.setAttribute("aria-valuenow", String(completed));
}

function updateTopicButtons() {
  elements.topicButtons.forEach((button) => {
    const isActive = button.dataset.topic === activeTopic;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function startTopic(topic, shuffle = false) {
  document.querySelector(".completion-card")?.remove();
  activeTopic = topic;
  sessionQuestions = topic === "all" ? [...questions] : questions.filter((question) => question.topic === topic);
  if (shuffle) {
    for (let i = sessionQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sessionQuestions[i], sessionQuestions[j]] = [sessionQuestions[j], sessionQuestions[i]];
    }
  }
  questionIndex = 0;
  selectedAnswer = null;
  answerChecked = false;
  sessionScore = 0;
  sessionAnswered.clear();
  elements.sectionKicker.textContent = topic === "all" ? "LET’S GET STARTED" : "TOPIC PRACTICE";
  elements.panelTitle.textContent = topic === "all"
    ? "Choose your next challenge"
    : `${sessionQuestions[0]?.title ?? "Practice"} challenge`;
  updateTopicButtons();
  renderQuestion();
}

function renderQuestion() {
  const question = sessionQuestions[questionIndex];
  if (!question) {
    renderCompletion();
    return;
  }

  selectedAnswer = null;
  answerChecked = false;
  elements.questionCard.hidden = false;
  elements.questionTopic.textContent = question.title.toUpperCase();
  elements.questionNumber.innerHTML = `QUESTION ${String(questionIndex + 1).padStart(2, "0")} <span>·</span> ${sessionQuestions.length}`;
  elements.questionText.textContent = question.prompt;
  elements.answerList.replaceChildren();
  elements.feedback.hidden = true;
  elements.feedback.classList.remove("incorrect");
  elements.keyboardHint.textContent = "Choose an answer to check it";
  elements.nextButton.replaceChildren(document.createTextNode("Check answer"));
  appendArrow(elements.nextButton);
  elements.nextButton.disabled = true;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.setAttribute("aria-pressed", "false");
    const letter = document.createElement("span");
    letter.className = "option-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement("span");
    label.textContent = option;
    button.append(letter, label);
    button.addEventListener("click", () => selectAnswer(index));
    elements.answerList.append(button);
  });
}

function appendArrow(button) {
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "→";
  button.append(arrow);
}

function selectAnswer(index) {
  if (answerChecked) return;
  selectedAnswer = index;
  [...elements.answerList.children].forEach((button, optionIndex) => {
    const selected = index === optionIndex;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  elements.nextButton.disabled = false;
}

function checkAnswer() {
  const question = sessionQuestions[questionIndex];
  if (selectedAnswer === null || answerChecked || !question) return;
  answerChecked = true;
  const isCorrect = selectedAnswer === question.answer;
  const questionId = questions.indexOf(question);
  if (!sessionAnswered.has(questionId)) {
    sessionAnswered.add(questionId);
    if (isCorrect) sessionScore += 1;
    completedQuestions.add(questionId);
    saveProgress();
    renderProgress();
  }

  [...elements.answerList.children].forEach((button, index) => {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    else if (index === selectedAnswer) button.classList.add("incorrect");
  });
  elements.feedback.hidden = false;
  elements.feedback.classList.toggle("incorrect", !isCorrect);
  elements.feedbackIcon.textContent = isCorrect ? "✓" : "!";
  elements.feedbackTitle.textContent = isCorrect
    ? "That’s correct!"
    : `Not quite — the answer is ${String.fromCharCode(65 + question.answer)}.`;
  elements.feedbackText.textContent = question.explanation;
  elements.keyboardHint.textContent = isCorrect ? "Nice work. Keep going!" : "Review the steps, then keep going.";
  elements.nextButton.replaceChildren(
    document.createTextNode(questionIndex === sessionQuestions.length - 1 ? "See results" : "Next question")
  );
  appendArrow(elements.nextButton);
  elements.nextButton.disabled = false;
}

function renderCompletion() {
  const total = sessionAnswered.size;
  const percent = total ? Math.round((sessionScore / total) * 100) : 0;
  const card = document.createElement("div");
  card.className = "completion-card";

  const mark = document.createElement("div");
  mark.className = "completion-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = "✓";
  const heading = document.createElement("h3");
  heading.textContent = "Practice complete!";
  const score = document.createElement("p");
  score.className = "score-line";
  score.textContent = `You got ${sessionScore} out of ${total} answered ${total === 1 ? "question" : "questions"} right (${percent}%).`;
  const note = document.createElement("p");
  note.textContent = "Every question is a chance to learn. Pick a topic or give the set another go.";
  const restart = document.createElement("button");
  restart.type = "button";
  restart.className = "next-button";
  restart.textContent = "Practise again";
  restart.addEventListener("click", () => startTopic(activeTopic));

  card.append(mark, heading, score, note, restart);
  elements.questionCard.hidden = true;
  elements.questionCard.after(card);
  elements.panelTitle.textContent = "You did it!";
}

function advanceQuestion() {
  if (!answerChecked) {
    checkAnswer();
    return;
  }
  questionIndex += 1;
  document.querySelector(".completion-card")?.remove();
  renderQuestion();
}

elements.topicButtons.forEach((button) => {
  button.addEventListener("click", () => startTopic(button.dataset.topic));
});
elements.nextButton.addEventListener("click", advanceQuestion);
elements.shuffleButton.addEventListener("click", () => startTopic(activeTopic, true));

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.target instanceof HTMLInputElement) return;
  const keyIndex = Number(event.key) - 1;
  if (!answerChecked && keyIndex >= 0 && keyIndex < (sessionQuestions[questionIndex]?.options.length ?? 0)) {
    selectAnswer(keyIndex);
  } else if (event.key === "Enter" && !elements.nextButton.disabled) {
    advanceQuestion();
  }
});

renderProgress();
startTopic("all");