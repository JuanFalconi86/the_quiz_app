let questionDiv = document.getElementById("questionDiv");
let options = [...document.getElementsByClassName("option")];
let scoreText = document.querySelector(".score"); //recupero la div de score, luego voy a ir aumentando el score
let score = 0;
let nextButton = document.getElementById("next-question");
let currentQuestionIndex = 0;

let listOfQuestions = [
  {
    nameOfQuestion: "Who directed the movie Magnolia ?",
    answerOptions: [
      "Paul Thomas Anderson",
      "Steven Spielberg",
      "Martin Scorsese",
      "Alfonso Cuaron",
    ],
    correctAnswer: "Paul Thomas Anderson",
  },
  {
    nameOfQuestion: "What TV show was created by Larry David ?",
    answerOptions: ["Friends", "The Office", "Seinfield", "Oz"],
    correctAnswer: "Seinfield",
  },
  {
    nameOfQuestion: "Where does the series The Wire take place ?",
    answerOptions: ["Seattle", "Washington DC", "Austin", "Baltimore"],
    correctAnswer: "Baltimore",
  },
  {
    nameOfQuestion: "Who created Twin Peaks ? ",
    answerOptions: [
      "David Lynch",
      "David Benioff",
      "JJ Abrams",
      "Damon Lindelof",
    ],
    correctAnswer: "David Lynch",
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
      console.log("correct answer")
    } else {
      option.classList.add("wrong");
  
    }
}

//THIS ADDS EVENT LISTENER 
options.forEach((option) => {
  // option.addEventListener('click', rightOrWrong(listOfQuestions[currentQuestionIndex]), option)
  option.onclick = () => {
    rightOrWrong(listOfQuestions[currentQuestionIndex], option)}
  });


// function nextQuestion(question) {
//   nextButton.onclick = showNewQuestion(question);
// }

showQuestion(listOfQuestions[currentQuestionIndex]);

// setTimeout(() => {
//     currentQuestionIndex++
//     showQuestion(listOfQuestions[currentQuestionIndex]);

// }, 7000);
