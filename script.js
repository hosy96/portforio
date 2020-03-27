$(function(){

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });


  // SNSボタン
  $('.social-icon').hover(
    function(){
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );
  
  // トップへ戻るボタン
  $('#top-btn').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0 
    }, 'slow');
  });
  
  // ヘッダー内の<a>タグをクリックしたときのclickイベントを作成してください。
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    
    $('html,body').animate({
      'scrollTop':position
      
    }, 500);
    
  });

  $('.menu-trigger').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').removeClass('open');
      $('.overlay').removeClass('open');
    } else {
      $(this).addClass('active');
      $('nav').addClass('open');
      $('.overlay').addClass('open');
    }
  });
  $('.overlay').click(function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.menu-trigger').removeClass('active');
      $('nav').removeClass('open');      
    }
  });


  /*-------アコーディオン---------*/
  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');
    
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  })

  /*-------スライド-----------*/
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex == 0) {
      $('.prev-btn').hide();
    // 「3」の部分を、lengthメソッドを用いて書き換えてください
    } else if (slideIndex == $('.slide').length -1) {
      $('.next-btn').hide();
    }
  }
  
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });
  
  $('.change-btn').click(function() {
    var $displaySlide = $('.active');
    $displaySlide.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaySlide.next().addClass('active');
    } else {
      $displaySlide.prev().addClass('active');
    }
    toggleChangeBtn();
  });  
});
