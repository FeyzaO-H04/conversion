// main
const main = document.createElement("div");
main.classList.add("main");
main.style.display = "flex";
main.style.alignItems = "center";
main.style.justifyContent = "center";
main.style.height = "100vh";
main.style.width = "100%";
main.style.backgroundColor = "#1C1C1C";
// Appending main
document.body.append(main);

// container
const container = document.createElement("div");
container.classList.add("container");
container.style.width = "550px";
container.style.height = "729px";
// Appending container
main.append(container);

// conversion
const conversion = document.createElement("div");
conversion.classList.add("conversion");
conversion.style.width = "550px";
conversion.style.height = "285px";
conversion.style.backgroundColor = "#6943FF";
conversion.style.display = "flex";
conversion.style.flexDirection = "column";
conversion.style.alignItems = "center";
conversion.style.justifyContent = "space-evenly"
// Appending conversion
container.append(conversion);

// header
const header = document.createElement("h1");
header.classList.add("header");
header.style.lineHeight = "38px";
header.style.fontWeight = "800";
header.style.fontSize = "28px";
header.style.color = "#ffffff";
header.textContent = "Metric/Imperial Unit Conversion"
// Appending header
conversion.append(header);

// input
const input = document.createElement("input");
input.classList.add("input");
input.style.width = "113px";
input.style.height = "79px";
input.style.backgroundColor = "#6943FF";
input.style.border = "2px solid #B295FF";
input.style.borderRadius = "5px";
input.style.lineHeight = "24px";
input.style.fontWeight = "800";
input.style.fontSize = "58px";
input.style.color = "#ffffff";
input.style.textAlign = "center";
// Appending input
conversion.append(input);

// button
const button = document.createElement("button");
button.classList.add("button");
button.style.width = "117px";
button.style.height = "42px";
button.style.borderRadius = "5px";
button.textContent = "Convert"
button.style.lineHeight = "24px";
button.style.fontWeight = "600";
button.style.fontSize = "16px"; 
// Appending button
conversion.append(button);

// cardContainer
const cardContainer = document.createElement("div");
cardContainer.classList.add("cardContainer");
cardContainer.style.width = "550px";
cardContainer.style.height = "444px";
cardContainer.style.backgroundColor = "#F4F4F4";  
cardContainer.style.display = "flex";
cardContainer.style.flexDirection = "column";
cardContainer.style.alignItems = "center";
cardContainer.style.justifyContent = "space-evenly";
// Appending cardContainer
container.append(cardContainer);

/*****************************
 
<main>
  <div class="container">

    <div class="conversion">
      <h1 class= "header"></h1>
      <input>
      <button></button>
    </div>

    <div class="cardContainer">
      <div class="box">
        <h2></h2>
        <p></p>
      </div>
      <div class="box">
        <h2></h2>
        <p></p>
      </div>
      <div class="box">
        // title
        <h2></h2>
        // numbers
        <p></p>
      </div>
    </div>
    
  </div>
</main>

 ************************************/

const cards = [
  { headLine: "Length (Meter/Feet)", calculation: "3.281" },
  { headLine: "Volume (Liters/Gallons)", calculation: "0.264" },
  { headLine: "Mass (Kilograms/Pounds)", calculation: "2.204" }
]


for(let card of cards){
  // box
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.width = "500px";
  box.style.height = "108.57px";
  box.style.borderTopLeftRadius = "5px";
  box.style.backgroundColor = "#ffffff";
  // Appending box
  cardContainer.append(box);
  cards.textContent = cards.headLine

  // create element "title"
  const title = document.createElement("h2");
  title.style.color = "#5A537B";
  title.style.fontSize = "20px";
  title.style.lineHeight = "20px";
  title.style.textAlign = "center";
  title.style.fontWeight = "600";
  title.style.paddingTop = "31px";
  // Appending title
  box.append(title);
  // title.textContent
  title.textContent = card.headLine;

  // convert button function 
  button.addEventListener ("click", calculate);
  function calculate(){
   // create element "numbers"
		const numbers = document.createElement("p");
    numbers.style.textAlign = "center";
    numbers.style.color = "#353535";
    numbers.style.fontWeight = "500";
    numbers.style.fontSize = "14px";
    numbers.style.lineHeight = "20px";
    numbers.style.marginTop = "20px";
    // Appending numbers
		box.append(numbers);

		// numbers.textContent 
   if (card.headLine === "Length (Meter/Feet)"){
      numbers.textContent = `${input.value} meters = ${(input.value * card.calculation).toFixed(3)} feet  |  ${input.value} feet = ${(input.value / card.calculation).toFixed(3)} meters`;
    } else if (card.headLine === "Volume (Liters/Gallons)"){
      numbers.textContent = `${input.value} liters = ${(input.value * card.calculation).toFixed(3)} gallons  |  ${input.value} gallons = ${(input.value / card.calculation).toFixed(3)} liters`; 
    } else if (card.headLine === "Mass (Kilograms/Pounds)"){
      numbers.textContent = `${input.value} kilos = ${(input.value * card.calculation).toFixed(3)} pounds  |  ${input.value} pounds = ${(input.value / card.calculation).toFixed(3)} kilos`; 
    } 
}}

// dblclick function resets the input
input.addEventListener ("dblclick", function(){
  input.value = ""
});









