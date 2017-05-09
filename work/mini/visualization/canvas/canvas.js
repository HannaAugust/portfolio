var c = document.querySelector('#webgl'), 
    ctx = c.getContext('2d'), 
    w, 
    h, 
    t = 0, 
    max = Math.max, 
    pow = Math.pow, 
    sqrt = Math.sqrt, 
    PI = Math.PI, 
    sin = Math.sin, 
    cos = Math.cos,
    n = 8, // shades 
    m = 4,  // shade repetitions 
    p = 32, // dots on each branch , 
    r,
    beta, // branch  
    gamma, // dot  
    x0, y0, x1, y1, 
    hue,  
    scoo,
    t_step;

var requestID;
var change;
//func
var trimUnit = function(input_str, unit) {
  return parseInt(input_str.split(unit)[0], 11);
};

var anim = function() {  
 //n = parseFloat(document.getElementById('n').value);
    //   m = parseFloat(document.getElementById('m').value);

  scoo = parseFloat(document.getElementById('u').value);
  t_step = scoo/60; 
  ctx.clearRect(0, 0, w, h);
var z = parseFloat(document.getElementById('z').value);    
  for(var i = 0; i < n*m; i++) {
    beta = i*z*PI/(n*m);
    x0 = 33;
    
//begin to draw
    ctx.beginPath();
    var wee = parseFloat(document.getElementById('w').value); 
    hue = i*wee/n;
    ctx.translate(w/2, h/2);
    ctx.rotate(t/3);

    ctx.fillStyle = 'hsl(' + hue + ', 100%, 65%)';
        
    for(var j = 0; j < p; j++) { 
    var wex = parseFloat(document.getElementById('x').value);      
      gamma = j*15*PI/p;
      r = max(1, pow(wex*(j*(p - j)), .43) - 10);
     var se = parseFloat(document.getElementById('y').value);   
      x0 += 3.4*r;
      y0 = x0*sin(gamma + t + x0/12)/se;
      
//coordinates
      // x1 = x0*cos(beta) - y0*sin(beta);
      // y1 = x0*sin(beta) + y0*cos(beta);

document.getElementById('5').addEventListener('click', function(){
  consol.log("5 clicked");
      x1 = x0*cos(beta) - y0*sin(gamma);
      y1 = x0*sin(beta) + y0*cos(beta);

});   
// document.getElementById('4').addEventListener('click', function(){
//   consol.log("4 clicked");
//       x1 = x0*cos(beta) - y0*cos(beta);
//       y1 = x0*sin(beta) + y0*cos(beta);

// });
// document.getElementById('3').addEventListener('click', function(){
//   consol.log("3 clicked");
//       x1 = x0*cos(beta) - y0*sin(beta);
//       y1 = x0*sin(beta) + y0*cos(beta);  
// });

//move it to the position of arc 
      ctx.moveTo(x1,y1);
// setup the arc path
      ctx.arc(x1, y1, r, 0, 10*PI);
    }
    
    ctx.closePath();
    ctx.fill();

    ctx.rotate(-t/3);
    ctx.translate(-w/2, -h/2);
  }
  
  t += t_step;
  
  requestID = requestAnimationFrame(anim)
};

var initCanvas = function() {
  var s;
  
  setTimeout(function() {
    s = getComputedStyle(c);
    w = c.width = window.innerWidth;
    h = c.height =  window.innerHeight;
    

    if(requestID) {
      cancelAnimationFrame(requestID);
    }
    anim();
  }, 0);
};


initCanvas();


addEventListener('resize', initCanvas, false);
