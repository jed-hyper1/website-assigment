let button = document.getElementById("button");
button.style.width=`60px`
button.style.height=`60px`





var lastproduct = document.getElementById("lastproduct");//link with lastproduct

lastproduct.onclick = function() {
  var lastlink = document.createElement("a");
  lastlink.href = "../../Gan Khai Boon/pinewatch.html";
  lastproduct.appendChild(lastlink);
  lastlink.click();
};


let image=document.getElementById("image")
image.style.width=`50px`
image.style.height=`50px`

       
  button.onclick = function () {
  button.classList.toggle("container2");

  if (button.classList.contains("container2")) {
    button.querySelector("img").src = "../image/moon - Copy.png";
    button.style.backgroundColor = "#16263D";
    document.body.style.backgroundColor = "#16263D";
    
    const texth1 = document.querySelectorAll("h1");
    texth1.forEach(function (h1) {
  h1.style.color = "white";
});

    let text1=document.getElementById("text1")
    text1.style.color=`white`

    let text2=document.getElementById("text2")
    text2.style.color=`white`

        
    let footBuy=document.querySelector(".footBuy")
    footBuy.style.color=`black`
    footBuy.style.backgroundColor=`#F5F5F5`

    let footService=document.querySelector(".footService")
    footService.style.color=`black`
    footService.style.backgroundColor=`#F5F5F5`
    
    
    let footSupport=document.querySelector(".footSupport")
    footSupport.style.color=`black`
    footSupport.style.backgroundColor=`#F5F5F5`

    
    let footPhone=document.querySelector(".footPhone")
    footPhone.style.color=`black`
    footPhone.style.backgroundColor=`#F5F5F5`

    let  footAbout=document.querySelector(".footAbout")
    footAbout.style.color=`black`
    footAbout.style.backgroundColor=`#F5F5F5`
   
    let  footMember=document.querySelector(".footMember")
    footMember.style.color=`black`
    footMember.style.backgroundColor=`#F5F5F5`

    let footer=document.querySelector("footer")
    footer.style.color=`black`
    footer.style.backgroundColor=`#F5F5F5`

    var textElements1 = document.querySelectorAll(".text8");

    textElements1.forEach(function(element) {
      element.style.color = "black";
    });

    var textElements2 = document.querySelectorAll(".text7");

    textElements2.forEach(function(element1) {
      element1.style.color = "black";
    });
  
    let texta=document.getElementsByTagName("a")
    for(let w=0; w<=7;w++){

      texta[w].style.color=`white`
    }
  }

    else {
    button.querySelector("img").src = "../phone/th__1_-removebg-preview.png";
    button.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    

    const texth1 = document.querySelectorAll("h1");
    texth1.forEach(function (h1) {
    h1.style.color = "";
});

let text1=document.getElementById("text1")
text1.style.color=``

let text2=document.getElementById("text2")
text2.style.color=``


let footBuy=document.querySelector(".footBuy")
footBuy.style.color=``
footBuy.style.backgroundColor=``


let footService=document.querySelector(".footService")
footService.style.color=``
footService.style.backgroundColor=``


let footSupport=document.querySelector(".footSupport")
footSupport.style.color=``
footSupport.style.backgroundColor=``


let footPhone=document.querySelector(".footPhone")
footPhone.style.color=``
footPhone.style.backgroundColor=``

let  footAbout=document.querySelector(".footAbout")
footAbout.style.color=``
footAbout.style.backgroundColor=``

let  footMember=document.querySelector(".footMember")
footMember.style.color=``
footMember.style.backgroundColor=``

let footer=document.querySelector("footer")
footer.style.color=``
footer.style.backgroundColor=``

var textElements1 = document.querySelectorAll(".text8");

textElements1.forEach(function(element) {
  element.style.color = "white";
});

var textElements2 = document.querySelectorAll(".text7");

textElements2.forEach(function(element1) {
  element1.style.color = "white";
});

let texta=document.getElementsByTagName("a")
for(let w=0; w<=7;w++){

  texta[w].style.color=``
}

    }
};
