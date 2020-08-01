var md2 = new MobileDetect(window.navigator.userAgent);
var formalertkontrol = 0;

function randomNumberyy(minyy, maxyy) {
  return Math.random() * (maxyy - minyy) + minyy;
}

function validateEmail(emailt) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(emailt);
}


var animation = anime({
    targets: '#pagec',
    scale: [0, 1],
    duration:500,
    easing: 'easeOutBounce',
    autoplay:false,
})

var animation2 = anime({
    targets: '#prens',
    fill: ['#000', '#e24a4a'],
    easing: 'easeOutQuint',
    duration:500,
    autoplay:false,
})

var animation3 = anime({
  targets: '#warningtext2',
  opacity:[0,1],
  easing: 'easeOutQuint',
  duration:500,
  delay:500
});

/*Reverse*/
var animation4 = anime({
    targets: '#pagec',
    scale: [1, 0],
    duration:500,
    easing: 'easeOutBounce',
    autoplay:false,
    delay:500
})

var animation5 = anime({
    targets: '#prens',
    fill: ['#e24a4a', '#000'],
    easing: 'easeOutQuint',
    duration:500,
    autoplay:false,
})

var animation6 = anime({
  targets: '#warningtext2',
  opacity:[1,0],
  easing: 'easeOutQuint',
  duration:500,
  
});
/*Reverse*/


function warningname(){
  var position = $("#name").position();
  var xc = position.left;
  var yc = position.top;
  $("#warningtarget").css("top",position.top-134);
  $("#warningtarget").css("left",position.left+50);
  $(".warningtextc").text("You need to fill in your name");	
  animation2.restart();
  animation.restart();
  animation3.restart();
}


function warningemail()
{
 var position = $("#emailc").position();
        var xc = position.left;
        var yc = position.top;
        $("#warningtarget").css("top",position.top-134);
        $("#warningtarget").css("left",position.left+50);
	$(".warningtextc").text("You need to fill in your email address");   
        animation2.restart();
        animation.restart();
        animation3.restart();	    
}




function warningmessage(){
  var position = $("#message").position();
  var xc = position.left;
  var yc = position.top;	
  $("#warningtarget").css("top",position.top-134);
  $("#warningtarget").css("left",position.left+50);
  $(".warningtextc").text("You need to write a message");	
  animation2.restart();
  animation.restart();
  animation3.restart();
}

function warninghuman(){
  var position = $("#submition2").position();
  var xc = position.left;
  var yc = position.top;
  $("#warningtarget").css("top",position.top-134);
  $("#warningtarget").css("left",position.left+50);
  $(".warningtextc").text("Please confirm you are human");
  animation2.restart();
  animation.restart();
  animation3.restart();
}


