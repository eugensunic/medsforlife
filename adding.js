(function() {
  let shown = true;
  let shown_2 = true;
  let font_size = 17;

  for (let i = 0; i < document.getElementsByClassName('increment_number').length; i++) {
    document.getElementsByClassName('increment_number')[i].innerHTML = i + 1 + '. ';
  }

  $('#toadd').show();

  $('#drugs_header').click(function() {
    document.querySelector('#drug_heading').scrollIntoView();
  });
  $('#condition_header').click(function() {
    document.querySelector('#condition_heading').scrollIntoView();
  });
  $('#sides_header').click(function() {
    document.querySelector('#sides_heading').scrollIntoView();
  });
  $('#general_header').click(function() {
    document.querySelector('#general_heading').scrollIntoView();
  });
  $('#lifestyle_header').click(function() {
    document.querySelector('#lifestyle_heading').scrollIntoView();
  });
  $('#other_header').click(function() {
    document.querySelector('#other_heading').scrollIntoView();
  });
  $('#procedures_header').click(function() {
    document.querySelector('#procedure_heading').scrollIntoView();
  });
  $('#statistic_header').click(function() {
    window.scrollTo(0, document.body.scrollHeight);
  });

  $('#hide_show').click(function() {
    shown = !shown;
    $('.panel-body').toggle();
    if (!shown) {
      $('#hide_show').text('show');
      $('#hide_show').css('padding-bottom', '4px');
      $('#hide_show').css('width', '40px');
    } else {
      $('#hide_show').text('hide');
      $('#hide_show').css('padding-bottom', '0px');
      $('#hide_show').css('width', '34px');
    }
  });

  $('#hide_show_second').click(function() {
    shown_2 = !shown_2;
    if (shown_2) {
      $('.opinion,.knowledge,.interesting').show();
      $(this).text('hide');
      $(this).css('width', '34px');
    } else {
      $('.opinion,.knowledge,.interesting').hide();
      $(this).text('show');
      $(this).css('width', '40px');
    }
  });

  $('#default_font').click(function() {
    font_size = 17;
    $('.card-block').css('font-size', '17px');
    $('table p').css('font-size', '17px');
  });

  $('#increase').click(function() {
    if (font_size <= 25) {
      font_size = font_size + 1;
      let stringit = font_size + 'px';
      $('.card-block').css('font-size', stringit);
      $('table p').css('font-size', stringit);
    }
  });

  $('#decrease').click(function() {
    if (font_size >= 14) {
      font_size = font_size - 1;
      let stringit = font_size + 'px';
      $('.card-block').css('font-size', stringit);
      $('table p').css('font-size', stringit);
    }
  });
})();
