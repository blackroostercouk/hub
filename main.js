
const circle = new mojs.Shape({
  parent:   '#instagram .dot',
  fill:      {'#1e1e1e' : 'none'},
  stroke:  {'none' : '#1e1e1e'},
  strokeWidth: 5,
  scale :    { 0.070  : 0.30, easing: 'quad.out' },
  isShowStart:  true,
  duration:  500,
  
});

const circle2 = new mojs.Shape({
  parent:   '#facebook .dot',
  fill:      {'#1e1e1e' : 'none'},
  stroke:  {'none' : '#1e1e1e'},
  strokeWidth: 5,
  scale :    { 0.070  : 0.30, easing: 'quad.out' },
  isShowStart:  true,
  duration:  500,
  

});

//yeni eklenen
const circle3 = new mojs.Shape({
  parent:   '#searchb .dot',
  fill:      {'#1e1e1e' : 'none'},
  stroke:  {'none' : '#1e1e1e'},
  strokeWidth: 5,
  scale :    { 0.070  : 0.30, easing: 'quad.out' },
  isShowStart:  true,
  duration:  500,
  

});
//yeni eklenen



class Facebook extends mojs.CustomShape {
  getShape () { return '<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>'; }
  getLength () { return 77.442; } 
}
mojs.addShape( 'facebook', Facebook ); 


class Linkedin extends mojs.CustomShape {
  getShape () { return '<path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>'; }
  getLength () { return 144.066; } 
}
mojs.addShape( 'linkedin', Linkedin ); 

//yeni eklenen

class Search extends mojs.CustomShape {
  getShape () { return '<path d="M23.8,21.6l-6.2-6.2c1.2-1.6,1.9-3.6,1.9-5.7c0-5.4-4.4-9.7-9.7-9.7C4.4,0,0,4.4,0,9.7c0,5.4,4.4,9.7,9.7,9.7 c2,0,3.9-0.6,5.5-1.7l6.2,6.2C21.5,24,23.8,21.6,23.8,21.6z M2.9,9.7c0-3.8,3.1-6.9,6.9-6.9s6.9,3.1,6.9,6.9s-3.1,6.9-6.9,6.9 C5.9,16.6,2.9,13.5,2.9,9.7z"/>'; }
  getLength () { return 144.066; } 
}
mojs.addShape( 'search', Search ); 

//yenieklenen


const facebook = new mojs.Shape({
  shape:    'facebook',
  parent:   '#instagram .ic',
  fill:     'none',
  stroke:   '#1e1e1e',
  strokeWidth: 1.4,
  strokeDasharray: '100%',
  strokeDashoffset: { '100%' : '0' }, easing: 'quint.in',
  y: 27,
  x: 27,
  scale: 0.7,
  duration:  500,
  
}).then({
    fill:  { 'none' : '#1e1e1e' }, easing: 'quint.in',
    duration:  500,
});

const linkedin = new mojs.Shape({
  shape:    'linkedin',
  parent:   '#facebook .ic',
  fill:     'none',
  stroke:   '#1e1e1e',
  strokeWidth: 1.4,
  strokeDasharray: '100%',
  strokeDashoffset: { '100%' : '0' }, easing: 'quint.in',
  y: 27,
  x: 28,
  scale: 0.7,
  duration:  500,
  
}).then({
    fill:  { 'none' : '#1e1e1e' }, easing: 'quint.in',
    duration:  500,
});

//yeni eklenen
const search = new mojs.Shape({
  shape:    'search',
  parent:   '#searchb .ic',
  fill:     'none',
  stroke:   '#1e1e1e',
  strokeWidth: 1.4,
  strokeDasharray: '100%',
  strokeDashoffset: { '100%' : '0' }, easing: 'quint.in',
  y: 27,
  x: 28,
  scale: 0.7,
  duration:  500,
  
}).then({
    fill:  { 'none' : '#1e1e1e' }, easing: 'quint.in',
    duration:  500,
});
//yeni eklenen

const timeline = new mojs.Timeline({ speed: 1.5 });
const timeline2 = new mojs.Timeline({ speed: 1.5 });
const timeline3 = new mojs.Timeline({ speed: 1.5 });

timeline.add(circle, facebook);
timeline2.add(circle2, linkedin);
timeline3.add(circle3, search);

$(".eventhan").mouseenter(function(){
   timeline.play();

});

$(".eventhan").mouseleave(function(){
   timeline.playBackward();
});

$(".eventhan2").mouseenter(function(){
   timeline2.play();

});

$(".eventhan2").mouseleave(function(){
   timeline2.playBackward();
});

$(".eventhan3").mouseenter(function(){
   timeline3.play();

});

$(".eventhan3").mouseleave(function(){
   timeline3.playBackward();
});



var ease = 10;

var ball = $("#hare");
var ball2 = $("#dot");
var pos = { x: 0, y: 0 };
var mouse = { x: 0, y: 0 };

