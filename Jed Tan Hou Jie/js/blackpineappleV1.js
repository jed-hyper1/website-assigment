
const finalbtn = document.getElementById("return");//return function
finalbtn.onclick = function () {

  window.location.href = "../html/productpage.html";
};
//css of return function
finalbtn.style.padding = "10px";
finalbtn.style.marginLeft = "120px";
finalbtn.style.marginTop=`-30px`



//loading function
const loading = document.getElementById("loading")//loading design
loading.style.left=`650px`
loading.style.bottom=`250px`

loading.style.animation = `rotate3 25s 1`//loading image
let grid1=document.querySelector(".grid1")

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


let button = document.getElementById("button");//light night mode
let elements = document.querySelectorAll(".grid1"); 
document.documentElement.style.margin = 'auto';//entire page
document.body.style.backgroundColor=`#F5DADF`//entire page
button.style.backgroundColor = "#F5DADF";


  button.onclick = function () {
  button.classList.toggle("container2");

  if (button.classList.contains("container2")) {
    button.querySelector("img").src = "../image/moon - Copy.png";//button img
    button.style.backgroundImage = 'url("../image/gradient-black-backgrounds-with-golden-frames_23-2149150610.avif")';
    document.body.style.backgroundImage = 'url("../image/gradient-black-backgrounds-with-golden-frames_23-2149150610.avif")';
    document.body.style.backgroundRepeat=`no-repeat`
    document.body.style.backgroundSize=`cover`
 
    elements.forEach((element) => {


      element.style.color=`white` //color of grid
      let loading=document.getElementsByTagName("caption")//caption color
      for(let i=0; i<loading.length; i++){
        loading[i].style.color=`white`
      }
 
      let loading2=document.getElementsByTagName("h1")//h1 color

      for(let i=0; i<loading.length; i++){
        loading2[i].style.color=`white`
      }
    });
   
  }
  
  else {
    button.querySelector("img").src = "../phone/th__1_-removebg-preview.png";
    button.style.backgroundColor = "#F5DADF";
   document.body.style.backgroundColor = '#F5DADF';
   document.body.style.backgroundImage = 'none';
   button.style.backgroundImage = 'none';
  

    elements.forEach((element) => {

      element.style.color=``
      let loading=document.getElementsByTagName("caption")

      for(let i=0; i<loading.length; i++){
        loading[i].style.color=``//
      }
     
      let loading2=document.getElementsByTagName("h1")

      for(let i=0; i<loading.length; i++){
        loading2[i].style.color=``//
      }
    });
   


  }
};



