
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

const timeline = new mojs.Timeline({ speed: 1.5 });
const timeline2 = new mojs.Timeline({ speed: 1.5 });

timeline.add(circle, facebook);

timeline2.add(circle2, linkedin);

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




$(".bol4").hide();
$(".leftarrow").hide();
$(".rightarrow").hide();

$(".leftarrow").css("transform", "rotate(90deg)");
$(".rightarrow").css("transform", "rotate(-90deg)");

anime.remove('.iitem');
anime({
  targets: '.iitem',
  scaleX: 1.4,
  scaleY: 1.4,
  duration:0,
 });





function leftSide(translateX) {
anime.remove('.bol');
anime({
  targets: '.bol',
  translateX: translateX,
  easing: 'easeOutQuint',
  duration: 500
 });
  
}


function crve1(scale,translateY,color) {
anime.remove('.bol4'); 
anime({
  targets: '.bol4',
  scale: scale,
  translateY: translateY,
  color: color,
  easing: 'easeOutQuint',
  duration: 500
 });
  
}

function otext(scale2) {
anime.remove('.bol2');
anime({
  targets: '.bol2',
  scale: scale2,
  easing: 'easeOutQuint',
  duration: 500
 });
  
}

function rightS(translateX) {
anime.remove('.bol3');
anime({
  targets: '.bol3',
  translateX: translateX,
  easing: 'easeOutQuint',
  duration: 500
 });
  
}


function enterButton() { leftSide(-20) };
function leaveButton() { leftSide(0) };

function rightSE() { rightS(20) };
function rightSEop() { rightS(0) };

function ortext() { otext(0.8) };
function otextop() { otext(1) };

function curve1() { crve1(1.4,-15,['#1E1E1E', '#FFC200']) };
function curve1op() { crve1(1,0,['#FFC200', '#1E1E1E']) };




$(".itemmenu").mouseenter(function(){
$(".bol4").show();  
enterButton();
curve1();
ortext();
rightSE();
});


$(".itemmenu").mouseleave(function(){
$(".bol4").hide();  
leaveButton();
curve1op(); 
otextop();
rightSEop();  
});



function item1Anim(translateX) {
anime.remove('.item1');
anime({
  targets: '.item1',
  translateX: translateX,
  easing: 'easeOutQuint',
  duration: 500
 });
  /*-40*/
}

function item1Enter() { item1Anim(-40) };
function item1Leave() { item1Anim(0) };

function item2Anim(rotate,scaleX,scaleY) {
anime.remove('.iitem');
anime({
  targets: '.iitem',
  rotate: rotate,
  easing: 'easeOutQuint',
  duration: 300,
  scaleX: scaleX,
  scaleY: scaleY,
  delay:60,
 });
 
}

function item2Enter() { item2Anim(90 , [1.4 , 0.8] , [1.4 , 0.8]) };
function item2Leave() { item2Anim(0 ,  [0.8 , 1.4] , [0.8 , 1.4]) };

function item3Anim(translateX) {
anime.remove('.item3');
anime({
  targets: '.item3',
  translateX: translateX,
  easing: 'easeOutQuint',
  duration: 500
 });
  /*50*/
}

function item3Enter() { item3Anim(50) };
function item3Leave() { item3Anim(0) };

function leftArrowAnim(opacity,transformX) {
anime.remove('.leftarrow');
anime({
  targets: '.leftarrow',
  opacity: opacity,
  translateY: transformX,
  easing: 'easeOutQuint',
  duration: 500,
 });
  /*[0,1] [100,0] */
}

function leftArrowEnter() { leftArrowAnim([0,1],[0,50]) };
function leftArrowLeave() { leftArrowAnim([1,0],[50,0]) };

function rightArrowAnim(opacity,transformX) {
anime.remove('.rightarrow');
anime({
  targets: '.rightarrow',
  opacity: opacity,
  translateY: transformX,
  easing: 'easeOutQuint',
  duration: 500
 });
  /*[0,1] [100,0] */
}

function rightArrowEnter() { rightArrowAnim([0,1],[0,60]) };
function rightArrowLeave() { rightArrowAnim([0,1],[60,0]) };


$(".itemmenu2").mouseenter(function(){ 
$(".leftarrow").show();
$(".rightarrow").show();  
item1Enter();
item2Enter();
item3Enter();
leftArrowEnter();
rightArrowEnter();
});


$(".itemmenu2").mouseleave(function(){
$(".leftarrow").hide();
$(".rightarrow").hide();    
item1Leave();
item2Leave();
item3Leave();
leftArrowLeave();
rightArrowLeave();
});



function piece2M(scale) {
anime.remove('.piece2');
anime({
  targets: '.piece2',
  scale: scale,
  easing: 'easeOutQuint',
  duration: 500
 });
  /*[1,1.5] */
}

function piece2MEnter() { piece2M([1,1.5]) };
function piece2MLeave() { piece2M([1.5,1]) };

/*anime({
  targets: '.piece2',
  scale: [1,1.5],
 });*/
function piece1M(translateX) {
anime.remove('.piece1');
anime({
  targets: '.piece1',
  translateX: translateX,
  easing: 'easeOutQuint',
  duration: 500
 });
  /*[0,-30] */
}

function piece1MEnter() { piece1M([0,-30]) };
function piece1MLeave() { piece1M([-30,0]) };

function piece3M(translateX) {
anime.remove('.piece3');
anime({
  targets: '.piece3',
  translateX: translateX,
  easing: 'easeOutQuint',
  duration: 500
 });

}
function piece3MEnter() { piece3M([0,30]) };
function piece3MLeave() { piece3M([30,0]) };


$(".itemmenu3").mouseenter(function(){ 
  piece1MEnter();
  piece2MEnter();
  piece3MEnter();
});


$(".itemmenu3").mouseleave(function(){
  piece1MLeave();
  piece2MLeave();
  piece3MLeave();
});



$(".workcollection").find(".collectioncontainer").eq(1).addClass("ters");



  $(document).ready(function() {
	    $(".sphead").lettering();
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
     $(this).find(".cub2").find(".cub").find("img").attr('id','im'+index+'');
     
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
  scaleX: 1,
  scaleY: 1,
  duration:230,
  easing: 'easeInOutQuad',
  height: ['350', '20'],
  borderWidth: '0px',
  
 }).add({
  targets: '#gb0',
  left:'25%',
  borderRadius:['0%', '50%'],
  easing: 'easeInOutQuad',
  delay: 0,
  scale: 3,
  top: ['50%', '70%'],
  borderWidth: ['0px' ,'2px'],
  duration:250,
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
  right:'25%',
  borderRadius:['0%', '50%'],
  easing: 'easeInOutQuad',
  delay: 0,
  scale: 3,
  top: ['50%', '70%'],
   borderWidth: ['0px' ,'2px'],
  duration:250,
}).add({
  targets: '#im1',
  opacity: [0 , 1],
  easing: 'easeInOutQuad',
  duration:500,
});



function enterButton() {
  if (tl.reversed) tl.reverse();
  console.log(tl);
  tl.play();
 }
 
function enterButton2() {
  if (tl2.reversed) tl2.reverse();
  console.log(tl2);
  tl2.play();
 }

function leaveButton() {
  if (!tl.reversed) tl.reverse();
  tl.play();

}

function leaveButton2() {
  if (!tl2.reversed) tl2.reverse();
  tl2.play();

}


$(".cl0").mouseenter(function(){
enterButton();
});

$(".cl1").mouseenter(function(){
enterButton2();
});

$(".cl0").mouseleave(function(){
leaveButton();
});

$(".cl1").mouseleave(function(){
leaveButton2();
});





