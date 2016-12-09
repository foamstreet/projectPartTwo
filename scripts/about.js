$(document).ready(function(){

  // ScrollMagic
  var controller = new ScrollMagic.Controller();
  var scenes = [];

  // Scene 1 - part 1 of 2 - rolls image to the right
  scenes[0] = new ScrollMagic.Scene({
    triggerElement: 'h2',
    offset: 385,
    duration: 0
  })
  .setTween('.profile-img', .5, {left: 175, rotation: 360})
  .setPin('#bio')
  .on('start', function(e) {
    if(e.scrollDirection === 'FORWARD'){
      $('body').css({'background-color':'#FFD23F'});
    }
    else {
      $('body').css({'background-color':'#FFF'});
      $('#about-one').css({'background-image':'none'});
    }
  });

  // Scene 1 - part 2 of 2 - slides 'My name is Stacy' to left of image
  scenes[1] = new ScrollMagic.Scene({
    triggerElement: 'h2',
    offset: 375
  })
  .setTween('#bio .about-left', .5, {width: 600})
  .on('start', function(e){
    if(e.scrollDirection === 'FORWARD'){
      $('#bio .about-left').hide().html('My name is Stacy').fadeIn();
    }
    else {
      $('#bio .about-left').fadeOut();
    }
  });

  // Scene 2 - part 1 of 3 - rolls image to the left
  scenes[2] = new ScrollMagic.Scene({
    triggerElement: '#about-two',
    offset: 75
  })
  .setTween('.profile-img', 1, {left: -225, rotation: -360})
  .on('start', function(e) {
    var body = $('body');
    if(e.scrollDirection === 'FORWARD'){
      body.css({'background-color':'#0EB1D2'});
    }
    else {
      body.css({'background-color':'#FFD23F'});
    }
  });

  // Scene 2 - part 2 of 3 - slide 'My name is Stacy' back behind image
  scenes[3] = new ScrollMagic.Scene({
    triggerElement: '#about-two',
    offset: 75
  })
  .setTween('#bio .about-left', .5, {width: 0})
  .on('start', function(e) {
    if(e.scrollDirection === 'FORWARD')
    {
      $('#bio .about-left').fadeOut();
    }
  });

  // Scene 2 - part 3 of 3 - slide 'I am studying web ...' out
  scenes[4] = new ScrollMagic.Scene({
    triggerElement: '#about-two',
    offset: 75
  })
  .setTween('#bio .about-right', .5, {width: 500, left: '40%'})
  .on('start', function(e) {
    if(e.scrollDirection === 'FORWARD'){
      $('#bio .about-right').hide().html('I am studying<br>Web Development').fadeIn();
      $('.profile-img').attr('src','images/www.svg').css('border','none');
    }
    else {
      $('.profile-img').attr('src','images/stacy_bw.jpg').css('border','3px solid #000');
      $('#bio .about-right').fadeOut();
      $('#bio .about-left').fadeIn();
    }
  });

  // Scene 3 part 1 of 1 fade in Skills header
  scenes[5] = new ScrollMagic.Scene({
    triggerElement: '#about-three',
    offset: 75
  })
  .setTween('#about-three h2', .5, {scale: 2, opacity: 1})
  .on('start', function(e) {
    if(e.scrollDirection === 'FORWARD'){
      $('body').css({'background-color':'#AAA'});
    }
    else {
      $('body').css({'background-color':'#0EB1D2'});
    }
  });

  // Scene 3 part 2 of 2 fade in web icons
  scenes[6] = new ScrollMagic.Scene({
    triggerElement: '#about-three',
    offset: 75
  })
  .setTween('#bio', .5, {scale: .1, opacity: 0})
  .on('start', function(e) {
    if(e.scrollDirection === 'FORWARD'){
      setTimeout(function(){
        $('#about-three img').css({'opacity':'1'});
      }, 500);
    }
    else {
      $('#about-three img').css({'opacity':'0'});
    }
  });

  for(var i = 0; i < scenes.length; i++) {
    scenes[i].addTo(controller);
  }

});
