let questionDiv = document.getElementById("questionDiv")
let options = [...document.getElementsByClassName("option")]
let scoreText= document.querySelector(".score") //recupero la div de score, luego voy a ir aumentando el score
let score = 0
let nextButton = document.getElementById("next-question")


let question1 = {
        nameOfQuestion: "Question number 1 ?",
        answerOptions: ["answer A", "answer B", "answer C", "answer D"],
        correctAnswer: "answer D"
    }

let question2 = {
        nameOfQuestion: "Question number 2 ?",
        answerOptions: ["answer A", "answer B", "answer C", "answer D"],
        correctAnswer: "answer B"
    }


// questionDiv.innerHTML = question1.nameOfQuestion // testing if the question appears in the browser, in the DOM ==> it works

// options.forEach((option, index,arr)  => {
//     option.innerHTML = question1.answerOptions[index]
//     option.style.cursor = "pointer"
// })  // ==> mediante este loop, puedo pasar cada opcion de respuesta separadamente en las opciones HTML de respuesta. Ademas, le di un efecto de cursor encima.



function showQuestion(question) {
    questionDiv.innerHTML = question.nameOfQuestion;
    options.forEach((option, index,arr)  => {
    option.innerHTML = question.answerOptions[index]
     rightOrWrong(question)       
})}


function rightOrWrong (question){    
   options.forEach(
     (option, index) =>
       (option.onclick = function () {
         if (option.innerHTML === question.correctAnswer) {
           option.classList.add("right");
           console.log("Correct Answer!")

         } else {
             option.classList.add("wrong")
            //  option.classList.remove("option")
             
         }
       })
   )
       
}


function nextQuestion (question){
    nextButton.onclick = showNewQuestion(question)
}

showQuestion(question1)




