
function play(){
    document.querySelectorAll(".play").forEach(function( play) {
        play.addEventListener('click', function (e) {
            play.parentElement.parentElement.querySelector("audio").play();
            play.parentElement.querySelector("img:nth-of-type(2)").style.display="block";
            play.parentElement.querySelector("img:nth-of-type(1)").style.display="none";
        });
    });
}

function stop() {
    document.querySelectorAll(".stop").forEach(function( stop) {
        stop.addEventListener('click', function (e) {
            stop.parentElement.parentElement.querySelector("audio").pause();
            stop.parentElement.querySelector("img:nth-of-type(2)").style.display="none";
            stop.parentElement.querySelector("img:nth-of-type(1)").style.display="block";
        });
    });
}

