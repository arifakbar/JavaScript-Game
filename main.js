var ball = document.querySelector('#ball');
var bottom = document.querySelector('#bottom');
var hitValue = document.querySelector('#hitValue');
var scoreValue = document.querySelector('#scoreValue');
var timeValue = document.querySelector('#timeValue');
var clickedValue;
var pointScored = 0;
var timeLeft = 60;
var toHitValue;
var correctHit = 0;
var incorrcectHit = 0;

function displayChange() {
    for (var i = 0; i < 112; i++) {
        bottom.innerHTML += ` <div id="ball">${Math.floor(Math.random() * 10)}</div> `;
    }
};


bottom.addEventListener('click', function (display) {
    clickedValue = Number(display.target.innerText);
    console.log(clickedValue);
    if (clickedValue === toHitValue) {
        points();
        bottom.innerHTML = "";
        displayChange();
        hitChange();
        correctHit++;
    }
    else{
        incorrcectHit++;
    }
});


function hitChange() {
    toHitValue = Math.floor(Math.random() * 10);
    hitValue.textContent = toHitValue;
}

function points() {
    pointScored += 10;
    scoreValue.textContent = pointScored;
}

setInterval(function () {
    if (timeLeft > 0) { 
        timeLeft -= 1;
        timeValue.textContent = timeLeft;
    }
    else{
        bottom.innerHTML = `<div id="Over">Game Over <br> <br>
                            Your Score is: ${pointScored} <br> <br>
                            Correct Hits were: ${correctHit} <br> <br>
                            Incorrct Hits were: ${incorrcectHit} 
                            </div>`;
    }
}, 1000);


displayChange();
hitChange();