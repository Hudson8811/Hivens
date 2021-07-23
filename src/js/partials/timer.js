$(window).on('load', () => {
  const container = document.querySelector('.__js_timer');

  if (container) {
    let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    let daysSpan = document.querySelector('.timer__column--days span');
    let hoursSpan = document.querySelector('.timer__column--hours span');
    let minSpan = document.querySelector('.timer__column--min span');
    let secSpan = document.querySelector('.timer__column--sec span');


    let x = setInterval(function() {

      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"

      if (daysSpan) {
        daysSpan.textContent = days.toString().padStart(2, '0');
      }

      if (hoursSpan) {
        hoursSpan.textContent = hours.toString().padStart(2, '0');
      }

      if (minSpan) {
        minSpan.textContent = minutes.toString().padStart(2, '0');
      }

      if (secSpan) {
        secSpan.textContent = seconds.toString().padStart(2, '0');
      }



      //document.querySelector('.__js_timer').innerHTML = daysCol + hoursCol + minutesCol + secondsCol;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.querySelector('.__js_timer').innerHTML = "EXPIRED";
      }
    }, 1000);
  }



  // Update the count down every 1 second

});