
    var countDownDate = new Date("Oct 1, 2020 10:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
    


function secondsleft() {

    var a = new Date(),
    b = new Date("2020 oct 1");
    
    return b - a;

}

function setcountdown() {

/*    var remaining = document.getElementsByClassName("Countdown");*/
    var remaining = document.getElementById("timeremaining");

    remaining.setAttribute('data-remaining-sec', secondsleft);
    
}



