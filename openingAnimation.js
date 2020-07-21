var tl1111 = anime.timeline({
   duration: 1500,
   easing: 'easeInQuint',
   loop:true,
   
})

var tl2222 = anime.timeline({
   duration: 1500,
   easing: 'easeInQuint',
  loop:true,
})

var tl3333 = anime.timeline({
   duration: 1500,
   easing: 'easeInQuint',
   loop:true,
})

tl1111.add({
  targets: '#svg_2222',
  easing: 'easeInOutSine',
  fill:'#f8f8f8',
  stroke: 'rgba(0,0,0,1)',
  strokeWidth: '2px',
  strokeDashoffset: [anime.setDashoffset, 0],
}).add({
  targets: '#svg_2222',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 500,
}).add({
  targets: '#svg_2222',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 1000,
});

tl2222.add({
  targets: '#svg_3333',
  easing: 'easeInOutSine',
  fill:'#f8f8f8',
  stroke: 'rgba(0,0,0,1)',
  strokeWidth: '2px',
  strokeDashoffset: [anime.setDashoffset, 0],
}).add({
  targets: '#svg_3333',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 500,
}).add({
  targets: '#svg_3333',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 1000,
}).add({
   targets: '.ddddd',
   rotate: '360deg',
});


var tl11111 = anime.timeline({
   duration: 1500,
   easing: 'easeInQuint',
   autoplay:true,
});

var tl22222 = anime.timeline({
   duration: 1500,
   easing: 'easeInQuint',
   autoplay:true,
});


tl11111.add({
  targets: '#svg_22222',
  easing: 'easeInOutSine',
  fill:'#f8f8f8',
  stroke: 'rgba(0,0,0,1)',
  strokeWidth: '1px',
  strokeDashoffset: [anime.setDashoffset, 0],
}).add({
  targets: '#svg_22222',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 500,
}).add({
  targets: '#svg_22222',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 1000,
});

tl22222.add({
  targets: '#svg_33333',
  easing: 'easeInOutSine',
  fill:'#f8f8f8',
  stroke: 'rgba(0,0,0,1)',
  strokeWidth: '1px',
  strokeDashoffset: [anime.setDashoffset, 0],
}).add({
  targets: '#svg_33333',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 500,
}).add({
  targets: '#svg_33333',
  fill:'#1e1e1e',
  stroke: 'rgba(0,0,0,0)',
  duration: 1000,
}).add({
   targets: '.dddddd',
   rotate: '360deg',
});


setInterval(function(){ 
     tl11111.restart();
     tl22222.restart();
}, 20000);
