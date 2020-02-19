
document.querySelector(".part1").addEventListener("click" , function () {
    document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 10px - 135px)";
    document.querySelector(".part1 path").style.fill="#4656EA";
    document.querySelector(".part2 path").style.fill="#ffffff";
    document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
    document.querySelector(".part3 path").style.fill="#ffffff";
});

document.querySelector(".part2").addEventListener("click" , function () {
    document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 10px)";
    document.querySelector(".part2 path").style.fill="#4656EA";
    document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#ffffff";
    document.querySelector(".part1 path").style.fill="#ffffff";
    document.querySelector(".part3 path").style.fill="#ffffff";
});

document.querySelector(".part3").addEventListener("click" , function () {
    document.querySelector(".selector").style.top="calc(50vh - 20px - 25px - 10px + 135px)";
    document.querySelector(".part3 path").style.fill="#4656EA";
    document.querySelector(".part3 g:nth-of-type(2) path").style.fill="#4656ea";
    document.querySelector(".part2 path").style.fill="#ffffff";
    document.querySelector(".part1 path").style.fill="#ffffff";
});
