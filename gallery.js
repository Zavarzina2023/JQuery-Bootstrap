$('.small__card a').on('click', function(e) {
  if ($('.big__card img').attr('src') !== $(this).attr('href')) {
    $('.big__card img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
  };
  e.preventDefault();
});

$('.button__circle').on('click', function() {
  // Сначала выполни анимацию открытия галереи
  $('.gallery__card').slideToggle(500, function() {
    // После завершения анимации выполним прокрутку страницы
    if ($('.button__circle').text() === '+') {
      $('.button__circle').text('-');
      // Прокручиваем страницу к нижней грани галереи
      $('html, body').animate({
        scrollTop: $('.gallery__card').offset().top + $('.gallery__card').height()
      }, 0);
    } else {
      $('.button__circle').text('+');
      // Прокручиваем страницу в начало
      $('html, body').animate({
        scrollTop: 0
      }, 0);
    }
  });
});

$('.small__card a img').on('click', function() {
  $('.small__card a img').fadeTo(0, 1);
  $(this).fadeTo(0, 0.4);
});