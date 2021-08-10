$(window).on('load', () => {
  const container = document.querySelector('.__js_timer');

  if (container) {
    const endDate = container.dataset.endDate;
    let countDownDate = new Date(endDate).getTime();
    let daysSpan = document.querySelector('.timer__column--days span');
    let hoursSpan = document.querySelector('.timer__column--hours span');
    let minSpan = document.querySelector('.timer__column--min span');
    let secSpan = document.querySelector('.timer__column--sec span');

    let x = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

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

      if (distance < 0) {
        clearInterval(x);
        container.innerHTML = '<div class="timer__expired">' + container.dataset.expiredText + '</div>';
      }
    }, 1000);
  }
});