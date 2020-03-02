
//smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});


//Fill d'ariane


window.onscroll = function() {
    if (window.innerWidth<700){
        myFunctionResp();
    }
    else {
        myFunction()
    }
};

function myFunction() {
    if (window.scrollY<document.querySelector('header').offsetHeight/2){
        document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 10px - 135px)";
        document.querySelector(".part1 path").style.fill="#4656EA";
        document.querySelector(".part2 path").style.fill="#ffffff";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
        document.querySelector(".part3 path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#ffffff";
    }
    else if (window.scrollY<document.querySelector('header').offsetHeight+document.querySelector('#story').offsetHeight-document.querySelector('header').offsetHeight/2){
        document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 55px)";
        document.querySelector(".part2 path").style.fill="#4656EA";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
        document.querySelector(".part1 path").style.fill="#ffffff";
        document.querySelector(".part3 path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#ffffff";
    }
    else if (window.scrollY<document.querySelector('header').offsetHeight+document.querySelector('#story').offsetHeight+document.querySelector('#player-container').offsetHeight-document.querySelector('header').offsetHeight/2){
        document.querySelector(".selector").style.top="calc(50vh - 13px)";
        document.querySelector(".part2 path").style.fill="#ffffff";
        document.querySelector(".part1 path").style.fill="#ffffff";
        document.querySelector(".part3 path").style.fill="#ffffff";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#4656EA";
    }
    else {
        document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 10px + 131px)";
        document.querySelector(".part3 path").style.fill="#4656EA";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#4656ea";
        document.querySelector(".part2 path").style.fill="#ffffff";
        document.querySelector(".part1 path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#ffffff";
    }
}

function myFunctionResp() {
    if (window.scrollY<document.querySelector('header').offsetHeight/2){
        document.querySelector(".selector").style.left="calc(10% - 25px + 15px)";
        document.querySelector(".part1 path").style.fill="#4656EA";
        document.querySelector(".part2 path").style.fill="#ffffff";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
        document.querySelector(".part3 path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#ffffff";
    }
    else if (window.scrollY<document.querySelector('header').offsetHeight+document.querySelector('#story').offsetHeight-document.querySelector('header').offsetHeight/2){
        document.querySelector(".selector").style.left="calc((80% / 3) + 10% - 25px + 7px)";
        document.querySelector(".part2 path").style.fill="#4656EA";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
        document.querySelector(".part1 path").style.fill="#ffffff";
        document.querySelector(".part3 path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#ffffff";
    }
    else if (window.scrollY<document.querySelector('header').offsetHeight+document.querySelector('#story').offsetHeight+document.querySelector('#player-container').offsetHeight-document.querySelector('header').offsetHeight/2){
        document.querySelector(".selector").style.left="calc((80% / 3) * 2 + 10% - 25px - 7px)";
        document.querySelector(".part2 path").style.fill="#ffffff";
        document.querySelector(".part1 path").style.fill="#ffffff";
        document.querySelector(".part3 path").style.fill="#ffffff";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#4656EA";
    }
    else {
        document.querySelector(".selector").style.left="calc(90% - 25px - 15px )";
        document.querySelector(".part3 path").style.fill="#4656EA";
        document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#4656ea";
        document.querySelector(".part2 path").style.fill="#ffffff";
        document.querySelector(".part1 path").style.fill="#ffffff";
        document.querySelector(".part4 path").style.fill="#ffffff";
    }
}





