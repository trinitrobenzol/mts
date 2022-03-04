/*
Fun to show circle div
*/


function startAnimation(e) {
  console.log('here')
  let playButton = document.getElementById('play')
  playButton.classList.add('active')
  setTimeout(function(){
    playButton.style.display='none'
    document.getElementById("container").style.display = ""
  }, 800)
  
  
  
}

/*
Quotes Engine
*/


$('.quotes').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 6000,
  speed: 800,
  slidesToShow: 1,
  adaptiveHeight: true
});


$( document ).ready(function() {
$('.no-fouc').removeClass('no-fouc');
});

/*
Music Play Engine
*/


$(document).ready(function() {
  var btn = $(".button");
  btn.click(function() {
    btn.toggleClass("paused");
    return false;
  });
});


    let a=0;document.getElementsByTagName("svg")[0].addEventListener("click",function(){
if(a==0){
document.getElementsByTagName("audio")[0].play();a++;document.querySelector("svg").style.opacity="1";
}else{
document.querySelector("audio").pause();a--;document.querySelector("i").style.opacity=".5";
}
});


/*
Circle Breath Animation
*/


const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Вдох';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Задержи дыхание';

    setTimeout(() => {
      text.innerText = 'Выдох';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);