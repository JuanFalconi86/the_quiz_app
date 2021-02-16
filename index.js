let questionDiv = document.getElementById("questionDiv");
let options = [...document.getElementsByClassName("option")];
let scoreText = document.querySelector(".score"); //recupero la div de score, luego voy a ir aumentando el score
let score = 0;
let nextButton = document.getElementById("next-question");
let currentQuestionIndex = 0

let listOfQuestions = [
  {
    nameOfQuestion: "Question number 1 ?",
    answerOptions: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: 2,
  },

  {
    nameOfQuestion: "Question number 2 ?",
    answerOptions: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: 2,
  },
  {
    nameOfQuestion: "Question number 3 ?",
    answerOptions: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: 2,
  },
];

// questionDiv.innerHTML = question1.nameOfQuestion // testing if the question appears in the browser, in the DOM ==> it works

// options.forEach((option, index,arr)  => {
//     option.innerHTML = question1.answerOptions[index]
//     option.style.cursor = "pointer"
// })  // ==> mediante este loop, puedo pasar cada opcion de respuesta separadamente en las opciones HTML de respuesta. Ademas, le di un efecto de cursor encima.

function showQuestion(question) {
  questionDiv.innerHTML = question.nameOfQuestion;
  options.forEach((option, index, arr) => {
    option.innerHTML = question.answerOptions[index];
  });
}

nextButton.onclick = () => {
  showQuestion(listOfQuestions[currentQuestionIndex + 1]);
};


function rightOrWrong(question) {
    options.forEach((option, index, arr) => {
        if (question.answerOptions[index] === question.correctAnswer) {
          option.classList.add("right");
          console.log("Correct Answer!");
        } else {
          option.classList.add("wrong");
        }
      })}


options.forEach(option => {
    option.onclick = () => {console.log('hello')}
})


// function nextQuestion(question) {
//   nextButton.onclick = showNewQuestion(question);
// }


showQuestion(listOfQuestions[currentQuestionIndex]);
// setTimeout(() => {
//     currentQuestionIndex++
//     showQuestion(listOfQuestions[currentQuestionIndex]);

// }, 7000);
