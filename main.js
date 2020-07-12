
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
var md = new MobileDetect(window.navigator.userAgent);

//console.log(md.mobile());

if(md.mobile() != null)
{
function enterButton() { leftSide(-10) };
function leaveButton() { leftSide(0) };

function rightSE() { rightS(10) };
function rightSEop() { rightS(0) };

function ortext() { otext(0.9) };
function otextop() { otext(1) };

function curve1() { crve1(1.3,-5,['#1E1E1E', '#FFC200']) };
function curve1op() { crve1(1,0,['#FFC200', '#1E1E1E']) };
}
else{
function enterButton() { leftSide(-20) };
function leaveButton() { leftSide(0) };

function rightSE() { rightS(20) };
function rightSEop() { rightS(0) };

function ortext() { otext(0.8) };
function otextop() { otext(1) };

function curve1() { crve1(1.4,-15,['#1E1E1E', '#FFC200']) };
function curve1op() { crve1(1,0,['#FFC200', '#1E1E1E']) };
}








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

if(md.mobile() != null)
{
function item1Enter() { item1Anim(-20) };
function item1Leave() { item1Anim(0) };
}
else
{
function item1Enter() { item1Anim(-40) };
function item1Leave() { item1Anim(0) };
}

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
if(md.mobile() != null)
{
function item3Enter() { item3Anim(30) };
function item3Leave() { item3Anim(0) };
}else{
function item3Enter() { item3Anim(50) };
function item3Leave() { item3Anim(0) };
}

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
if(md.mobile() != null)
{
function piece1MEnter() { piece1M([0,-10]) };
function piece1MLeave() { piece1M([-10,0]) };
}else{
function piece1MEnter() { piece1M([0,-30]) };
function piece1MLeave() { piece1M([-30,0]) };
}

function piece3M(translateX) {
anime.remove('.piece3');
anime({
  targets: '.piece3',
  translateX: translateX,
  easing: 'easeOutQuint',
  duration: 500
 });

}

if(md.mobile() != null)
{
function piece3MEnter() { piece3M([0,10]) };
function piece3MLeave() { piece3M([10,0]) };
}else{
function piece3MEnter() { piece3M([0,30]) };
function piece3MLeave() { piece3M([30,0]) };
}

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
  scaleX: 1,
  scaleY: 1,
  duration:230,
  easing: 'easeInOutQuad',
  height: ['350', '20'],
  borderWidth: '0px',
  
 }).add({
  targets: '#gb0',
  left:'21%',
  borderRadius:['0%', '50%'],
  easing: 'easeInOutQuad',
  delay: 0,
  scale: 3,
  top: ['50%', '70%'],
  borderWidth: ['0px' ,'2px'],
  borderColor:'#ff00ff',
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
  right:'21%',
  borderRadius:['0%', '50%'],
  easing: 'easeInOutQuad',
  delay: 0,
  scale: 3,
  top: ['50%', '70%'],
  borderWidth: ['0px' ,'2px'],
  borderColor:'#ff00ff',	
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





