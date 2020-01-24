$(function() {
  $('.li.sign__main').click(function() {
    $('.fortunes__modal__wrapper').fadeIn();
    
    var arr = [],
        showNum = $('.ul.fortunes__modal__wrapper--close__text__1').data('show');
    $('.ul.fortunes__modal__wrapper--close__text__1 .limit').each(function() {
      arr.push($(this).html());
    });
    arr.sort(function() {
      return Math.random() - Math.random();
    });
    $('.ul.fortunes__modal__wrapper--close__text__1').empty();
    for(i=0; i < showNum; i++) {
      $('.ul.fortunes__modal__wrapper--close__text__1').append('<li class=limit style= "margin: 0 auto; list-style: none; font-size: 30px; color: #222222">' + arr[i] + '</li>');
    }

    var arr = [],
        showNum = $('.ul.fortunes__modal__wrapper--close__text__2').data('show');
    $('.ul.fortunes__modal__wrapper--close__text__2 .situation').each(function() {
      arr.push($(this).html());
    });
    arr.sort(function() {
      return Math.random() - Math.random();
    });
    $('.ul.fortunes__modal__wrapper--close__text__2').empty();
    for(i=0; i < showNum; i++) {
      $('.ul.fortunes__modal__wrapper--close__text__2').append('<li class=situation style= "margin: 0 auto; list-style: none; font-size: 30px; color: #222222">' + arr[i] + '</li>');
    }

    var arr = [],
        showNum = $('.ul.fortunes__modal__wrapper--close__text__3').data('show');
    $('.ul.fortunes__modal__wrapper--close__text__3 .result').each(function() {
      arr.push($(this).html());
    });
    arr.sort(function() {
      return Math.random() - Math.random();
    });
    $('.ul.fortunes__modal__wrapper--close__text__3').empty();
    for(i=0; i < showNum; i++) {
      $('.ul.fortunes__modal__wrapper--close__text__3').append('<li class=result style= "margin: 0 auto; list-style: none; font-size: 30px; color: #222222">' + arr[i] + '</li>');
    }
  });
  
  $('.fortune__close__icon').click(function() {
    $('.fortunes__modal__wrapper').fadeOut();
    setTimeout(function(){
      window.location.href = '/';
    }, 300);
  });
});