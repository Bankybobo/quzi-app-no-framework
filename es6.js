var containerFluid = document.getElementById('container-fluid')
var container = document.getElementById('container')
var question = document.getElementById('question')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var next = document.getElementById('nextButton')
var start = document.getElementById('start')
var result = document.getElementById('result')
var playAgain = document.getElementById('playAgain')
var time = document.getElementById('time')
var seconds = document.getElementById('seconds')
var count = 0;
var score = 0;
var totQuestions = questions.length;


start.addEventListener('click', loadQuestion);
function loadQuestion () {
    var timer = 10;
    var seco = 1
    setInterval(function(){
        time.style.width = `${timer = timer + 10}px`;
        seconds.innerHTML = seco++

        if (timer === 410) {
            container.style.display = "none";
            result.style.display = 'block'
            result.innerHTML += `Your score is: ${score} <br> <button id="playAgain" onclick="location.reload()" class="btn">Play Again</button>`;
            return;
        }
    }, 1000)
    containerFluid.style.display = "none";
    container.style.display = "block";
    question.textContent = `${count+1}. ${questions[count].question}`
    option1.textContent = questions[count].option1;
    option2.textContent = questions[count].option2;
    option3.textContent = questions[count].option3;
    option4.textContent = questions[count].option4;
}

next.addEventListener('click', loadNextQuestion)
function loadNextQuestion () {
    var yourChoice = document.querySelector('input[type=radio]:checked')
    if(yourChoice === null){
    window.alert('you have not selected an answer yet')
    return;
    }

    if(yourChoice.value === questions[count].answer){
        score++;
    }
    yourChoice.checked = false
    if (count == totQuestions - 2)
    next.innerHTML = 'Finish';

    if (count == totQuestions - 1){
    container.style.display = "none";
    result.style.display = 'block'
    result.innerHTML += `Your score is: ${score} <br> <button id="playAgain" onclick="location.reload()" class="btn">Play Again</button>`;
    return;
    }
    count++;
    question.textContent = `${count+1}. ${questions[count].question}`
    option1.textContent = questions[count].option1
    option2.textContent = questions[count].option2
    option3.textContent = questions[count].option3
    option4.textContent = questions[count].option4
}

