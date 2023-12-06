// Initialize variables
let timer;
let startTime;

// Function to start the timer
function startTimer() {
    startTime = new Date().getTime();
    timer = setInterval(updateClock, 1000);
}

// Function to stop the timer


// Function to update the clock
function updateClock() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;

    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;


    let clock = document.getElementById("clock").innerHTML = `${minutes}M:${seconds}S`;

    
    
    
}
function stopTimer(updateClock) {
    clearInterval(timer);
    }

function reset(myfunctioncallback) {
    document.getElementById("clock").innerHTML = "0M:0S";
    clearInterval(timer);
}


