var isPlaying = false;
let pauseButton=document.getElementById("pauseButton")//button music


pauseButton.onclick=function(){

    let audio=document.getElementById("audio")
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        pauseButton.innerHTML = '<img src="../image/th__6_-removebg-preview.png" alt="">';
        } else {
        audio.play();
        isPlaying = true;
        pauseButton.innerHTML = '<img src="../image/th__6_-removebg-preview.png" alt="">';
    }

   
}

let hello2 = document.getElementById("hello2");
let hello3 = document.getElementById("hello3");
let hello4 = document.getElementById("hello4");
let hello0 = document.getElementById("hello0");
let hell = document.getElementById("hell");
let hell2= document.getElementById("hell2");
let hell3 = document.getElementById("hell3");
let hell4 = document.getElementById("hell4");

let lightMode = document.getElementById("darkMode");

let isToggled = false;

lightMode.onclick = function () {
  isToggled = !isToggled;
  if (isToggled) {
    lightMode.src = "../image/moon - Copy.png";

    document.body.style.backgroundImage = 'url("../phone/abstract-blue-circle-black-background-technology_1142-12714.jpg")';


 
  } else {
    lightMode.src = "../phone/th__1_-removebg-preview.png";
    lightMode.style.borderColor = "white";

   
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = '#D0BBAA';

  }
};

p2();

//button display
function p2() {
  let isClicked = false;

  hell.onclick = function () {
    if (!isClicked) {
      hello0.style.display = "block";

    //   hello0.style.marginLeft=`550px`
    } else {
      hello0.style.display = "none";
    }
    isClicked = !isClicked;
  };


  hell2.onclick = function () {
    if (!isClicked) {
      hello2.style.display = "block";

    
    } else {
      hello2.style.display = "none";

    }
    isClicked = !isClicked;
  };

  hell3.onclick = function () {
    if (!isClicked) {
      hello3.style.display = "block";
    } else {
      hello3.style.display = "none";
    }
    isClicked = !isClicked;
  };

  hell4.onclick = function () {
    if (!isClicked) {
      hello4.style.display = "block";
    } else {
      hello4.style.display = "none";
    }
    isClicked = !isClicked;
  };
}