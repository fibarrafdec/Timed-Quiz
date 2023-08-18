let questionEl = document.getElementById("question");
let answerEl = document.getElementById("main-buttons");
let nextEl = document.getElementById("buttonNext");

let questionBox = [
    {
    question: "What is the world's most popular programming language?",
    answers: [
        { text: "HTML", correct: false},
        { text: "CSS", correct: false},
        { text: "JavaScript", correct: true},
    ]
    },
    
    {
    question: "2 What is the world's most popular programming language?",
    answers: [
        { text: "HTML", correct: false},
        { text: "CSS", correct: false},
        { text: "JavaScript", correct: true},
    ]
    },
    
    {
    question: "3 What is the world's most popular programming language?",
    answers: [
        { text: "HTML", correct: false},
        { text: "CSS", correct: false},
        { text: "JavaScript", correct: true},
    ]
    },

    {
    question: "4 What is the world's most popular programming language?",
    answers: [
        { text: "HTML", correct: false},
        { text: "CSS", correct: false},
        { text: "JavaScript", correct: true},
    ]
    },

    {
    question: "5 What is the world's most popular programming language?",
    answers: [
        { text: "HTML", correct: false},
        { text: "CSS", correct: false},
        { text: "JavaScript", correct: true},
    ]
    },
];

let currentQtnIndex = 0;
let score = 0;

function startQuiz(){
    currentQtnIndex = 0;
    score = 0;
    nextEl.innerHTML = "Next";
    showQtn();
}

function showQtn(){
    resetState();
    let currentQtn = questionBox[currentQtnIndex];
    let questionNumber = currentQtnIndex + 1;
    questionEl.innerHTML = questionNumber + ". " + currentQtn.question;

    currentQtn.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerEl.appendChild(button);
    })
}

function resetState(){
    nextEl.style.display = "none";
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild);
    }
}

startQuiz();




