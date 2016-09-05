$(function(){

  $('nav li a, .small-nav li a, .logo-container a').map(function(elt){
    var self = this
    $(self).click(function(e){
      e.preventDefault();
      if ($(self).hasClass('close')){
        $('.small-nav').slideUp('slow')
        $('.hamburger').removeClass("red");
      }
      $('nav li a, .small-nav li a').map(function(elt){
        $(this).removeClass('active')
      })
      var hash = this.hash
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 900, function(){
          window.location.hash = hash;
      })
      $(self).addClass('active')
    })
  })

  $('.hamburger').click(function(){
    self = this

    if ($('.small-nav').css('display') === 'none'){
      $('.small-nav').slideDown('normal').show()
      $(self).toggleClass("red");
    }
    else{
      $('.small-nav').slideUp('slow')
      $(self).toggleClass("red");
    }
  })
})
