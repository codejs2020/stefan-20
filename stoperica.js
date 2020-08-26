let miliseconds = 0;
let seconds = 0;
let minutes = 0;

function stopwatch(){
    ++miliseconds;

    if (miliseconds == 100){
        miliseconds = 0;
        ++seconds;

        if (seconds == 60){
            seconds = 0;
            ++minutes;
        }
    }

    document.getElementById('stoperica').innerHTML = minutes + ' : ' + seconds + ' : ' + miliseconds;
}

function start(){
    setInterval(stopwatch, 10);
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('pause').removeEventListener('click', start);