function animreverse()
{
	
  animation6.restart();
  animation5.restart();
  animation4.restart();
}



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

 $('#name').focus(function(){
      letterdis($("#name").find('span').length , $("#name"));
      $('#alertwarning').hide();
	  if(formalertkontrol == 1)
      {
      animreverse();
      formalertkontrol = 0;
      }
      //console.log("focusum");	 
      
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

 $('#name').click(function(){
      letterdis($("#name").find('span').length , $("#name"));
      $('#alertwarning').hide();

      if(formalertkontrol == 1)
      {
      animreverse();
      formalertkontrol = 0;
      }

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

$('#emailc').focus(function(){
      letterdis($("#emailc").find('span').length , $("#emailc"));
      $('#alertwarning').hide();
	 if(formalertkontrol == 1)
      {
      animreverse();
      formalertkontrol = 0;
      }
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

$('#message').focus(function(){
      letterdis($("#message").find('span').length , $("#message"));
	
       $('#alertwarning').hide();
	if(formalertkontrol == 1)
      {
      animreverse();
      formalertkontrol = 0;
      }
	
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
     $('#name-2').val($(this).html());
});

$( "#emailc" ).keyup(function() {
     $('#email').val($(this).html());
});

$( "#message" ).keyup(function() {
     $('#message-2').val($(this).html());
});


$("#name").blur(function(){
 $('#alertwarning').hide();
if(formalertkontrol == 1)
      {
      animreverse();
      formalertkontrol = 0;
      }	
    if($('#name').html() == "")
      {
          $('#name').html(deg);
          $("#name").lettering();
      }
  });


$("#emailc").blur(function(){
 $('#alertwarning').hide();
if(formalertkontrol == 1)
      {
      animreverse();
      formalertkontrol = 0;
      }	
    if($('#emailc').html() == "")
      {
          $('#emailc').html(deg1);
          $("#emailc").lettering();
      }
  });



$("#message").blur(function(){
 $('#alertwarning').hide();
if(formalertkontrol == 1)
      {
      animreverse();
      formalertkontrol = 0;
      }	
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
     $("#thankm").html("Thanks "+$('#name-2').val()+"! We received your message!");
     $("#thankm").lettering();
     var addText = $('#name-2').val().length;
     var alltext = $("#thankm").find('span').length;
     var newbit1 = randomNumberyy(6,6+addText);
     var newbit2 = randomNumberyy(6,6+addText);
     var iii;
     for (iii = 6; iii < 8+addText; iii++) {
      $("#thankm").find('span').eq(iii).attr("style","font-family:Brimanmid, sans-serif;");
      }
     $("#thankm").find('span').eq(Math.floor(newbit1)).css("color","#ffc200");
     $("#thankm").find('span').eq(Math.floor(newbit2)).css("color","#ffc200");
     getb();
  }

});
    
    
  }





function getb()
{
$('#thankm').css('opacity','1');
anime({
  targets: '#thankm span',
  opacity:[0,1],
  background:['#1e1e1e','#f8f8f8'],
  delay: anime.stagger(50),
  autoplay: true,
});
}

var formname;
var formemail;
var formmessage;


/*yenikod*/










$( window ).resize(function() {
  var position = $("#name").position();
  var xc = position.left;
  var yc = position.top;
  $("#warningtarget").css("top",position.top-134);
  $("#warningtarget").css("left",position.left+50);
});
/*yenikod*/


var Webflow = Webflow || [];
Webflow.push(function() {

  // === Custom Form Handling ===
  
  // unbind webflow form handling
  //$(document).off('submit');

  // new form handling
	
	
  $('#email-form').submit(function(evt) {
   // evt.preventDefault();
    formname = $("#name-2").val();
    if(formname == "" || formname == "name"){
	    if(md2.mobile() != null)
             {
       $("#warningtext").text("You need to fill in your name");
       $("#alertwarning").show();
       return false;
	     }else{
        warningname();
	formalertkontrol = 1;	     
        return false;
	     }
    }
    formemail = $("#email").val();
    if(formemail == "" || formemail == "email address"){
	     if(md2.mobile() != null){
       $("#warningtext").text("You need to fill in your email address");
       $("#alertwarning").show();
		     return false;
	     }else{
       warningemail();
       formalertkontrol = 1;
       return false;
    }
    }
	  
    if(!validateEmail(formemail))
    {
	    if(md2.mobile() != null){
     $("#warningtext").text("You need to fill in your email address");
     $("#alertwarning").show();
     return false;
	    }else{
       warningemail();
       formalertkontrol = 1;	    
       return false;
	    }
    }
    formmessage = $("#message-2").val();
     if(formmessage == "" || formmessage == "your message"){
	      if(md2.mobile() != null){
       $("#warningtext").text("You need to write a message");
       $("#alertwarning").show();
		       return false;
	      }else{
       warningmessage();
       formalertkontrol = 1;
       return false;
	      }
    }
   var response2 = grecaptcha.getResponse();
   if(response2.length == 0)
    {
	    if(md2.mobile() != null){
     $("#warningtext").text("Please confirm you are human");
     $("#alertwarning").show();
		     return false; 
	    }else{
      warninghuman();
		    formalertkontrol = 1;
     return false;  
	    }
    }
    else{
    $(document).on('submit');
    $("#centerpos").css("text-align","center");
    flame();
    
    }
  });
});

$("#closealert").click(function(){
      $("#alertwarning").hide();
});

$("#alertwarning").hide();
