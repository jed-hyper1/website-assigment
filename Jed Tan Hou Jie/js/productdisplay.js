



let black = document.getElementById("btnblackwhite");
black.style.border = `white`


black.onclick = function () {


    black.classList.toggle("container2");

    if(black.classList.contains("container2")){
        let img1 = document.getElementById("img1");
        img1.querySelector("img").src = "../image/moon - Copy.png";
        document.body.style.backgroundColor = "#16263D"; 
        black.style.backgroundColor=`#16263D`
        let container2=document.getElementById("container2")

        container2.style.backgroundColor=`#16263D`
        
   

}

    else{
        document.body.style.backgroundColor = "aqua";//backgroundcolor
        let img1=document.getElementById("img1")
        img1.querySelector("img").src = "../phone/th__1_-removebg-preview.png";//change image
        black.style.backgroundColor=`aqua`
        let container2=document.getElementById("container2")

        container2.style.backgroundColor=`aqua`
}

}
