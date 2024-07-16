
document.body.style.backgroundImage = 'url("../backgroundimage/abstract-rainbow-6296890_1280.webp")';
document.body.style.backgroundSize=`cover`
document.body.style.fontWeight=`600`


let table=document.getElementsByTagName("table")
for(let y=0; y<table.length;y++){
    table[y].style.backgroundImage = 'url("../backgroundimage/abstract-rainbow-6296890_1280.webp")';
}

const submitButton = document.getElementById("Ebutton");

const button = document.getElementById("rotateImg");//buttonrotate

// submitButton.style.marginTop=`80px`
submitButton.style.marginBottom=`100px`
submitButton.onclick = function () {
    setTimeout(function () {
        submitButton.innerHTML = "SUCCESSFUL";
    }, 4200);

    const pro1 = parseFloat(document.getElementById("pro1").value) || 0;
    const pro2 = parseFloat(document.getElementById("pro2").value) || 0;
    const pro3 = parseFloat(document.getElementById("pro3").value) || 0;
    const pro4 = parseFloat(document.getElementById("pro4").value) || 0;
    const pro5 = parseFloat(document.getElementById("pro5").value) || 0;
    const pro6 = parseFloat(document.getElementById("pro6").value) || 0;
    

    const selectElement = document.getElementById("select5");
    const selectedValue = selectElement.value ; 

    // let text = document.getElementById("hello");
    // text.innerHTML = "<b>after click once remember to refresh<b>";
    // text.style.textTransform = "uppercase";
    // text.style.marginTop = "40px";
    // text.style.letterSpacing = "5px";
    // text.style.textAlign = "center";


    button.style.animation='rotate2 5s 1'


    localStorage.setItem('pro1', pro1);
    localStorage.setItem('pro2', pro2);
    localStorage.setItem('pro3', pro3);
    localStorage.setItem('pro4', pro4);
    localStorage.setItem('pro5', pro5);
    localStorage.setItem('pro6', pro6);
    localStorage.setItem('selectedValue', selectedValue);


output1.textContent=pro1
output2.textContent=pro2
output3.textContent=pro3
output4.textContent=pro4
output5.textContent=pro5
output6.textContent=pro6
output7.textContent=selectedValue

console.log(pro1);
console.log(pro2);
console.log(pro3);
console.log(pro4);
console.log(pro5);
console.log(pro6);
console.log(selectedValue)



    
}


let output1=document.getElementById("output1")
let output2=document.getElementById("output2")
let output3=document.getElementById("output3")
let output4=document.getElementById("output4")
let output5=document.getElementById("output5")
let output6=document.getElementById("output6")
let output7=document.getElementById("output7")



//dark mode function
let black = document.getElementById("btnblackwhite");
black.style.backgroundImage = 'url("../backgroundimage/abstract-rainbow-6296890_1280.webp")';
black.onclick = function () {


    black.classList.toggle("container2");

    if(black.classList.contains("container2")){
       
        let img1 = document.getElementById("img1");
        img1.querySelector("img").src = "../image/moon - Copy.png";
        document.body.style.backgroundImage=`none`
        document.body.style.backgroundColor = "#16263D"; 
        img1.style.backgroundColor = "#16263D"; 
        black.style.backgroundColor=`#16263D`
        black.style.borderColor=`#16263D`
        img1.style.backgroundImage=`none`

        output1.style.color=`rgb(255, 212, 0)`
        output2.style.color=`rgb(255, 212, 0)`
        output3.style.color=`rgb(255, 212, 0)`
        output4.style.color=`rgb(255, 212, 0)`
        output5.style.color=`rgb(255, 212, 0)`
        output6.style.color=`rgb(255, 212, 0)`
        output7.style.color=`rgb(255, 212, 0)`
     

        let table=document.getElementsByTagName("table")
        for(let y=0; y<table.length;y++){
            table[y].style.backgroundColor=`#16263D`   
            table[y].style.backgroundImage=`none`
        }

        let td=document.getElementsByTagName("td")
        for(let o=0; o<td.length;o++){
            td[o].style.borderColor=`rgb(86, 204, 242) `     
        }

        let th=document.getElementsByTagName("th")
        for(let t=0; t<th.length;t++){
            th[t].style.borderColor=`rgb(86, 204, 242)`  
            th[t].style.color=`rgb(255, 212, 0)`
        }
     

}

    else{
    document.body.style.backgroundColor = "aqua";//backgroundcolor
    let img1=document.getElementById("img1")
    img1.querySelector("img").src = "../phone/th__1_-removebg-preview.png";//change image
    img1.style.border = "";
    img1.style.backgroundImage = 'url("../backgroundimage/abstract-rainbow-6296890_1280.webp")';
    black.style.backgroundImage = 'url("../backgroundimage/abstract-rainbow-6296890_1280.webp")';
    black.style.borderColor=``
    // document.body.style.backgroundColor = "aqua"; 
    document.body.style.backgroundImage = 'url("../backgroundimage/abstract-rainbow-6296890_1280.webp")';
    document.body.style.backgroundSize=`cover`
    document.body.style.fontWeight=`600`

    output1.style.color=``
    output2.style.color=``
    output3.style.color=``
    output4.style.color=``
    output5.style.color=``
    output6.style.color=``
    output7.style.color=``
    

    let table=document.getElementsByTagName("table")
    for(let y=0; y<table.length;y++){
        table[y].style.backgroundColor=`transparent`         
    }

    let td=document.getElementsByTagName("td")
    for(let o=0; o<td.length;o++){
        td[o].style.borderColor=``     
    }

    let th=document.getElementsByTagName("th")
    for(let t=0; t<th.length;t++){
        th[t].style.borderColor=``   
        th[t].style.color=`` 

    }
    
};

}
