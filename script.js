
// $(document).ready(function () {


// // Select all links with hashes
// $('a[href*="#"]')
//   // Remove links that don't actually link to anything
//   .not('[href="#"]')
//   .not('[href="#0"]')
//   .click(function(event) {
//     // On-page links
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
//       && 
//       location.hostname == this.hostname
//     ) {
//       // Figure out element to scroll to
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       // Does a scroll target exist?
//       if (target.length) {
//         // Only prevent default if animation is actually gonna happen
//         event.preventDefault();
//         $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000, function() {
//           // Callback after animation
//           // Must change focus!
//           var $target = $(target);
//           $target.focus();
//           if ($target.is(":focus")) { // Checking if the target was focused
//             return false;
//           } else {
//             // $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             // $target.focus(); // Set focus again
//           };
//         });
//       }
//     }
//   });

//   });


window.addEventListener('load',function(){



var first = document.getElementById("first");
var buttons1 = document.getElementsByClassName("st1");
var butt = document.getElementsByClassName("st2");
var second = document.getElementById("second");
var buttons4 = document.getElementsByClassName("st4");
var buttons5 = document.getElementsByClassName("st5");
var third = document.getElementById("third");
var buttons7 = document.getElementsByClassName("st7");
var buttons8 = document.getElementsByClassName("st8");
var fourth = document.getElementById("fourth");
var buttons10 = document.getElementsByClassName("st10");
var buttons11 = document.getElementsByClassName("st11");
var fifth = document.getElementById("fifth");
var buttons13 = document.getElementsByClassName("st13");
var buttons14 = document.getElementsByClassName("st14");

var pathes = document.getElementsByTagName("path");

first.onmouseover = function() {
for(var i = 0; i < buttons1.length; ++i){

         buttons1[i].setAttribute("stroke", "url(#grad2)");

        buttons1[i].classList.toggle('anim');
        console.log("over");



    }
for(var i = 0; i < butt.length; ++i){

        butt[i].setAttribute("stroke", "url(#grad1)");
        butt[i].classList.toggle('anim');
        console.log("over");
    }


 }
// first.onmouseout = function() {

// for(var i = 0; i < butt.length; ++i){

//         butt[i].setAttribute("stroke", "url(#grad1)");
//         butt[i].classList.toggle('anim');
//         console.log("over");
//     }


//  }


second.onmouseover = function() {
for(var i = 0; i < buttons4.length; ++i){


        buttons4[i].setAttribute("stroke", "url(#grad1)");
        buttons4[i].classList.toggle('anim');
    }
for(var i = 0; i < buttons5.length; ++i){

        buttons5[i].setAttribute("stroke", "url(#grad2)");
        buttons5[i].classList.toggle('anim');
    }

 }

third.onmouseover = function() {
for(var i = 0; i < buttons7.length; ++i){


        buttons7[i].setAttribute("stroke", "url(#grad1)");
        buttons7[i].classList.toggle('anim');
    }
for(var i = 0; i < buttons8.length; ++i){

        buttons8[i].setAttribute("stroke", "url(#grad2)");
        buttons8[i].classList.toggle('anim');
    }

 }

fourth.onmouseover = function() {
for(var i = 0; i < buttons10.length; ++i){


        buttons10[i].setAttribute("stroke", "url(#grad1)");
        buttons10[i].classList.toggle('anim');
    }
for(var i = 0; i < buttons11.length; ++i){

        buttons11[i].setAttribute("stroke", "url(#grad2)");
        buttons11[i].classList.toggle('anim');
    }

 }

fifth.onmouseover = function() {
for(var i = 0; i < buttons13.length; ++i){


        buttons13[i].setAttribute("stroke", "url(#grad1)");
        buttons13[i].classList.toggle('anim');
    }
for(var i = 0; i < buttons14.length; ++i){

        buttons14[i].setAttribute("stroke", "url(#grad2)");
        buttons14[i].classList.toggle('anim');
    }

 }




var lightbox = document.getElementById("lightbox");
var close = document.getElementById("close");
var refract = document.getElementById("refract");

 first.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
refract.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
refract.style.opacity = "1";
close.style.opacity = "1";


 })
var mvem = document.getElementById("mvem");
 third.addEventListener('click', function(){

lightbox.style.visibility = "visible";
mvem.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
mvem.style.opacity = "1";
close.style.opacity = "1";
 })

 var mix = document.getElementById("mix");
fourth.addEventListener('click', function(){
lightbox.style.visibility = "visible";
mix.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
mix.style.opacity = "1";
close.style.opacity = "1";
 })
 
  var gall = document.getElementById("gall");
second.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
gall.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
gall.style.opacity = "1";
close.style.opacity = "1";
 })

  var plan = document.getElementById("plan");
