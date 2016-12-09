$(window).load(function() {

  function toggleVideoOn(video, headerColor) {
    $(video).fadeIn('fast').get(0).play();
    $('h1').css({'color': headerColor});
  }

  function toggleVideoOff(video) {
    $(video).fadeOut('fast').get(0).pause();
    // Returns home page to default state when not hovering on a link
    $('html').css({'background':'#FFF'});
    $('nav a').css({'color':'#bfbfbf','text-shadow':'none'});
    $('h1').css({'color':'#000','text-shadow':'none'});
  }

  // Home - Hover nav links toggle video on & h1 color
  $('.home a').on('mouseover', function() {
    var id = $(this).parent()[0].id;
    $('.home a, h1').css({'text-shadow':'1px 1px 1px #000'});
    if(id === 'about') {
      toggleVideoOn('#aboutVideo', '#FFB840');
    }
    else if(id === 'work') {
      toggleVideoOn('#workVideo', '#9fff80');
    }
    else {
      toggleVideoOn('#contactVideo', '#FFF');
    }
  })
  // Home - Hover nav links toggle video off & return to default styles
  .on('mouseleave', function() {
    var id = $(this).parent()[0].id;
    if(id === 'about'){
      toggleVideoOff('#aboutVideo');
    }
    else if(id === 'work') {
      toggleVideoOff('#workVideo');
    }
    else {
      toggleVideoOff('#contactVideo')
    }
  });

  /*
  * Toggle fade out animation on h1, nav links, video bg changes.
  * Changes location on delay after fade out.
  */
	$('.home a').click(function(e) {
    var goTo = this.getAttribute("href"); // store anchor href
    var nav = $('nav.home li');

    e.preventDefault();

    $('h1 span:first-child').removeClass('slide-down-in').addClass('slide-down-out');
    $('h1 span:last-child').removeClass('slide-up-in').addClass('slide-up-out');

    for(var i = 0; i < nav.length; i++) {
    	for(var j = 0; j < nav[i].classList.length; j++) {
    		nav[i].style.opacity = '1';
    		if(nav[i].classList[j] === 'pop-in-left') {
    			nav[i].classList.remove('pop-in-left');
    			nav[i].classList.add('pop-out-right');
    		}
    		else if(nav[i].classList[j] === 'pop-in-right') {
    			nav[i].classList.remove('pop-in-right');
    			nav[i].classList.add('pop-out-left');
    		}
    	}
    }

    $('video').fadeOut(2500);

    setTimeout(function(){
      window.location = goTo;
    }, 1500);
	});

  // Returns an array of text inputs that are empty.
  function emptyInputs() {
    var nameInputs = $('input[type="text"');
    var textarea = $('textarea')[0];
    var empty = [];
    for(var i = 0; i < nameInputs.length; i++) {
      if(nameInputs[i].value === ''){
        empty.push(nameInputs[i]);
      }
    }
    if(textarea.value === ''){
      empty.push(textarea);
    }
    return empty;
  }

  /**
   * Highlights an empty text input. Adds slide-placeholder-out class to slide out
   * placeholder text. Adds slide-in-labels class to slide in hidden labels.
   */
  function highlightEmptyInputs(selector) {
    $(selector).css('padding-left','0').addClass('slide-placeholder-out')
    .prev().children().addClass('slide-in-labels');
  }

  /**
   * Checks text inputs on focus. If there are other empty inputs, it slides out
   * their label and slides in the placeholder text.
   */
  $('input[type="text"], textarea').on('focus', function() {
    var empty = emptyInputs();
    if(empty.length > 0) {
      for(var i = 0; i < empty.length; i++) {
        $(empty[i]).removeClass('slide-placeholder-out');
        $(empty[i]).prev().children().removeClass('slide-in-labels');
      }
      highlightEmptyInputs($(this));
    }
  })
  /**
   * Checks to see if input has a value. If there is no value it changes the label
   * color to red. If there is a value in the input it changes to label color to green.
   */
  .keyup(function() {
    var $this = $(this);
    if($this.val() !== '') {
      $this.prev().children().css('color','#66cc66');
    }
    else {
      $this.prev().children().css('color','#ff6666');
    }
  });

  /**
   * On button click checks for empty text inputs. Appends name of empty inputs to form.
   * Sends empty input elements to highLightEmptyInputs function. If there are no empty inputs,
   * contents of body fade out and success message with
   * selected character image is displayed.
   */
  $('button').on('click', function() {
    var empty = emptyInputs();
    if(empty.length > 0) {
      if($('.errors').length > 0){
        $('.errors').remove();
      }
      $('form').append('<p class="errors">Please fill in your:</p>');
      for(var i = 0; i < empty.length; i++) {
        highlightEmptyInputs(empty[i]);
        // Appends empty input names to errors element. Capitolizes name attribute.
        if(empty[i].name !=="message"){
          $('.errors').append('<br>' + empty[i].name.charAt(0).toUpperCase()
          + empty[i].name.substring(1,empty[i].name.length) + ' Name' );
        }
        else {
          $('.errors').append('<br>' + empty[i].name.charAt(0).toUpperCase()
          + empty[i].name.substring(1,empty[i].name.length));
        }
      }
      return false;
    }
  });

	// Pop out menu toggle
	$('.menu-btn').on('click', function() {
		var nav = $('nav.pop');
		if(nav.hasClass('pop-in')){
			nav.removeClass('pop-in').addClass('pop-out');
		}
		else {
			nav.removeClass('pop-out').addClass('pop-in');
		}
		$(this).toggleClass('change');
		if($(this).children().css('background-color') == 'rgb(255, 255, 255)') {
			$(this).children().css('background-color',"#000");
		}
		else {
			$(this).children().css('background-color','#FFF');
		}
	});

});
