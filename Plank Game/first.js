let plankclick = document.getElementById("plankclick");
let plankicon = document.getElementById("plankicon");
let plankcollected;
let hammercollected;
let nailcollected;
let nailicon = document.getElementById("nailicon");
let hammericon = document.getElementById("hammericon");

window.addEventListener("load", function (){
    readFromSessionStorage();
    if (plankcollected === true) {
        plankicon.style.visibility = "visible";
        plankclick.style.visibility = "hidden";
       
    }

    if (hammercollected === true) {
        hammericon.style.visibility = "visible";
    }

    if (nailcollected === true) {
        nailicon.style.visibility = "visible";
    }
});

function saveToSessionStorage() {
    sessionStorage.plankcollected = plankcollected;
}

function readFromSessionStorage() {
    plankcollected = sessionStorage.plankcollected === "true";
    hammercollected = sessionStorage.hammercollected === "true";
    nailcollected = sessionStorage.nailcollected === "true";
}

plankclick.addEventListener("click", function(){
    plankicon.style.visibility = "visible";
    plankclick.style.visibility = "hidden";
    plankcollected = true;
    saveToSessionStorage();
})