let load = 0;

const loadingText = document.getElementById("loadingText");
const loadingScreen = document.getElementById("loadingScreen");

const interval = setInterval(function(){
    load++;
    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = 1 - load / 160;


    if(load >= 100){
        clearInterval(interval);
        loadingScreen.style.opacity = "0";
        setTimeout(function(){
            loadingScreen.remove();
        }, 1000);
    }
}, 25);