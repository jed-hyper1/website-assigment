
let lightMode = document.getElementById("darkMode");
let header = document.querySelector(".header");
let isToggled = false;

lightMode.onclick = function () {
  isToggled = !isToggled; 

  if (isToggled) {
    lightMode.src = "../image/moon - Copy.png";
    document.body.style.backgroundColor = "#1F1B24";   
    lightMode.style.borderColor = "#16263D";
    header.style.color = "white";//h1 color
    
   let button=document.querySelector(".text")
   button.style.color=`black`

    let belowheader=document.querySelector(".belowheader")
    belowheader.style.backgroundColor=`#1F1B24`
 
    let belowheader1=document.querySelector(".belowheader1")
    belowheader1.style.color=`rgb(186, 240, 181)`
    let a = document.getElementsByTagName("a");

for (let e = 0; e < 7; e++) {
  a[e].style.color = "white";
}


  } 
  else {
    lightMode.src = "../image/th (1).jpeg";
    lightMode.style.borderColor = "white";
    document.body.style.backgroundColor = "white";
    header.style.color = ""; //h1 color
    let button=document.querySelector(".text")
    button.style.color=``

    let belowheader=document.querySelector(".belowheader")//button getstarted
    belowheader.style.backgroundColor=``

    let belowheader1=document.querySelector(".belowheader1")// a color
    belowheader1.style.color=``

    let a = document.getElementsByTagName("a");

    for (let e = 0; e < 7; e++) {
      a[e].style.color = "black";
    }
    

   
  }

};
