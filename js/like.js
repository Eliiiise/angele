
function like(){
    document.querySelectorAll(".like").forEach(function(heart) {
        heart.addEventListener('click', function (e) {
            var x = heart.querySelector("img:nth-of-type(2)").style.opacity;
            if (x==0){
                heart.querySelector("img:nth-of-type(2)").style.opacity=1;
            }
            else {
                heart.querySelector("img:nth-of-type(2)").style.opacity=0;
            }
        });
    });
}

