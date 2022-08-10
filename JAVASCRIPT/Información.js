let slides = document.querySelectorAll(".slide-ana>div");
let slideSayisi = slides.length;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
for (let Información = 0; Información < slides.length; Información++) {
    const element = slides[Información];
    element.style.transform = "translateX(" + 100 * Información + "%)";
}
let loop = 0 + 1000 * slideSayisi;

function goNext() {
    loop++;
    for (let Información = 0; Información < slides.length; Información++) {
    const element = slides[Información];
    element.style.transform = "translateX(" + 100 * (Información - (loop % slideSayisi)) + "%)";
    }
}

function goPrev() {
    loop--;
    for (let Información = 0; Información < slides.length; Información++) {
    const element = slides[Información];
    element.style.transform = "translateX(" + 100 * (Información - (loop % slideSayisi)) + "%)";
    }
}

function openView() {
    document.getElementById("viewerButton").classList.add("hidden");
    document.getElementById("viewerBox").classList.remove("hidden");
}
function closeView() {
    document.getElementById("viewerBox").classList.add("hidden");
    document.getElementById("viewerButton").classList.remove("hidden");
}