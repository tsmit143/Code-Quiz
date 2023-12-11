//Timer
var timerEl = document.getElementById('timer');
var startButton = document.getElementById('start-quiz');
var startSection = document.getElementById('start-section');
var askQuestionEl = document.getElementById('ask-question');
var answerChoicesEl = document.getElementById('answer-choices');
var questionScoreEl = document.getElementById('question-score');

var index = 0;
var timeLeft = 59;
var questions = [
    {
        question: "Commonly used data types DO NOT include: ?",
        choices: ["1.Strings","2.Booleans","3.Alerts","4.Numbers"],
        answer:"3.Alerts"
    },
    {
        question: "The conditon in an if/else statement is enclosed with_____.",
        choices: ["1.Quotes","2.Curly Brackets","3.Parenthesis","4.Square Brackets"],
        answer:"2.Curly Brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["1.Numbers and Strings","2.Other Arrays","3.Booleans","4.All the Above"],
        answer:"4.All the Above"
    },
]
function nextQuestion(currentIndex){
    askQuestionEl.textContent = questions[currentIndex].question;
    //show all answers
    //store correct answer as data attribute
};

//timeLeft=timeLeft-10 (create function to do this)
function countdown(){
    var timeInterval = setInterval(function(){
        if (timeLeft > 1){
            timerEl.textContent = timeLeft;
            timeLeft--;
        }else{
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}


function startQuiz(){
    countdown();
    //asks the first question
    nextQuestion(index);
    //hide start text
    startSection.style.display = "none";
}
startButton.addEventListener("click",startQuiz);