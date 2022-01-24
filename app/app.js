
let number = 1;
const buttonCreate = document.querySelector("button"); // take information from buttom

const addElements = function() {
    const addItem = document.createElement("li");
    addItem.textContent = number;

if (number%3 == 0) {
    // console.log("work") // check work modulo
    addItem.classList.add("noob");
}

if (number%9 == 0){
    alert(9);
}

document.body.appendChild(addItem); 
number +=2; // == number = number + 2;
}

buttonCreate.addEventListener('click', addElements); // Listerner
