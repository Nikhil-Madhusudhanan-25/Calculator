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
    res=0,
    result=0,
    userinput="",
    inputArr=[],
    endOfInput=[],
    concatArray=[],
    i=0,
    clickCount=0;
function operate(a, b, op)
{
        switch(op){
            case '+': res=add(+a,+b);
            return res;
            break;
            case '-': res=subtract(+a,+b);
            return res;
            break;
            case '*': res=multiply(+a, +b);
            return res;
            break;
            case '/': res=divide(+a, +b);
            return res;
            break;
            default: console.log("Invalid operation");
        }
    }
let displayDiv= document.getElementById('display');
let buttonsDiv=document.getElementById('buttons');
let buttonsList= buttonsDiv.querySelectorAll('button');
buttonsList.forEach(button=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML!="Clear")
            {
                if(clickCount==0)
                {displayDiv.innerHTML="";
                    clickCount++;
            }
            displayDiv.innerHTML+= button.innerHTML
            if(button.innerHTML!= "=")
                userinput+=button.innerHTML;
            else if(button.innerHTML== "="){
                //userinput+="test123456789";
                inputArr=userinput.split(/(\d{1,})([+|\-|*|/])(\d{1,})/g);
                if(inputArr.length>=5&&inputArr[inputArr.length-1]!='')
                {
                    
                    endOfInput=inputArr[inputArr.length-1].split(/([+|\-|*|/])(\d{1,})/g);
                    endOfInput.shift();
                    inputArr.splice(inputArr.length-1,1);
                    concatArray=inputArr.concat(endOfInput);
                    console.log(concatArray);
                    
                }
                else{
                    concatArray=inputArr;
                }
                result=operate(concatArray[1],concatArray[3],concatArray[2]);
                i=4;
                while(concatArray[i]!=''){
                    result=operate(result,concatArray[i+1],concatArray[i]);
                    i+=2;
                }
                displayDiv.innerHTML+=result.toPrecision(3);
            }}
            else if(button.innerHTML=="Clear"){
                clickCount=0;
                displayDiv.innerHTML=0;
                userinput=0;
                inputArr=[];
                concatArray=[];
            }
            console.log(userinput);
            console.log(inputArr);
    })
});
//console.log(userinput);