
function select() {
    document.querySelectorAll(".music").forEach(function( music) {
        var x = (music.className.substring(12));

        music.addEventListener("click" , function () {
            var calc= 52*(x-1);
            document.querySelector(".musics span").style.transform="translate(0,"+calc+"px )";
        });
    });
}

