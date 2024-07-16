


let container3=document.querySelector(".container3")//borderstyle
container3.style.borderColor=`white`
container3.style.marginTop=`-50px`


const loading = document.getElementById("loading")

loading.style.animation = `rotate3 30s 3`

setTimeout(() => {
    // Move off-screen immediately
    const containers = document.getElementsByClassName("container3");
    const buttons = document.getElementsByClassName("button");

    for (let i = 0; i < containers.length; i++) {
        containers[i].style.top = "-1000px";
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.top = "-1000px";
        buttons[i].style.marginTop=`-20px`
    }



}, 0);

setTimeout(() => {
   
    document.body.style.backgroundImage = 'url("../image/stairs-architecture-natural-lightbackground-product-presentation-3d-rendering-illustration_240296-1.avif")'
    document.body.style.backgroundRepeat=`no-repeat`//imagine
    document.body.style.backgroundSize=`cover`
    lightMode1.style.backgroundImage = 'url("../image/stairs-architecture-natural-lightbackground-product-presentation-3d-rendering-illustration_240296-1.avif")'

    const containers = document.getElementsByClassName("container3");
    const buttons = document.getElementsByClassName("button");
    
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.top = "150px";
        containers[i].style.left = "50px";

    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.top = "50px";
        buttons[i].style.left = "50px";
    }

    loading.style.top="-1000px"
    document.body.style.backgroundColor = "white";

    let overall=document.getElementById("overall")

    overall.style.animation=`fromtop 2s 1`


    let userName= prompt("Please enter name:");
    while ( userName=== undefined || userName.trim() === "") {
        userName= prompt("Please enter name:");
      }
    alert("You entered: " + userName);
    let userEmail
    while ( userEmail=== undefined || userEmail.trim() === "") {
        userEmail = prompt("Please enter email:");
      }
    alert("You entered: " + userEmail+"gmail.com");
    alert("Enter the correct address")
    let userAddress;
    while (userAddress === undefined || userAddress.trim() === "") {
        userAddress = prompt("Please enter address:");
      }
    alert("You entered: " + userAddress);
    alert("Enter the value minimun 10 value")
    let  userTel;
    while (userTel === undefined || userTel.trim() === "") {
        userTel = prompt("Please enter Telephone:");
      }
        const areaCode = userTel.slice(0, 3);
        const exchangeCode = userTel.slice(3, 6);
        const lineNumber = userTel.slice(6, 10);
    
    const name1=document.getElementById("name")
    name1.textContent=userName
    const email1=document.getElementById("email")
    email1.textContent=userEmail
    const address1=document.getElementById("address")
    address1.textContent=userAddress
    const tel=document.getElementById("tel")
    tel.textContent=areaCode+"-"+exchangeCode+"-"+lineNumber

}, 4000);


var random = Math.floor(Math.random() * 1000000);
document.getElementById("randomNumber").textContent = random;


var date = Math.floor(Math.random() * 30) + 1; "/"
var time = Math.floor(Math.random() * 12) + 1; "/"


document.getElementById("deliverytime").textContent = date + "/" + time + "/" + "2023";


let lightMode1 = document.getElementById("lightMode1");
lightMode1.style.borderImage = 'url("../image/stairs-architecture-natural-lightbackground-product-presentation-3d-rendering-illustration_240296-1.avif")'
lightMode1.onclick = function () {
    document.body.classList.toggle("lightMode1");
    lightMode1.style.backgroundColor = `black`
    lightMode1.style.borderImage=``
    if (document.body.classList.contains("lightMode1")) {
        lightMode1.querySelector("img").src = "../image/moon - Copy.png";

        let display = document.getElementById("text")

        document.body.style.backgroundColor = "black";
        lightMode1.style.backgroundColor = `black`
        let hello = document.getElementById("hello")
        hello.style.borderColor="white"
        hello.style.backgroundColor = `black`
        display.style.color = "yellow"
      

        let container3=document.querySelector(".container3")

        container3.style.borderWidth=`2px`
        lightMode1.style.backgroundImage=``
        document.body.style.backgroundImage = 'none'
    }


    else {
        lightMode1.querySelector("img").src = "../phone/th__1_-removebg-preview.png";
        lightMode1.style.borderImage = 'url("../image/stairs-architecture-natural-lightbackground-product-presentation-3d-rendering-illustration_240296-1.avif")'
        let display = document.getElementById("text")
       // display.style.animation = ""
        // document.body.style.backgroundColor = "white";
        lightMode1.style.backgroundImage = 'url("../image/stairs-architecture-natural-lightbackground-product-presentation-3d-rendering-illustration_240296-1.avif")'
        let hello = document.getElementById("hello")
        hello.style.borderColor = "white"
        hello.style.backgroundColor = `white`
        display.style.color = ""
     

        let container3=document.querySelector(".container3")
        container3.style.borderStyle=`white`

        document.body.style.backgroundImage = 'url("../image/stairs-architecture-natural-lightbackground-product-presentation-3d-rendering-illustration_240296-1.avif")'
        document.body.style.backgroundRepeat=`no-repeat`//imagine
        document.body.style.backgroundSize=`cover`
    }
};

const finalbtn = document.getElementById("finalbtn")


finalbtn.style.padding = `10px`
finalbtn.onclick = function () {



const anchor = document.createElement("a");
anchor.href = "../html/support.html"; 
anchor.textContent = "I AM GLAD TO SERVE YOU. HAVE A GOOD DAY";
finalbtn.textContent = "";
anchor.style.textDecoration=`none`
anchor.style.color=`black`
finalbtn.appendChild(anchor);


}


let product1 = 430;
let product2 = 490;
let product3 = 590;
let product4 = 690;
let product5 = 790;
let product6 = 1499;

// Retrieve product quantities from localStorage
const storedPro1 = parseFloat(localStorage.getItem('pro1')) || 0;
const storedPro2 = parseFloat(localStorage.getItem('pro2')) || 0;
const storedPro3 = parseFloat(localStorage.getItem('pro3')) || 0;
const storedPro4 = parseFloat(localStorage.getItem('pro4')) || 0;
const storedPro5 = parseFloat(localStorage.getItem('pro5')) || 0;
const storedPro6 = parseFloat(localStorage.getItem('pro6')) || 0;

console.log(storedPro1)
console.log(storedPro2)
console.log(storedPro3)
console.log(storedPro4)
console.log(storedPro5)
console.log(storedPro6)
console.log(storedPro1)

// Calculate the total cost
const totalCost = (storedPro1 * product1) + (storedPro2 * product2) + (storedPro3 * product3) + (storedPro4 * product4) + (storedPro5 * product5) + (storedPro6 * product6);

// Display the total cost on the page
const totalprice = document.getElementById("totalprice");
totalprice.textContent ="RM"+ totalCost.toFixed(2); // Display the total with two decimal places


