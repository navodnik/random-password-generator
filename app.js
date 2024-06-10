let btn = document.getElementById("btn");
let input = document.getElementById("input");
let renderLocation = document.getElementById("render-location")

let array = ["a", "b" , "c", "č", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "š", "t", "u", "v", "z", "ž", "A", "B", "C", "Č", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "Š", "T", "U", "V", "Z", "Ž", "#", "!", "$", "%", "&", "(", ")", "=", "?", "*", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let rand;

let password = "";

btn.addEventListener("click", function() {
    for (let i = 0; i < input.value ; i++)
    {
        rand = Math.floor(Math.random() * array.length);
        password = password + array[rand];
    } 

    renderLocation.innerHTML = "Password: " + password;

    input.value= 0;
});

document.getElementById("clear-btn").addEventListener("click", function() {
    renderLocation.innerHTML = "Password: "
})


