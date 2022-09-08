var startButton = document.querySelector("#start-button");
var quizCard = document.querySelector(".quiz");
var cont = document.querySelector("#Description");
var ans = document.querySelector(".answers");


let questions = [
    {
        question: "What does HTML stand for?",
        choiceA: "HyperText Markup Language",
        choiceB: "Home Text Makeup Language",
        choiceC: "HyperText Markup Link",
        choiceD: "HyperText document folder",
        correct: "A"
    },
    {
        question: "What year was javascript created?",
        choiceA: "2001",
        choiceB: "2010",
        choiceC: "1995",
        choiceD: "1978",
        correct: "C"
    },
    {
        question: "What is css used for?",
        choiceA: "To add elements to webpage",
        choiceB: "To add style to an html file",
        choiceC: "To add functionality to a webpage",
        choiceD: "To add text to a file",
        correct: "B"
    },
    {
        question: "What datatype has quotations around it",
        choiceA: "array",
        choiceB: "object",
        choiceC: "string",
        choiceD: "boolean",
        correct: "C"
    },
    {
        question: "What goes at the end of a function?",
        choiceA: ";",
        choiceB: "()",
        choiceC: ",",
        choiceD: "/",
        correct: "B"
    }
    ];

    function renderQuestions() {
        // create button elements and append them to the list that way theres no empty buttons. 
        var btn = document.createElement("button");
        cont.innerHTML = questions[0].question;
        btn.innerHTML = questions[0].choiceA;
        ans.appendChild(btn);
       
    };

    function startGame() {
        document.getElementById('Description').innerHTML = renderQuestions();
    }

    console.log(questions);

    startButton.addEventListener("click", renderQuestions);

// function winGame() {
//     quizCard.textContent = "Correct";
// }

// function loseGame() {
//     quizCard.textContent = "Incorrect";
// }

// function startTimer() {
//     timer = setInterval(function() {
//         timerCount--;
//         timerElement.textContent = timerCount;
//         if (timerCount >= 0) {

//         }
//     })
// }
