var startButton = document.querySelector("#start-button");
var cont = document.querySelector(".question");
var choice1 = document.querySelector(".choice1");
var choice2 = document.querySelector(".choice2");
var choice3 = document.querySelector(".choice3");
var choice4 = document.querySelector(".choice4");
var button = document.querySelectorAll("button");



let questions = [
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "Home Text Markup Language", "HyperText Markup Link", "HyperText Document folder"],
        correct: 1
    },
    {
        question: "What year was javascript created?",
        choices: ["2001", "2010", "1995", "1978"],
        correct: 3
    },
    {
        question: "What is css used for?",
        choices: ["To add elements to webpage", "To add style to an html file", "To add functionality to a webpage", "To add text to a file"],
        correct: 2
    },
    {
        question: "What datatype has quotations around it",
        choices: ["array", "object", "string", "boolean"],
        correct: 3
    },
    {
        question: "What goes at the end of a function?",
        choices: [";", "()", ",", "/",],
        correct: 2
    }
    ];

    // function Answer() {
    //     for (let i = 0; i < questions.choices.length; i++) {
    //         if (questions.question);
    //     }
    // };

    function renderQuestions() {
        // create button elements and append them to the list that way theres no empty buttons. 
        cont.innerHTML = questions[0].question;
        choice1.removeAttribute("hidden");
        choice2.removeAttribute("hidden");
        choice3.removeAttribute("hidden");
        choice4.removeAttribute("hidden");
        choice1.innerHTML = questions[0].choices[0];
        choice2.innerHTML = questions[0].choices[1];
        choice3.innerHTML = questions[0].choices[2];
        choice4.innerHTML = questions[0].choices[3];

    };



    // for (let i = 0; i < questions.length; i++) {
    //     cont.innerHTML += questions[i].question
    //     console.log(cont);
    // }

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
