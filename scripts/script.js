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
    if(num2!=0)
        return num1/num2;
    else return "You can't divide by zero, genius -_-";
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
const clickAdder=(button)=>{
    button.addEventListener("click",()=>{
        if(button.innerHTML!="Clear"&&button.innerHTML!="Bcksp")
            {
                if(clickCount==0)
                {displayDiv.innerHTML="";
                    clickCount++;
                }
            displayDiv.innerHTML+= button.innerHTML
            if(button.innerHTML!= "=")
                userinput+=button.innerHTML;
            else if(button.innerHTML== "="){
                if(userinput[0]!=undefined)
                    {inputArr=userinput.split(/(\d{1,}\.*\d*)([+|\-|*|/])(\d{1,}\.*\d*)/g);
                    if(inputArr.length>=5&&inputArr[inputArr.length-1]!='')
                    {
                        endOfInput=inputArr[inputArr.length-1].split(/([+|\-|*|/])(\d{1,}\.*\d*)/g)
                        endOfInput.shift();
                        inputArr.splice(inputArr.length-1,1);
                        concatArray=inputArr.concat(endOfInput);
                        console.log(concatArray);
                        
                    }
                    else{
                        concatArray=inputArr;
                    }
                    if(concatArray.length>=5)  
                        result=operate(concatArray[1],concatArray[3],concatArray[2]);
                    else
                        {
                            let resultArr=userinput.split(/(\d*)/g);
                            if(resultArr[0]!="/"&&resultArr[0]!="*")
                                result=resultArr[1];
                            else
                                result="Syntax Error";
                            if(resultArr[0]=="-")
                                result=userinput;
                            resultArr=[];
                            concatArray=[];
                            userinput="";
                         }
                    i=4;
                    while(concatArray[i]!=''&&concatArray[i]!=undefined&&concatArray.length>=5){
                        result=operate(result,concatArray[i+1],concatArray[i]);
                        i+=2;
                    }
                    if (typeof(result)=="number")
                        {displayDiv.innerHTML+=result.toFixed(2);
                            userinput="";
                            inputArr=[];
                            concatArray=[];
                        }
                    else
                        {   if(result!=undefined)
                                displayDiv.innerHTML+=result;
                            else
                                displayDiv.innerHTML+="Syntax Error";
                            userinput="";
                            inputArr=[];
                            concatArray=[];
                        }
                        displayDiv.innerHTML+="<br>";
                }
                else{
                        displayDiv.innerHTML="0";
                    }
        }
            if(button.innerHTML==".")
                button.disabled=true;
            else if(button.innerHTML=="+"||button.innerHTML=="-"||button.innerHTML=="*"||button.innerHTML=="/"||button.innerHTML=="=")
                document.getElementById("decimal-button").disabled=false;
            }
            else if(button.innerHTML=="Clear"){
                clickCount=0;
                displayDiv.innerHTML=0;
                userinput=0;
                inputArr=[];
                concatArray=[];
            }
            else if(button.innerHTML=="Bcksp")
            {
                userinput=userinput.slice(0,-1);
                if(userinput.length>0)
                    {displayDiv.innerHTML=userinput;
                    console.log("userinp length: "+userinput.length);}
                else
                    displayDiv.innerHTML=0
            }
            console.log("inside clickadder: "+userinput);
            console.log(inputArr);
            console.log("concatarraylength "+concatArray.length);
})
};
let keyValue=0;
buttonsList.forEach(clickAdder);
function clickAdder2(button){
        if(button.innerHTML!="Clear"&&button.innerHTML!="Bcksp")
            {
                if(clickCount==0)
                {displayDiv.innerHTML="";
                    clickCount++;
                }
            displayDiv.innerHTML+= button.innerHTML
            if(button.innerHTML!= "=")
                userinput+=button.innerHTML;
            else if(button.innerHTML== "="){
                if(userinput[0]!=undefined)
                    {inputArr=userinput.split(/(\d{1,}\.*\d*)([+|\-|*|/])(\d{1,}\.*\d*)/g);
                    if(inputArr.length>=5&&inputArr[inputArr.length-1]!='')
                    {
                        endOfInput=inputArr[inputArr.length-1].split(/([+|\-|*|/])(\d{1,}\.*\d*)/g)
                        endOfInput.shift();
                        inputArr.splice(inputArr.length-1,1);
                        concatArray=inputArr.concat(endOfInput);
                        console.log(concatArray);
                        
                    }
                    else{
                        concatArray=inputArr;
                    }
                    if(concatArray.length>=5)  
                        result=operate(concatArray[1],concatArray[3],concatArray[2]);
                    else
                        {
                            let resultArr=userinput.split(/(\d*)/g);
                            if(resultArr[0]!="/"&&resultArr[0]!="*")
                                result=resultArr[1];
                            else
                                result="Syntax Error";
                            if(resultArr[0]=="-")
                                result=userinput;
                            resultArr=[];
                            concatArray=[];
                            userinput="";
                         }
                    i=4;
                    while(concatArray[i]!=''&&concatArray[i]!=undefined&&concatArray.length>=5){
                        result=operate(result,concatArray[i+1],concatArray[i]);
                        i+=2;
                    }
                    if (typeof(result)=="number")
                        {displayDiv.innerHTML+=result.toFixed(2);
                            userinput="";
                            inputArr=[];
                            concatArray=[];
                        }
                    else
                        {   if(result!=undefined)
                                displayDiv.innerHTML+=result;
                            else
                                displayDiv.innerHTML+="Syntax Error";
                            userinput="";
                            inputArr=[];
                            concatArray=[];
                        }
                        displayDiv.innerHTML+="<br>";
                }
                else{
                        displayDiv.innerHTML="0";
                    }
        }
            if(button.innerHTML==".")
                button.disabled=true;
            else if(button.innerHTML=="+"||button.innerHTML=="-"||button.innerHTML=="*"||button.innerHTML=="/"||button.innerHTML=="=")
                document.getElementById("decimal-button").disabled=false;
            }
            else if(button.innerHTML=="Clear"){
                clickCount=0;
                displayDiv.innerHTML=0;
                userinput=0;
                inputArr=[];
                concatArray=[];
            }
            else if(button.innerHTML=="Bcksp")
            {
                userinput=userinput.slice(0,-1);
                if(userinput.length>0)
                    {displayDiv.innerHTML=userinput;
                    console.log("userinp length: "+userinput.length);}
                else
                    displayDiv.innerHTML=0
            }
            console.log("inside clickadder2: "+userinput);
            console.log(inputArr);
            console.log("concatarraylength "+concatArray.length);

}
window.addEventListener("keydown",(event)=>{
    switch(event.key){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": 
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
        case "Delete":
        case "Backspace": keyValue= document.getElementById(event.key);
            
            console.log(event.key+"pressed");
            clickAdder2(keyValue);
            break;
        case "Enter":keyValue= document.getElementById("=");
            clickAdder2(keyValue);
            console.log(event.key+"pressed");
            event.preventDefault();
            break;
    }
})
