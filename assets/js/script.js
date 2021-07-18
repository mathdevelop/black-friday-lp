$(function() {
  //Particles
  particlesJS.load('particles', 'assets/particles.json');

  //Buttons
  $('.header__button--course').click(function() {
    $('html, body').animate({ scrollTop: $('.course__content').offset().top }, 'slow');
  });

  $('.header__button--buy, .course__button, .countdown__button').click(function() {
    $('html, body').animate({ scrollTop: $('.buy').offset().top }, 'slow');
  });

  //Parallax
  $('.parallax').parallax();

  //Countdown
  const endTime = new Date('Nov 26, 2021 23:59:59').getTime();

  const interval = setInterval(function() {
    const now = new Date().getTime(),
          distance = endTime - now;

    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
          minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
          seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

    $('.countdown__column--days .countdown__amount').text(days);
    $('.countdown__column--hours .countdown__amount').text(hours);
    $('.countdown__column--minutes .countdown__amount').text(minutes);
    $('.countdown__column--seconds .countdown__amount').text(seconds);

    if(distance < 0) {
      clearInterval(interval);
    }
  }, 1000);

  //Buy
  $('.buy__form').submit(function(event) {
    const data = new FormData(event.target);

    localStorage.setItem('customer', JSON.stringify({
      name: data.get('name'),
      email: data.get('email')
    }));

    Swal.fire(
      'Obrigado!',
      'Reserva realizada com sucesso!',
      'success'
    );

    event.preventDefault();
  });
});