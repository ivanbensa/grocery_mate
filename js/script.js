////////////////////        LOADING ANIMATION       ////////////////////////////////

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

////////////////////        END OF LOADING ANIMATION       ////////////////////////////////

// UNIVERSAL BOOTSTRAP MODAL

function showModal(title, message) {

    document.getElementById("appModalTitle").innerHTML = title;
    document.getElementById("appModalBody").innerHTML = message;

    const modal = new bootstrap.Modal(
        document.getElementById("appModal")
    );

    modal.show();
}

// END OF UNIVERSAL BOOTSTRAP MODAL