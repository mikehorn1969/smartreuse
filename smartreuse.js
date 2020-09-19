function secondsleft() {

    var a = new Date(),
    b = new Date("2020 oct 1");
    
    return b - a;

}

function setcountdown() {

    var remaining = document.getElementsByClassName("Countdown");

    remaining.setAttribute('data-remaining-sec', remaining);
    
}