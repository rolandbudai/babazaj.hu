const colorBtn = document.querySelector(".colorBtn");
const klikk = document.querySelector("img");
const body = document.querySelector("body");
const colors = ["#4286f4", "#E11FD9", "#a0db8e"]
const button1 = document.querySelector(".button1")
const button2 = document.querySelector(".button2")

klikk.addEventListener('click', changeColor);

let n = 0;

function changeColor() {

  body.style.backgroundColor = colors[n];

  if (n < colors.length-1){
      n = n+1;
  } else {
    n = 0;
  }};

  function randombg(){
    let random= Math.floor(Math.random() * 3) + 0;
    let backgrounds = ["url('img/hanga1.jpg')",
                   "url('img/hanga2.jpg')",
                   "url('img/hanga3.jpg')"];

    document.getElementById("random").style.backgroundImage=backgrounds[random];
  };

const audio1 = new Audio("sound/Noise01.mp3") ;
const audio2 = new Audio("sound/Noise02.mp3") ;

audio1.loop = true;
audio2.loop = true;

let playing = false;

function onoff1() {
  if (playing === false){
    audio1.play();
    playing = true;
  } else {
    audio1.pause();
    playing = false;
  }
};

function onoff2() {
  if (playing === false){
    audio2.play();
    playing = true;
  } else {
    audio2.pause();
    playing = false;
  }
};

function stopbutton1(){
  button1.style.backgroundImage = "url('img/button.jpg')";
}

function stopbutton2(){
  button2.style.backgroundImage = "url('img/wash.jpg')";
}

function playbutton1(){
  if (playing === false){
  button1.style.backgroundImage = "url('img/buttongif.gif')";
}else{
  stopbutton1();}
};

function playbutton2(){
  if (playing === false){
  button2.style.backgroundImage = "url('img/washgif.gif')";
}else{
    stopbutton2();}
};
