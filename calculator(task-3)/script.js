const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchar = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnvalue) => {
    display.focus();
if(btnvalue === "=" && btnvalue !== " "){
    output = eval(output.replace("%","/100"));
}else if(btnvalue === "AC"){
    output = "";
}else if(btnvalue === "DEL"){
    output = output.toString().slice(0,-1);
}else{
    if(output === "" && specialchar.includes(btnvalue))return;
    output += btnvalue;
}
display.value = output;
};

buttons.forEach(button => {
    button.addEventListener("click", e => calculate(e.target.dataset.value));
})