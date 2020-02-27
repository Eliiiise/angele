
function play(){
    document.querySelectorAll(".music").forEach(function(play) {
        play.addEventListener('click', function (e) {
            stop();
            play.querySelector("audio").play();
            play.querySelector("img:nth-of-type(2)").style.display="block";
            play.querySelector("img:nth-of-type(1)").style.display="none";
        });
    });
};

function stop(){
    document.querySelectorAll("audio").forEach(function(stop){
        stop.pause();
        stop.parentElement.querySelector("img:nth-of-type(1)").style.display="block";
        stop.parentElement.querySelector("img:nth-of-type(2)").style.display="none";
    });
};
