$("#email-form").attr("onsubmit","return validateForm()");

$( "#name" ).focus(function() {
  $(this).val(' ');
  $('#name').get(0).focus();
});

var deg = 'name';
var deg1 = 'email address';
var deg2 = 'message';

$(document).ready(function() {
	    $("#name").lettering();
      $("#emailc").lettering();
      $("#message").lettering();
      $(".hellotext").lettering();
      $('#thankm').html('');
      $('#thankm').css('opacity','0');
     
});

function letterdis(length,target)
{
  var i;
  for (i = 0; i < length+1; i++) {
     target.find('.char'+i).delay(200*i).fadeOut(100);
     target.find('.char'+i).remove();
     
    }
}

 $('#name').click(function(){
      letterdis($("#name").find('span').length , $("#name"));
      if($('#emailc').html() == "" || $('#emailc').html() == "email address")
        {
            $('#emailc').html(deg1);
            $("#emailc").lettering();
        }
       if($('#message').html() == "" || $('#message').html() == "message")
        {
            $('#message').html(deg2);
            $("#message").lettering();
        }
   });

$('#emailc').click(function(){
      letterdis($("#emailc").find('span').length , $("#emailc"));
      if($('#name').html() == "" || $('#name').html() == "name")
        {
            $('#name').html(deg);
            $("#name").lettering();
        }
  
      if($('#message').html() == "" || $('#message').html() == "message")
        {
            $('#message').html(deg2);
            $("#message").lettering();
          
        }

   });

$('#message').click(function(){
      letterdis($("#message").find('span').length , $("#message"));
     if($('#name').html() == "" || $('#name').html() == "name")
        {
            $('#name').html(deg);
            $("#name").lettering();
        }
       if($('#emailc').html() == "" || $('#emailc').html() == "email address")
        {
            $('#emailc').html(deg1);
            $("#emailc").lettering();
        }
   });


$( "#name" ).keyup(function() {
     $('#fname').val($(this).html());
});

$( "#emailc" ).keyup(function() {
     $('#femail').val($(this).html());
});
var chardeg;
$( "#message" ).keyup(function() {
     $('#fmessage').val($(this).html());
     chardeg = $('#message').html().length;

     if(chardeg > 100)
       {
          $(this).css("font-size","70px");
          $(this).css("line-height","40px");
       }
  
     if(chardeg > 150)
       {
          $(this).css("font-size","60px");
          $(this).css("line-height","30px");
       }
  
     if(chardeg > 200)
       {
          $(this).css("font-size","50px");
         $(this).css("line-height","18px");
       }
});


$("#name").focusout(function(){
    if($('#name').html() == "")
      {
          $('#name').html(deg);
          $("#name").lettering();
      }
  });


$("#emailc").focusout(function(){
    if($('#emailc').html() == "")
      {
          $('#emailc').html(deg1);
          $("#emailc").lettering();
      }
  });



$("#message").focusout(function(){
    if($('#message').html() == "")
      {
          $('#message').html(deg2);
          $("#message").lettering();
          $(this).css("font-size","60px");
      }
  
  });


//$("#submition").hide();

function flame()
{
anime({
  targets: '#hello span',
  top: '-30px',
  backgroundColor: 'rgb(111,193, 243)',
  opacity:[1,0],
  delay: anime.stagger(100),
  autoplay: true,
   complete: function(anim) {
    $("#hello").css('display','none');
    $("#name").css('display','none');
  }
});

anime({
  targets: '#youcan span',
  top: '-30px',
  backgroundColor: 'rgb(111,193, 243)',
  opacity:[1,0],
  delay: anime.stagger(100),
  autoplay: true,
   complete: function(anim) {
    $("#youcan").css('display','none');
    $("#emailc").css('display','none');
  }
});

anime({
  targets: '#talkto span',
  top: '-30px',
  backgroundColor: 'rgb(111,193, 243)',
  opacity:[1,0],
  delay: anime.stagger(100),
  autoplay: true,
   complete: function(anim) {
    $("#talkto").css('display','none');
    $("#message").css('display','none');
  }
});


anime({
  targets: '#name',
  top: '-30px',
  opacity:[1,0],
  autoplay: true,
  delay:1500,
});

anime({
  targets: '#emailc',
  top: '-30px',
  opacity:[1,0],
  autoplay: true,
    delay:2000,
});

anime({
  targets: '#message',
  top: '-30px',
  opacity:[1,0],
  autoplay: true,
    delay:2500,
     complete: function(anim) {
     $("#thankm").html("Thank's "+$('#fname').val()+"! Your submission received!");
     $("#thankm").lettering();
     getb();
  }

});
    
    
  }





function getb()
{
$('#thankm').css('opacity','1');
anime({
  targets: '#thankm span',
  top: '30px',
  opacity:[0,1],
  delay: anime.stagger(50),
  autoplay: true,
});
}









