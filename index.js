let questionDiv = document.getElementById("questionDiv")
let options = [...document.getElementsByClassName("option")]
let score = document.querySelector(".score") //recupero la div de score, luego voy a ir aumentando el score


var question1 = {
        nameOfQuestion: "Question number 1 ?",
        answerOptions: ["answer A", "answer B", "answer C", "answer D"],
        correctAnswer: 0
    }

var question2 = {
        nameOfQuestion: "Question number 2 ?",
        answerOptions: ["answer A", "answer B", "answer C", "answer D"],
        correctAnswer: 2
    }


// questionDiv.innerHTML = question1.nameOfQuestion // testing if the question appears in the browser, in the DOM ==> it works

// options.forEach((option, index,arr)  => {
//     option.innerHTML = question1.answerOptions[index]
//     option.style.cursor = "pointer"
// })  // ==> mediante este loop, puedo pasar cada opcion de respuesta separadamente en las opciones HTML de respuesta. Ademas, le di un efecto de cursor encima.



function showNewQuestion(question) {
    questionDiv.innerHTML = question.nameOfQuestion;

    options.forEach((option, index,arr)  => {
    option.innerHTML = question.answerOptions[index]
    option.style.cursor = "pointer"
})
}

function rightOrWrong (){}

function nextQuestion (){}







