let hammerclick = document.getElementById("hammerclick");
let plankicon = document.getElementById("plankicon");
let hammericon = document.getElementById("hammericon");
let nailicon = document.getElementById("nailicon");
let plankcollected;
let hammercollected;
let nailcollected;

window.addEventListener("load", function (){
    readFromSessionStorage();
    if (plankcollected === true) {
        plankicon.style.visibility = "visible";
    }

    if (hammercollected === true){
        hammericon.style.visibility = "visible";
        hammerclick.style.visibility = "hidden";
    }
    if (nailcollected === true) {
        nailicon.style.visibility = "visible";
    }
});

function saveToSessionStorage() {
    sessionStorage.hammercollected = hammercollected;
}

function readFromSessionStorage() {
    plankcollected = sessionStorage.plankcollected === "true";
    hammercollected = sessionStorage.hammercollected === "true";
    nailcollected = sessionStorage.nailcollected === "true";
}

hammerclick.addEventListener("click", function(){
    hammericon.style.visibility = "visible";
    hammerclick.style.visibility = "hidden";
    hammercollected = true;
    saveToSessionStorage();
})