let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let progressInterval;

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(song.paused){
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        startProgressInterval();
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        clearInterval(progressInterval);
    }
}

function startProgressInterval() {
    progressInterval = setInterval(()=>{
        progress.value = song.currentTime;
    }, 500);
}

progress.oninput = function(){
    song.currentTime = progress.value;
}

song.onended = function() {
    clearInterval(progressInterval);
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}