fifth.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
plan.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
plan.style.opacity = "1";
close.style.opacity = "1";
 })

var six = document.getElementById("six")
var visual= document.getElementById("visual");
six.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
visual.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
visual.style.opacity = "1";
close.style.opacity = "1";
 })


var seven = document.getElementById("seven")
  var evil= document.getElementById("evil");
seven.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
evil.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
evil.style.opacity = "1";
close.style.opacity = "1";
 })

var eight = document.getElementById("eight")
  var geometry= document.getElementById("geometry");
eight.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
geometry.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
geometry.style.opacity = "1";
close.style.opacity = "1";
 })

var nine = document.getElementById("nine")
  var connection= document.getElementById("connection");
nine.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
connection.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
connection.style.opacity = "1";
close.style.opacity = "1";
 })

var ten = document.getElementById("ten")
  var teatime= document.getElementById("teatime");
ten.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
teatime.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
teatime.style.opacity = "1";
close.style.opacity = "1";
 })

var eleven = document.getElementById("eleven")
  var alisa= document.getElementById("alisa");
eleven.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
alisa.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
alisa.style.opacity = "1";
close.style.opacity = "1";
 })

var twelve = document.getElementById("twelve")
  var macy= document.getElementById("macy");
twelve.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
macy.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
macy.style.opacity = "1";
close.style.opacity = "1";
 })

var thirteen = document.getElementById("thirteen")
  var black= document.getElementById("black");
thirteen.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "visible";
black.style.visibility = "visible";
close.style.visibility = "visible";
lightbox.style.opacity = "1";
black.style.opacity = "1";
close.style.opacity = "1";
 })


 close.addEventListener('click', function(){
console.log("clicked");
lightbox.style.visibility = "hidden";
close.style.visibility = "hidden";

refract.style.visibility = "hidden";
mvem.style.visibility = "hidden";
mix.style.visibility = "hidden";
gall.style.visibility = "hidden";
plan.style.visibility = "hidden";
evil.style.visibility = "hidden";
visual.style.visibility = "hidden";
geometry.style.visibility = "hidden";
connection.style.visibility = "hidden";
teatime.style.visibility = "hidden";
alisa.style.visibility = "hidden";
macy.style.visibility = "hidden";
black.style.visibility = "hidden";

mvem.style.opacity = "0";
refract.style.opacity = "0";
mix.style.opacity = "0";
gall.style.opacity = "0";
plan.style.opacity = "0";
evil.style.opacity = "0";
visual.style.opacity = "0";
geometry.style.opacity = "0";
connection.style.opacity = "0";
teatime.style.opacity = "0";
alisa.style.opacity = "0";
macy.style.opacity = "0";
black.style.opacity = "0";

lightbox.style.opacity = "0";
close.style.opacity = "0";




 })

});


// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
 
//     $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();
//       $(document).off("scroll");
 
//       $('a').each(function () {
//         $(this).removeClass('active');
//       })
//       $(this).addClass('active');
 
//       var target = this.hash;
//       $target = $(target);
//       $('html, body').stop().animate({
//         'scrollTop': $target.offset().top+2
//       }, 500, 'swing', function () {
//         window.location.hash = target;
//         $(document).on("scroll", onScroll);
//       });
//     });
//   });
 
//   function onScroll(event){
//     var scrollPosition = $(document).scrollTop();
//     $('nav a').each(function () {
//       var currentLink = $(this);
//       var refElement = $(currentLink.attr("href"));
//       if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
//         $('nav ul li a').removeClass("active");
//         currentLink.addClass("active");
//       }
//       else{
//         currentLink.removeClass("active");
//       }
//     });
  
//   }

  var canvas = document.getElementById('canvas')
  , context = canvas.getContext('2d')
  , img = new Image()
  , w
  , h
  , offset
  , glitchInterval;


img.onload = function() {
  init();
  window.onresize = init;
};

var init = function() {
  clearInterval(glitchInterval);
  canvas.width = w = window.innerWidth;
  offset = w * .1;
  canvas.height = h = ~~(500 * ((w - (offset * 1)) / img.width));
  glitchInterval = setInterval(function() {
    clear();
    context.drawImage(img, 0, 110, img.width, 175, offset, 0, w - (offset * 2), h);
    setTimeout(glitchImg, randInt(250, 1000));
  }, 500);
};

var clear = function() {
  context.rect(0, 0, w, h);
  context.fill();
};
    
var glitchImg = function() {
  for (var i = 0; i < randInt(1, 13); i++) {
    var x = Math.random() * w;
    var y = Math.random() * h;
    var spliceWidth = w - x;
    var spliceHeight = randInt(5, h / 3);
    context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
    context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
  }
};

var randInt = function(a, b) {
  return ~~(Math.random() * (b - a) + a);
};
