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
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextEl.style.display = "block";
    while(answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild);
    }
}

function selectAnswer(event) {
    let selectedbutton = event.target;
    let isCorrect = selectedbutton.dataset.correct === "true";
    if(isCorrect) {
        selectedbutton.classList.add("correct");
        score++;
    }
    else {
        selectedbutton.classList.add("incorrect");
    }
    questionBox.from(answerEl.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextEl.style.display = "block";
}

function showScore(){
    resetState();
    questionEl.innerHTML = "Score: " + [score] + "/" + "5.";
    nextEl.innerHTML = "Play again"
    nextEl.style.display = "block";
}

function manageNextButton(){
    currentQtnIndex++;
    if(currentQtnIndex < questionBox.length){
        showQtn();
    }
    else {
        showScore();
    }
}

nextEl.addEventListener("click", ()=>{
    if(currentQtnIndex < questionBox.length){
        manageNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();



