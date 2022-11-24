let nailicon = document.getElementById("nailicon");
let plankicon = document.getElementById("plankicon");
let hammericon = document.getElementById("hammericon");
let plankcollected;
let hammercollected;
let nailcollected;
let housebroken = document.getElementById("housebroken");
let housefixed = document.getElementById("housefixed");
let winning = document.getElementById("winning");

window.addEventListener("load", function (){
    readFromSessionStorage();
    if (plankcollected === true) {
        plankicon.style.visibility = "visible";
    }

    if (hammercollected === true){
        hammericon.style.visibility = "visible";
    }

    if (nailcollected === true){
        nailicon.style.visibility = "visible";
    }
});

housebroken.addEventListener("click", function (){
    if (plankcollected === true && hammercollected === true && nailcollected === true) {
        housebroken.style.visibility = "hidden";
        housefixed.style.visibility = "visible";
        winning.style.visibility = "visible";


    }
})


function saveToSessionStorage() {
    sessionStorage.nailcollected = nailcollected;
}

function readFromSessionStorage() {
    plankcollected = sessionStorage.plankcollected === "true";
    hammercollected = sessionStorage.hammercollected === "true";
    nailcollected = sessionStorage.nailcollected === "true";
}
