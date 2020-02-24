
document.querySelector(".part1").addEventListener("click" , function () {
    document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 10px - 135px)";
    document.querySelector(".part1 path").style.fill="#4656EA";
    document.querySelector(".part2 path").style.fill="#ffffff";
    document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
    document.querySelector(".part3 path").style.fill="#ffffff";
    document.querySelector(".part4 path").style.fill="#ffffff";
});

document.querySelector(".part2").addEventListener("click" , function () {
    document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 55px)";
    document.querySelector(".part2 path").style.fill="#4656EA";
    document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
    document.querySelector(".part1 path").style.fill="#ffffff";
    document.querySelector(".part3 path").style.fill="#ffffff";
    document.querySelector(".part4 path").style.fill="#ffffff";
});

document.querySelector(".part3").addEventListener("click" , function () {
    document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 10px + 131px)";
    document.querySelector(".part3 path").style.fill="#4656EA";
    document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#4656ea";
    document.querySelector(".part2 path").style.fill="#ffffff";
    document.querySelector(".part1 path").style.fill="#ffffff";
    document.querySelector(".part4 path").style.fill="#ffffff";
});

document.querySelector(".part4").addEventListener("click" , function () {
    document.querySelector(".selector").style.top="calc(50vh - 13px)";
    document.querySelector(".part2 path").style.fill="#ffffff";
    document.querySelector(".part1 path").style.fill="#ffffff";
    document.querySelector(".part3 path").style.fill="#ffffff";
    document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
    document.querySelector(".part4 path").style.fill="#4656EA";
    document.querySelector(".part4 g:nth-of-type(2) path").style.fill="#4656ea";
});


//smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});



