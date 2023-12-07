let isTimerRunning = false;
let timerInterval;
let startTime = 0; // Variable to store the start time
let isbuttonpressed = false;


function startTimer() {
    if (!isTimerRunning) {
        isTimerRunning = true;
        startTime = Date.now(); // Calculate elapsed time since start
        timerInterval = setInterval(updateClock, 1000); // Update clock every second
    }
}

function darkmode(){
    if(!isbuttonpressed){
        document.body.style.backgroundColor = "gray";
        document.getElementById("h1").style.color = "white";
        document.getElementById("clock").style.color = "white";
        document.getElementById("darkmodebutton").style.backgroundColor = "gray";
        document.getElementById("start").style.backgroundColor = "white";
        document.getElementById("reset").style.backgroundColor = "white";
        document.getElementById("stop").style.backgroundColor = "white";
       



        document.getElementsByClassName("buttons").item(0).style.backgroundColor = "gray";
        isbuttonpressed = true;}
    else if(isbuttonpressed){
        document.body.style.backgroundColor = "white";
        document.getElementById("h1").style.color = "black";
        document.getElementById("clock").style.color = "black";
        document.getElementById("darkmodebutton").style.backgroundColor = "white";
        document.getElementsByClassName("buttons").item(0).style.backgroundColor = "white";
        isbuttonpressed = false;}        
}



// Function to update the clock


function updateClock() {
    let currentTime = new Date().getTime();
    var elapsedTime = currentTime - startTime;

    let seconds = Math.floor(elapsedTime / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;


    var clock = document.getElementById("clock").innerHTML = `${minutes}M:${seconds}S`;

    return  elapsedTime;

    
}
function stopTimer(){
    clearInterval(timerInterval);
    let stoptime = Date.now();
}





function reset(){
    clearInterval(timerInterval);
    document.getElementById("clock").innerHTML = "0M:0S";
    isTimerRunning = false;
    startTime = 0;
    timerInterval = 0;
    addEventListener("click", startTimer);
}







