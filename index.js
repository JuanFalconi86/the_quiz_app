let questionDiv = document.getElementById("questionDiv");
let options = [...document.getElementsByClassName("option")];
let scoreText = document.querySelector(".score"); //recupero la div de score, luego voy a ir aumentando el score
let score = 0;
let nextButton = document.getElementById("next-question");
let currentQuestionIndex = 0;
let endButton = document.getElementById("end-button")

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
  {
    nameOfQuestion: "In what year was the movie GoodFellas released ?",
    answerOptions: ["1982", "1990", "2004", "1970"],
    correctAnswer: "1990",
  },
  {
    nameOfQuestion:
      "What is the name of Mark Whalberg's character in Boogie Nights ? ",
    answerOptions: ["Little Sam", "Doctor Love", "Dirk Diggler", "Mr Simmons"],
    correctAnswer: "Dirk Diggler",
  },
  {
    nameOfQuestion:
      "In There Will Be Blood, what is Daniel Day Lewis character name ?",
    answerOptions: [
      "Daniel Plainview",
      "Max Wallace",
      "Simon Foster",
      "Christian Levington",
    ],
    correctAnswer: "Daniel Plainview",
  },
  {
    nameOfQuestion: "What drugs is Walter White cooking in Breaking Bad ?",
    answerOptions: ["Cocaine", "Anthrax", "Methamphetamines", "Heroine"],
    correctAnswer: "Methamphetamines",
  },
  {
    nameOfQuestion: "What is Michael Scott's position in The Office ? ",
    answerOptions: [
      "CTO",
      "Marketing Manager",
      "HR Manager",
      "Regional Manager",
    ],
    correctAnswer: "Regional Manager",
  },
  {
    nameOfQuestion: "How many FRIENDS are there ? ",
    answerOptions: ["Six", "Ten", "Four", "Seven"],
    correctAnswer: "Six",
  },
  {
    nameOfQuestion: "What is Homer's J. Simpson second name ?",
    answerOptions: ["James", "Jhon", "Jay", "Jules"],
    correctAnswer: "Jay",
  },
  {
    nameOfQuestion: "In Mr Robot, what is Elliot Anderson's profession ?",
    answerOptions: [
      "Cybersecurity Engineer",
      "Software Engineer",
      "UX Designer",
      "Ironhack TA",
    ],
    correctAnswer: "Cybersecurity Engineer",
  },
];

// questionDiv.innerHTML = question1.nameOfQuestion // testing if the question appears in the browser, in the DOM ==> it works

// THIS FUNCTION WILL SHOW A QUESTION
function showQuestion(question) {
  checkIfLast(question); //here I am calling a function that checks if the current question is the last one...

  questionDiv.innerHTML = question.nameOfQuestion; // here I am pushing the array's object value to the HTML to have it as a question
  options.forEach((option, index, arr) => {
    option.innerHTML = question.answerOptions[index]; // here, I am pushing the answer options into the HTML
    option.parentElement.style.pointerEvents = "auto"; //here, I am "reseting" the pointer events so when I see the question, I can click everywhere
    option.classList.remove("right"); //again, reseting the class, because in the previous question, there is a class applied (because someone clicked)
    option.classList.remove("wrong"); //the same that above, I am reseting the class
  });
}

// THIS FUNCTION WILL CHECK IF THE QUESTION IS THE LAST ONE

function checkIfLast(question) {
  if (listOfQuestions.indexOf(question) === listOfQuestions.length - 1) {
    replaceNextButton()
  }

}

// THIS FUNCTION WILL REPLACE THE NEXT BUTTON FOR ANOTHER BUTTON

function replaceNextButton() {
  nextButton.style.visibility = "hidden"
  endButton.style.visibility = "visible"
}

//THIS FUNCTION WILL LET GO TO THE NEXT QUESTION
nextButton.onclick = () => {
  showQuestion(listOfQuestions[(currentQuestionIndex += 1)]);
};

// THIS FUNCTION WILL SHOW WHICH ANSWER IS RIGHT OR WRONG
function rightOrWrong(oneQuestion, option) {
  option.parentElement.style.pointerEvents = "none";
  let selectedAnswer = option.innerHTML;
  if (selectedAnswer === oneQuestion.correctAnswer) {
    option.classList.add("right");
    score++;
    scoreText.innerHTML = `Your score is of ${score} points`
    alert("Correct answer!! Nicely done");
  } else {
    option.classList.add("wrong");
    console.log("incrorrect");
    alert(
      `Nop, wrong answer. The correct answer was ${oneQuestion.correctAnswer} `
    );
  }
}

//THIS ADDS EVENT LISTENER  THAT ENABLES TO CLICK AND SET THE RIGHT OR WRONG IN AN OPTION
options.forEach((option) => {
  option.onclick = () => {
    rightOrWrong(listOfQuestions[currentQuestionIndex], option);
  };
});


//CALLING THE FUNCTIONS TO WORK
showQuestion(listOfQuestions[currentQuestionIndex]);
endButton.style.visibility = "hidden"

//THIS IS A SET TIMEOUT FUNCTION
// setTimeout(() => {
//     currentQuestionIndex++
//     showQuestion(listOfQuestions[currentQuestionIndex]);

// }, 7000);

console.log(listOfQuestions.length)