$(window).mousemove(function(e){  
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

TweenLite.ticker.addEventListener("tick", update);

function update() {
  
  pos.x += (mouse.x - pos.x) * ease;
  pos.y += (mouse.y - pos.y) * ease;

  TweenMax.to(ball, 0.3, {top:(mouse.y-15), left:(mouse.x - 15), ease:Back.easeIn, ease:Bounce.easeOut});
  TweenMax.to(ball2, 0.2, {top:(mouse.y-2.5), left:(mouse.x-2.5), ease:Back.easeIn, ease:Bounce.easeOut});
}






$(".workcollection").find(".collectioncontainer").eq(1).addClass("ters");

    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  $(document).ready(function() {
	    $(".sphead").lettering();
	    $(".whead").lettering();
	    $("#khead").lettering();
	   
	    var wnume = $(".whead").length;
	   
	    function randomB(wordK){
	     
            var wnum = wordK.find("span").length;
   
            var wran1 = getRandomInt(1, wnum);
	    var wran2 = getRandomInt(1, wnum);
            wordK.find("span").eq(wran1).css("color","#fdc211");
	    wordK.find("span").eq(wran2).css("color","#fdc211");
	    }
	  
	    randomB($("#khead"));
	  
	  var o;
	  for (o = 0; o < wnume; o++) {
		  
		randomB($(".whead").eq(o));  
		  
           }
	    
	  
      var deger1 = $(".sphead").eq(0).find("span").length;
      var deger2 = $(".sphead").eq(1).find("span").length;
      
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    var getNum1 = getRandomInt(1,deger1);
    var getNum2 = getRandomInt(1,deger1);
    var getNum3 = getRandomInt(1,deger2);
    var getNum4 = getRandomInt(1,deger2);
    

    $(".sphead").eq(0).find("span").eq(getNum1).css("color","#fdc211");
    $(".sphead").eq(0).find("span").eq(getNum2).css("color","#fdc211");

    
    $(".sphead").eq(1).find("span").eq(getNum3).css("color","#fdc211");
    $(".sphead").eq(1).find("span").eq(getNum4).css("color","#fdc211");
    
	  });

$( ".collectioncontainer" ).each(function( index ) {
     $(this).addClass('cl'+index+'');
     $(this).find(".cub2").find(".cub").attr('id','gb'+index+'');
     $(this).find(".cub2").find(".cub").find(".embedt").attr('id','im'+index+'');
     
});




var tl = anime.timeline({
   easing: 'easeInOutQuad',
   duration: 750,
   autoplay: false,
});

var tl2 = anime.timeline({
   easing: 'easeInOutQuad',
   duration: 750,
   autoplay: false,
});




tl.add({
  targets: '#gb0',
  height:15,
  easing: 'easeOutQuint',
  duration:500,
  
 }).add({
  targets: '#gb0',
  easing: 'easeOutQuint',
  scale: [1,4],
  borderRadius: ['0%' , '50%'],
  delay:500,
  duration:500,
}).add({
  targets: '#im0',
  opacity: [0 , 1],
  easing: 'easeInOutQuad',
  duration:500,
});


tl2.add({
  targets: '#gb1',
  scaleX: 1,
  scaleY: 1,
  duration:230,
  easing: 'easeInOutQuad',
  height: ['350', '20'],
  borderWidth: '0px',
  
 }).add({
  targets: '#gb1',
  right:'21%',
  borderRadius:['0%', '50%'],
  easing: 'easeInOutQuad',
  delay: 0,
  scale: 3,
  top: ['50%', '70%'],
  borderWidth: ['0px' ,'1px'],	
  duration:250,
}).add({
  targets: '#im1',
  opacity: [0 , 1],
  easing: 'easeInOutQuad',
  duration:500,
});



function enterButton3() {
  if (tl.reversed) tl.reverse();
  console.log(tl);
  tl.play();
 }
 
function enterButton2() {
  if (tl2.reversed) tl2.reverse();
  console.log(tl2);
  tl2.play();
 }

function leaveButton3() {
  if (!tl.reversed) tl.reverse();
  tl.play();

}

function leaveButton2() {
  if (!tl2.reversed) tl2.reverse();
  tl2.play();

}


$(".cl0").mouseenter(function(){
enterButton3();
});

$(".cl1").mouseenter(function(){
enterButton2();
});

$(".cl0").mouseleave(function(){
leaveButton3();
});

$(".cl1").mouseleave(function(){
leaveButton2();
});

////yeni



/*let servicesW = document.querySelectorAll('.ppm');

servicesW.forEach((service) => {
  service.addEventListener('mouseenter', (event) => {
    anime.remove(service.querySelector('.#gb0'));
   // anime.remove(service.querySelector('.yellowbit .atag img'));
   // anime.remove(service.querySelector('.ybblack'));


      /*anime({
      targets: service.querySelector('#gb0'),
      height:15,
      easing: 'easeOutQuint',
      duration:500,
     });
     anime({
      targets: service.querySelector('.yellowbit'),
      easing: 'easeOutQuint',
      scale: [1,4],
      borderRadius: ['0%' , '50%'],
      delay:500,
      duration:500,
     });
     anime({
      targets: service.querySelector('.yellowbit .atag img'),
      opacity: [0, 1],
      easing: 'easeOutQuint',
      delay:500,
      duration:500,
     });
     anime({
      targets: service.querySelector('.ybblack'),
      height:15,
      easing: 'easeOutQuint',
      opacity:[1,0],
      duration:500,
     });
     anime({
      targets: service.querySelector('.ybblack'),
      easing: 'easeOutQuint',
      scale: [1,5],
      borderRadius: ['0%' , '50%'],
      duration:500,
      delay:500,
      opacity:0,
     });
     anime({
      targets: service.querySelector('.ybblack'),
      opacity:[1,0],
      duration:1500,
      scale: [1,8],
      backgroundColor: ['#1e1e1e','#f8f8f8'],
      delay:1000,
      easing: 'easeOutQuint',
      //autoplay:false,
      loop:true, 
        });
  });
  
  service.addEventListener('mouseleave', (event) => {
   anime.remove(service.querySelector('.yellowbit'));
   anime.remove(service.querySelector('.yellowbit .atag img'));
   anime.remove(service.querySelector('.ybblack'));
   anime({
      targets: service.querySelector('.yellowbit .atag img'),
      opacity: [1,0],
      easing: 'easeOutQuint',
      duration:500,
     });
     anime({
      targets: service.querySelector('.yellowbit'),
      easing: 'easeOutQuint',
      scale: [4,1],
      borderRadius: ['50%' , '0%'],
      duration:500,
     });
   anime({
      targets: service.querySelector('.yellowbit'),
      height: 350,
      easing: 'easeOutQuint',
      delay:1000,
      duration:500,
     });
     
      anime({
      targets: service.querySelector('.ybblack'),
      opacity:0,
      duration:500,
      scale: 1,
      easing: 'easeOutQuint',
      });
  });
});*/

///yeni


var tl888 = anime.timeline({
  easing: 'easeInQuint',
  duration: 500,
  autoplay:false, 
});

tl888.add({
  targets: '#circleanim',
  borderRadius: ['50%', '0%'],
  easing: 'easeOutQuint',
  duration: 500 ,
  delay:200,
}).add({
  targets: '#circleanim',
  easing: 'easeOutQuint',
  width: [50, 350],
  height: [50, 290],
  background:['#1e1e1e','#f8f8f8'],
  duration: 500
}).add({
  targets: '#imgarrow',
  opacity: [1,0],
  duration:10,
}).add({
  targets:'#nextworkimg',
  translateX: [-350 , 350],
  easing: 'easeOutQuint',
  duration: 1000
});




function enterButton888() {
  if (tl888.reversed) tl888.reverse();
  console.log(tl888);
  tl888.play();
 }

function leaveButton888() {
  if (!tl888.reversed) tl888.reverse();
  tl888.play();

}

$(".main").mouseenter(function(){
enterButton888();
});


$(".main").mouseleave(function(){
leaveButton888();
});


 $(".maskpedre").hide();
   $(".plusbit").mouseenter(function(){
      $(".maskpedre").show();  
   });
   $(".plusbit").mouseleave(function(){
      $(".maskpedre").hide();  
   });
   

var tl7 = anime.timeline({
  easing: 'easeOutQuint',
  delay: anime.stagger(100),
  autoplay: false,
});

var tl99 = anime.timeline({
  easing: 'easeOutQuint',
  delay: anime.stagger(100),
  autoplay: false,
});

tl7.add({
  targets: '.lineicon',
  width:6,
  height:6,
  easing: 'easeOutQuint',
  duration:500,
 }).add({
  targets: '.lineicon',
  scale:8,
  translateX: -10,
  borderRadius: '50%',
  duration:400,
  marginLeft: ['3px','25px'],
  marginRight: ['3px','25px'],
  easing: 'easeOutQuint',
  
 }).add({
    targets: '.linkf',
    opacity: [0 , 1],
    translateX: -0.5,
    translateY: -0.5,
 });
 
 tl99.add({
  targets: '.lineicon2',
  width:6,
  height:6,
  easing: 'easeOutQuint',
  duration:500,
 }).add({
  targets: '.lineicon2',
  scale:8,
  translateX: -10,
  borderRadius: '50%',
  duration:400,
  marginLeft: ['3px','25px'],
  marginRight: ['3px','25px'],
  easing: 'easeOutQuint',
  
 }).add({
    targets: '.linkg',
    opacity: [0 , 1],
    translateX: -0.5,
    translateY: -0.5,
 });



function enterButton7() {
  if (tl7.reversed) tl7.reverse();
  console.log(tl7);
  tl7.play();
 }
 
 function enterButton99() {
  if (tl99.reversed) tl99.reverse();
  console.log(tl99);
  tl99.play();
 }
 

function leaveButton7() {
  if (!tl7.reversed) tl7.reverse();
  tl7.play();

}

function leaveButton99() {
  if (!tl99.reversed) tl99.reverse();
  tl99.play();

}

$(".kenanturbo").mouseenter(function(){
enterButton7();
});

$(".basakturbo").mouseenter(function(){
enterButton99();
});

$(".kenanturbo").mouseleave(function(){
leaveButton7();
});

$(".basakturbo").mouseleave(function(){
leaveButton99();
});




