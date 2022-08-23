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
    var feedbackEl = document.querySelector ("#feedback");

// Quiz State
var currentQuestionIndex = 0;
var time = 100;
var timerId;

function quizStart() {
    // Hide Landing Page
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");

    // Question Reveal
    questionsEl.removeAttribute("class");

    // Starts Timer
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
    currentQuestion.options.forEach(function(choice, i) {
        // New Button for Choices
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
    
        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = questionClick;

        optionsEl.appendChild(choiceNode);
    });
}

    function questionClick() {
        // Checks for Incorrect Answer
        if (this.value !== questions[currentQuestionIndex].answer) {
          // Subtract 10 seconds
          time -= 10;

}
if (time < 0) {
    time = 0;
    
}
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
        feedbackEl.style.color = "red";
        feedbackEl.style.fontSize = "200%";
        } 

    else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        feedbackEl.style.fontSize = "200%";
}

// Advise if Right or Wrong Answer

feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
  feedbackEl.setAttribute("class", "feedback hide");
}, 1250);

// next question
currentQuestionIndex++;

    // Check how much time is remaining
    if (currentQuestionIndex === 0) {
        quizEnd();
      } else {
        getQuestion();
      }
  
    function quizEnd() {
        // Stops Timer
        clearInterval(timerId);
      
        // Show Final Score
        var endScreenEl = document.getElementById("quiz-end");
        endScreenEl.removeAttribute("class");
      
        // Show Final Score
        var finalScoreEl = document.getElementById("score-final");
        finalScoreEl.textContent = time;
      
        // Hide Questions
        questionsEl.setAttribute("class", "hide");
    }
    function saveHighscore() {
        // Gets Initials
        var initials = initialsEl.value.trim();
      
        if (initials !== "") {
          // Gets Saved Score If There Are Any Scores
          var highscores =
            JSON.parse(window.localStorage.getItem("highscores")) || [];
      
          // Formats New Score
          var newScore = {
            score: time,
            initials: initials
          };
      
          // Saves to Local Storage
          highscores.push(newScore);
          window.localStorage.setItem("highscores", JSON.stringify(highscores));
        }
    }

    function checkForEnter(event) {
        if (event.key === "Enter") {
            saveHighscore();
        }
    }
    
    // Submit Button Listener
    submitBtn.onclick = saveHighscore;
    
    // Start Event Listener
    startBtn.onclick = quizStart;
    