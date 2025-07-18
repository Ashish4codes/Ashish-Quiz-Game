// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Add a retry button for fallback
let retryButton = document.createElement('button');
retryButton.textContent = "Retry";
retryButton.style.display = 'none';
retryButton.className = 'retry-btn';
retryButton.onclick = () => { startQuiz(); };
quizScreen.appendChild(retryButton);

// Static list of India-related questions
function getIndiaQuestions() {
  return [
    {
      question: "What is the capital of India?",
      answers: [
        { text: "New Delhi", correct: true },
        { text: "Mumbai", correct: false },
        { text: "Kolkata", correct: false },
        { text: "Chennai", correct: false }
      ]
    },
    {
      question: "Who is known as the Father of the Nation in India?",
      answers: [
        { text: "Mahatma Gandhi", correct: true },
        { text: "Jawaharlal Nehru", correct: false },
        { text: "Subhas Chandra Bose", correct: false },
        { text: "B. R. Ambedkar", correct: false }
      ]
    },
    {
      question: "Which river is considered the holiest in India?",
      answers: [
        { text: "Ganga", correct: true },
        { text: "Yamuna", correct: false },
        { text: "Godavari", correct: false },
        { text: "Narmada", correct: false }
      ]
    },
    {
      question: "Which is the largest state in India by area?",
      answers: [
        { text: "Rajasthan", correct: true },
        { text: "Maharashtra", correct: false },
        { text: "Uttar Pradesh", correct: false },
        { text: "Madhya Pradesh", correct: false }
      ]
    },
    {
      question: "Who wrote the Indian national anthem?",
      answers: [
        { text: "Rabindranath Tagore", correct: true },
        { text: "Bankim Chandra Chatterjee", correct: false },
        { text: "Sarojini Naidu", correct: false },
        { text: "Subramania Bharati", correct: false }
      ]
    },
    {
      question: "Which is the national animal of India?",
      answers: [
        { text: "Tiger", correct: true },
        { text: "Lion", correct: false },
        { text: "Elephant", correct: false },
        { text: "Leopard", correct: false }
      ]
    },
    {
      question: "Which Indian city is known as the 'Pink City'?",
      answers: [
        { text: "Jaipur", correct: true },
        { text: "Jodhpur", correct: false },
        { text: "Udaipur", correct: false },
        { text: "Bikaner", correct: false }
      ]
    },
    {
      question: "Who was the first President of India?",
      answers: [
        { text: "Dr. Rajendra Prasad", correct: true },
        { text: "Dr. S. Radhakrishnan", correct: false },
        { text: "Zakir Hussain", correct: false },
        { text: "V. V. Giri", correct: false }
      ]
    },
    {
      question: "Which is the longest river in India?",
      answers: [
        { text: "Ganga", correct: true },
        { text: "Yamuna", correct: false },
        { text: "Godavari", correct: false },
        { text: "Brahmaputra", correct: false }
      ]
    },
    {
      question: "Which Indian state has the longest coastline?",
      answers: [
        { text: "Gujarat", correct: true },
        { text: "Andhra Pradesh", correct: false },
        { text: "Tamil Nadu", correct: false },
        { text: "Maharashtra", correct: false }
      ]
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      answers: [
        { text: "Indira Gandhi", correct: true },
        { text: "Sonia Gandhi", correct: false },
        { text: "Pratibha Patil", correct: false },
        { text: "Sarojini Naidu", correct: false }
      ]
    },
    {
      question: "Which Indian festival is known as the 'Festival of Lights'?",
      answers: [
        { text: "Diwali", correct: true },
        { text: "Holi", correct: false },
        { text: "Dussehra", correct: false },
        { text: "Navratri", correct: false }
      ]
    },
    {
      question: "Which is the highest civilian award in India?",
      answers: [
        { text: "Bharat Ratna", correct: true },
        { text: "Padma Vibhushan", correct: false },
        { text: "Padma Bhushan", correct: false },
        { text: "Padma Shri", correct: false }
      ]
    },
    {
      question: "Who is the author of the book 'Discovery of India'?",
      answers: [
        { text: "Jawaharlal Nehru", correct: true },
        { text: "Mahatma Gandhi", correct: false },
        { text: "Rabindranath Tagore", correct: false },
        { text: "Dr. B. R. Ambedkar", correct: false }
      ]
    },
    {
      question: "Which Indian state is famous for the dance form Kathakali?",
      answers: [
        { text: "Kerala", correct: true },
        { text: "Tamil Nadu", correct: false },
        { text: "Karnataka", correct: false },
        { text: "Andhra Pradesh", correct: false }
      ]
    },
    {
      question: "Which is the smallest state in India by area?",
      answers: [
        { text: "Goa", correct: true },
        { text: "Sikkim", correct: false },
        { text: "Tripura", correct: false },
        { text: "Nagaland", correct: false }
      ]
    },
    {
      question: "Who was the first Indian to win a Nobel Prize?",
      answers: [
        { text: "Rabindranath Tagore", correct: true },
        { text: "C. V. Raman", correct: false },
        { text: "Mother Teresa", correct: false },
        { text: "Amartya Sen", correct: false }
      ]
    },
    {
      question: "Which city is known as the 'Silicon Valley of India'?",
      answers: [
        { text: "Bangalore", correct: true },
        { text: "Hyderabad", correct: false },
        { text: "Pune", correct: false },
        { text: "Chennai", correct: false }
      ]
    },
    {
      question: "Which Indian monument is one of the Seven Wonders of the World?",
      answers: [
        { text: "Taj Mahal", correct: true },
        { text: "Qutub Minar", correct: false },
        { text: "Red Fort", correct: false },
        { text: "Gateway of India", correct: false }
      ]
    },
    {
      question: "Who is the current Prime Minister of India (as of 2024)?",
      answers: [
        { text: "Narendra Modi", correct: true },
        { text: "Rahul Gandhi", correct: false },
        { text: "Amit Shah", correct: false },
        { text: "Manmohan Singh", correct: false }
      ]
    }
  ];
}

// Utility function to shuffle an array (Fisher-Yates)
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let sessionQuestions = [];

totalQuestionsSpan.textContent = sessionQuestions.length;
maxScoreSpan.textContent = sessionQuestions.length;

// event listeners
startButton.removeEventListener("click", startQuiz);
startButton.addEventListener("click", () => { startQuiz(); });
restartButton.removeEventListener("click", restartQuiz);
restartButton.addEventListener("click", () => { startQuiz(); });

// Update startQuiz to shuffle answers for each question
async function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  // Show loading message
  questionText.textContent = "Loading India-related questions...";
  answersContainer.innerHTML = "";
  retryButton.style.display = 'none';
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  // Shuffle and select a random subset of questions
  const allQuestions = getIndiaQuestions();
  const shuffled = shuffleArray(allQuestions);
  // Show up to 5 questions per session, or all if fewer
  sessionQuestions = shuffled.slice(0, Math.min(5, shuffled.length));

  // Shuffle the answers for each question
  sessionQuestions.forEach(q => {
    q.answers = shuffleArray(q.answers);
  });

  totalQuestionsSpan.textContent = sessionQuestions.length;
  maxScoreSpan.textContent = sessionQuestions.length;

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = sessionQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / sessionQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  // Shuffle the answers for the current question before displaying
  const shuffledAnswers = shuffleArray(currentQuestion.answers);

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < sessionQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / sessionQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}