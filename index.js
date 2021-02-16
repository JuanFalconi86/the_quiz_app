let questionDiv = document.getElementById("questionDiv");
let options = [...document.getElementsByClassName("option")];
let scoreText = document.querySelector(".score"); //recupero la div de score, luego voy a ir aumentando el score
let score = 0;
let nextButton = document.getElementById("next-question");
let currentQuestionIndex = 0;

let listOfQuestions = [
  {
    nameOfQuestion: "Question number 1 ?",
    answerOptions: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: "answer A",
  },
  {
    nameOfQuestion: "Question number 2 ?",
    answerOptions: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: "answer B",
  },
  {
    nameOfQuestion: "Question number 3 ?",
    answerOptions: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: "answer B",
  },
  {
    nameOfQuestion: "Question number 4 ?",
    answerOptions: ["answer A", "answer B", "answer C", "answer D"],
    correctAnswer: "answer B",
  },
];

// questionDiv.innerHTML = question1.nameOfQuestion // testing if the question appears in the browser, in the DOM ==> it works

// options.forEach((option, index,arr)  => {
//     option.innerHTML = question1.answerOptions[index]
//     option.style.cursor = "pointer"
// })  // ==> mediante este loop, puedo pasar cada opcion de respuesta separadamente en las opciones HTML de respuesta. Ademas, le di un efecto de cursor encima.

// THIS FUNCTION WILL SHOW A QUESTION
function showQuestion(question) {
  questionDiv.innerHTML = question.nameOfQuestion;
  options.forEach((option, index, arr) => {
    option.innerHTML = question.answerOptions[index];
  });
}

//THIS FUNCTION WILL LET GO TO THE NEXT QUESTION
nextButton.onclick = () => {
  showQuestion(listOfQuestions[(currentQuestionIndex += 1)]);
};

// THIS FUNCTION WILL SHOW WHICH ANSWER IS RIGHT OR WRONG
function rightOrWrong(oneQuestion, option) {
    let selectedAnswer = option.innerHTML;
    if (selectedAnswer === oneQuestion.correctAnswer) {
      option.classList.add("right");
      console.log("correct answer");
    } else {
      option.classList.add("wrong");
    }
}

options.forEach((option, index) => {
  option.onclick = () => {
    rightOrWrong(listOfQuestions[currentQuestionIndex], option)
    }
    // rightOrWrong(listOfQuestions[currentQuestionIndex]);
  });


// function nextQuestion(question) {
//   nextButton.onclick = showNewQuestion(question);
// }

showQuestion(listOfQuestions[currentQuestionIndex]);

// setTimeout(() => {
//     currentQuestionIndex++
//     showQuestion(listOfQuestions[currentQuestionIndex]);

// }, 7000);
