let questionDiv = document.getElementById("questionDiv");
let options = [...document.getElementsByClassName("option")];
let scoreText = document.querySelector(".score"); //recupero la div de score, luego voy a ir aumentando el score
let score = 0;
let nextButton = document.getElementById("next-question");
let currentQuestionIndex = 0;
let totalScore = []

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

// THIS FUNCTION WILL SHOW A QUESTION
function showQuestion(question) {
  questionDiv.innerHTML = question.nameOfQuestion;
  options.forEach((option, index, arr) => {
    option.innerHTML = question.answerOptions[index];
    option.parentElement.style.pointerEvents = "auto"; //here, I am "reseting" the pointer events so when I see the question, I can click everywhere
    option.classList.remove("right"); //again, reseting the class, because in the previous question, there is a class applied (because someone clicked)
    option.classList.remove("wrong") //the same that above
  });
}

//THIS FUNCTION WILL LET GO TO THE NEXT QUESTION
nextButton.onclick = () => {
  showQuestion(listOfQuestions[(currentQuestionIndex += 1)])
};


// THIS FUNCTION WILL SHOW WHICH ANSWER IS RIGHT OR WRONG
function rightOrWrong(oneQuestion, option) {
  option.parentElement.style.pointerEvents = "none";
    let selectedAnswer = option.innerHTML;
    if (selectedAnswer === oneQuestion.correctAnswer) {
      option.classList.add("right");
      score ++
      alert("Correct answer!! Nicely done")
    } else {
      option.classList.add("wrong");
      console.log('incrorrect')
      alert(`Nop, wrong answer. The correct answer was ${oneQuestion.correctAnswer} `)
    } 
}


//THIS ADDS EVENT LISTENER  THAT ENABLES TO CLICK AND SET THE RIGHT OR WRONG IN AN OPTION
options.forEach((option) => {
  option.onclick = () => {
    rightOrWrong(listOfQuestions[currentQuestionIndex], option)}  
  })

  // UUNE AUTRE ALTERNATIVE
// function onOptionClicked(event) {
//   rightOrWrong(listOfQuestions[currentQuestionIndex], event.target);
//   options.forEach((option, index, arr) => {
//     option.removeEventListener("click", onOptionClicked);
//   });
// }


showQuestion(listOfQuestions[currentQuestionIndex]);



//THIS IS A SET TIMEOUT FUNCTION
// setTimeout(() => {
//     currentQuestionIndex++
//     showQuestion(listOfQuestions[currentQuestionIndex]);

// }, 7000);
