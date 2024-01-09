function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2    ;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
let num1=0,
    num2=0,
    operator="",
    result=0;
function operate(a, b, op)
{
        switch(op){
            case '+': result=add(+a,+b);
            break;
            case '-': result=subtract(+a,+b);
            break;
            case '*': result=multiply(+a, +b);
            break;
            case '/': result=divide(+a, +b);
            break;
            default: console.log("Invalid operation");
        }
    }
let displayDiv= document.getElementById('display');
displayDiv.innerHTML=" ";
let buttonsDiv=document.getElementById('buttons');
let buttonsList= buttonsDiv.querySelectorAll('button');
buttonsList.forEach(button=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML!="Clear")
            displayDiv.innerHTML+= button.innerHTML;
    })
});
//console.log(buttonsList);