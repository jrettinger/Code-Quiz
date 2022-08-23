// Questions & Answers
var questions = [
    {
        title: "Which of the following methods can be used to display data in some form using Javascript?",
        choices: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        answer: "All of the above"
    },

    {
    title: "How can a datatype be declared to be a constant type?",
    choices: ["const", "var", "let", "constant"],
    answer: "const"
    },

    {
    title: "JavaScript is a(n) _______ language?",
    choices: ["Object-Oriented", "Object-Based", "Procedural", "Foreign"],
    answer: "Object-Oriented"
    },

    {
    title: "Which built-in method returns the calling string value converted to lower case?",
    choices: ["toLowercase()", "toLower()", "Lowercase()", "None of the above"],
    answer: "toLowercase()"
    },
   
    {
    title: "Commonly used data types do not inlcude:",
    choices: ["booleans", "alerts", "strings", "numbers"],
    answer: "alerts"
    }];

    // Elements
    var questionsEl = document.querySelector("#questions");
    var optionsEl = document.querySelector("#choices");
    var timerEl = document.querySelector("#timer");
    var submitBtn = document.querySelector("#submit-score");
    var startBtn = document.querySelector("#start");
    var initialsEl = document.querySelector("#initials");
    var reStartBtn = document.querySelector("#restart"); 

// Quiz State
var currentQuestionIndex = 0;
var time = questions.length * 20;
var timerId;

function quizStart() {
    // Hides Landing Page
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");

    // Question Reveal
    questionsEl.removeAttribute("class");

    // Timer Starts
    timerId = setInterval(clockTick, 1000);

    // Shows Time
    timerEl.textContent = timer;

    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-words")
    titleEl.textContent = currentQuestion.title;
    optionsEl.innerHTML = "";

}