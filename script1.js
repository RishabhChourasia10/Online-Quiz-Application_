const quizData = [
  {
    question: "Which National Park is the largest in MP, also called the 'Tiger State'?",
    a: "Kanha National Park",
    b: "Bandhavgarh National Park",
    c: "Satpura National Park",
    d: "Pench National Park",
    correct: "a",
  },
  {
    question: "The story of The Jungle Book is inspired by which National Park?",
    a: "Madhav National Park",
    b: "Pench National Park",
    c: "Panna National Park",
    d: "Kanha National Park",
    correct: "b",
  },
  {
    question: "Which National Park is famous for swamp deer (Barasingha)?",
    a: "Van Vihar National Park",
    b: "Fossil National Park",
    c: "Kanha National Park",
    d: "Sanjay National Park",
    correct: "c",
  },
  {
    question: "Which National Park is located in Bhopal?",
    a: "Satpura National Park",
    b: "Van Vihar National Park",
    c: "Madhav National Park",
    d: "Panna National Park",
    correct: "b",
  },
  {
    question: "Which National Park is famous for 65 million-year-old tree fossils?",
    a: "Fossil National Park",
    b: "Panna National Park",
    c: "Sanjay National Park",
    d: "Bandhavgarh National Park",
    correct: "a",
  },
  {
    question: "Which National Park in MP is known for the largest and heaviest tigers?",
    a: "Kanha National Park",
    b: "Bandhavgarh National Park",
    c: "Pench National Park",
    d: "Satpura National Park",
    correct: "b", // Bandhavgarh tigers are considered the heaviest
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <div class="quiz-box">
          <h2>🎉 Quiz Finished 🎉</h2>
          <p>You answered <b>${score}</b> out of ${quizData.length} questions correctly ✅</p>
          <button onclick="location.reload()">Play Again 🔄</button>
        </div>
      `;
    }
  }
});
