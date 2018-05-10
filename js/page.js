$(document).ready(function () {
    $(document).on('click', 'nav li a', function (event) {
      history.pushState(null, null, event.target.href);
      $('article').load(event.target.href+' article>.content');
      event.preventDefault();
    })
    $(window).on('popstate', function(event){
      $('article').load(location.href+' article>.content');
    })
    var audio = new Audio('Tyburn - Eden.mp3');
    $(document).on('click', '.control .player .play', function(event){
      audio.play();
    });
    $(document).on('click', '.control .player .pause', function(event){
      audio.pause();
    });

    /* 메뉴동작시 스크립트 */
    $('.menu01_01').click(function(){
      $('#backstretch01').show();
      $('.gallery_wrap').hide();
    });
    $('.menu01_02').click(function(){
      $('#backstretch01').hide();
      $('.gallery_wrap').hide();
    });
    $('.menu01_03').click(function(){
      $('#backstretch01').hide();
      $('.gallery_wrap').show();
  });
  });