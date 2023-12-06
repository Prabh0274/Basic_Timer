let isTimerRunning = false;
let timerInterval;
let startTime = 0; // Variable to store the start time



function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        startTime = Date.now() - startTime; // Calculate elapsed time since start
        timerInterval = setInterval(updateClock, 1000); // Update clock every second
    }
}

function stopTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timerInterval);
        // Store the elapsed time when the timer is stopped
        startTime = Date.now() - startTime;
    }
}




// Function to update the clock
function updateClock() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;

    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;


    let clock = document.getElementById("clock").innerHTML = `${minutes}M:${seconds}S`;
}
function reset(){
    clearInterval(timerInterval);
    document.getElementById("clock").innerHTML = "0M:0S";
    isTimerRunning = false;
    startTime = 0;
}







