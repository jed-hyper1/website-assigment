
const finalbtn = document.getElementById("return");

finalbtn.style.padding = "10px";
finalbtn.style.marginLeft = "120px";
finalbtn.style.marginTop=`-30px`
finalbtn.onclick = function () {

  window.location.href = "../html/productpage.html";
};



//loading function
const loading = document.getElementById("loading")
loading.style.left=`650px`
loading.style.bottom=`250px`

loading.style.animation = `rotate3 25s 1`
let grid1=document.querySelector(".grid2")
let button1=document.querySelector("button")

setTimeout(() => {
  grid1.style.display = "none";
  button.style.display=`none`
  finalbtn.style.display=`none`
  loading.style.display=`block`


}, 0);

setTimeout(() => {

  grid1.style.display = "block";
  button.style.display=`block`
  loading.style.display=`none`
  finalbtn.style.display=`block`


}, 4000);


let button = document.getElementById("button");
let elements = document.querySelectorAll(".grid2"); 
document.documentElement.style.margin = 'auto';//
document.body.style.backgroundColor=`rgb(234, 210, 168)`//
button.style.backgroundColor = "rgb(234, 210, 168)";

button.onclick = function () {
  button.classList.toggle("container2");

  if (button.classList.contains("container2")) {
    button.querySelector("img").src = "../image/moon - Copy.png";
    button.style.backgroundImage = 'url("../image/dark-hexagonal-background-with-gradient-color_79603-1409.jpg")';
    // document.body.style.backgroundColor = "#16263D";
    //document.body.style.backgroundImage=``//
    document.body.style.backgroundImage = 'url("../image/dark-hexagonal-background-with-gradient-color_79603-1409.jpg")';
    document.body.style.backgroundRepeat=`no-repeat`
    document.body.style.backgroundSize=`cover`
    
  


   
  

    elements.forEach((element) => {
      //element.style.animation = "animate 10s infinite ";
      element.style.backgroundColor=``//
      element.style.color = "rgb(253, 201, 5) "; 
      
      
      let loading=document.getElementsByTagName("caption")
      for(let i=0; i<loading.length; i++){
        loading[i].style.color=`rgb(255, 212, 0)`
      }    
      let loading2=document.getElementsByTagName("h1")

      for(let i=0; i<loading.length; i++){
        loading2[i].style.color=`rgb(255, 212, 0) `
      }
    });
  }
  
  else {
    button.querySelector("img").src = "../phone/th__1_-removebg-preview.png";
    button.style.backgroundImage = 'none';
    button.style.backgroundColor = "rgb(234, 210, 168)";
 
    document.body.style.backgroundColor = "rgb(234, 210, 168)";
    document.body.style.backgroundImage = 'none';

    elements.forEach((element) => {
      element.style.color = ""; 
      element.style.backgroundColor=``//
      let loading=document.getElementsByTagName("caption")

      for(let i=0; i<loading.length; i++){
        loading[i].style.color=``
      }
     
      let loading2=document.getElementsByTagName("h1")

      for(let i=0; i<loading.length; i++){
        loading2[i].style.color=``
      }
    });
   
  }
};


