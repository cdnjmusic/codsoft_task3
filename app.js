let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

window.addEventListener('keydown', function(e) {
    let key = e.key;
    if (key >= 0 && key <= 9) { // If the key is a number
        string += key;
        input.value = string;
    } else if (key === '+' || key === '-' || key === '*' || key === '/') { // If the key is an operator
        string += key;
        input.value = string;
    } else if (key === 'Enter') { // If the key is Enter, calculate the result
        string = eval(string);
        input.value = string;
    } else if (key === 'Backspace') { // If the key is Backspace, delete the last character
        string = string.substring(0, string.length-1);
        input.value = string;
    } else if (key === 'Escape') { // If the key is Escape, clear all
        string = "";
        input.value = string;
    }
});