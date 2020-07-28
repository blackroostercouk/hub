
const SWIRL_OPTS = {
  left: 0, top: 0,
  fill:           '#1e1e1e',
  duration:       'rand(600, 1000)',
  radius:         'rand(10, 20)',
  pathScale:      'rand(.5, 1)',
  swirlFrequency: 'rand(2,4)',
  swirlSize: 'rand(6,14)',
   zIndex: '9999',
}

const SWIRL_OPTS2 = {
  left: 0, top: 0,
  fill:           '#ffc200',
  duration:       'rand(600, 1000)',
  radius:         'rand(10, 20)',
  pathScale:      'rand(.5, 1)',
  swirlFrequency: 'rand(2,4)',
  swirlSize: 'rand(6,14)',
  zIndex:'9999',
}

const swirl1 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});

swirl1.el.style.zIndex = 9999;
  
const swirl2 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS,
  direction: -1
});

swirl2.el.style.zIndex = 9999;

const swirl3 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});

swirl3.el.style.zIndex = 9999;
  
const swirl4 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS
});

swirl4.el.style.zIndex = 9999;

const swirl11 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS2
});

swirl11.el.style.zIndex = 9999;
  
const swirl22 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS2,
  direction: -1
});

swirl22.el.style.zIndex = 9999;

const swirl33 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS2
});

swirl33.el.style.zIndex = 9999;
  
const swirl44 = new mojs.ShapeSwirl({
  ...SWIRL_OPTS2
});

swirl44.el.style.zIndex = 9999;

$("#sendbutton").mouseleave(function(e){
  const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
   swirl1
   .tune({ x, y })
    .generate()
    .replay();
  
  swirl2
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl3
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl4
    .tune({ x, y })
    .generate()
    .replay();
  
});

$("#sendbutton").mouseenter(function(e){
  const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
   swirl11
   .tune({ x, y })
    .generate()
    .replay();
  
  swirl22
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl33
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl44
    .tune({ x, y })
    .generate()
    .replay();
  
});

$("#submition").mouseleave(function(e){
  const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
   swirl1
   .tune({ x, y })
    .generate()
    .replay();
  
  swirl2
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl3
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl4
    .tune({ x, y })
    .generate()
    .replay();
  
});

$("#submition").mouseenter(function(e){
  const x = e.pageX,
        y = { [e.pageY]: e.pageY-150 };
   swirl11
   .tune({ x, y })
    .generate()
    .replay();
  
  swirl22
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl33
    .tune({ x, y })
    .generate()
    .replay();
  
  swirl44
    .tune({ x, y })
    .generate()
    .replay();
  
});

