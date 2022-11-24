let nailclickclick = document.getElementById("nailclick");
let plankicon = document.getElementById("plankicon");
let hammericon = document.getElementById("hammericon");
let plankcollected;
let hammercollected;
let nailcollected;
let randomnumber;
let button = document.getElementById("button");
let counter = document.getElementById("counter");

window.addEventListener("load", function (){
    readFromSessionStorage();
    if (plankcollected === true) {
        plankicon.style.visibility = "visible";
    } else if (plankcollected === false) {
        plankicon.style.visibility = "hidden";
    }

    if (hammercollected === true){
        hammericon.style.visibility = "visible";
    }

    if (nailcollected === true){
        nailicon.style.visibility = "visible";
        nailclick.style.visibility = "hidden";
    }
});



function saveToSessionStorage() {
    sessionStorage.nailcollected = nailcollected;
}

function readFromSessionStorage() {
    plankcollected = sessionStorage.plankcollected === "true";
    hammercollected = sessionStorage.hammercollected === "true";
    nailcollected = sessionStorage.nailcollected === "true";
}


button.addEventListener("click", function() {
randomnumber = Math.floor(Math.random() * 9);
counter.innerHTML = randomnumber;

if (randomnumber === 5) {
    nailicon.style.visibility = "visible";
    nailclick.style.visibility = "hidden";
    nailcollected = true;
    saveToSessionStorage();
}
});