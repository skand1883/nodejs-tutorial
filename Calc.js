let Num1=0;
let Num2=0;
let Oper="+";



const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

button1.onclick=Number1()
button2.onlcick=Operation()
button3.onclick=Number2()

function Number1(){
    Num1=prompt("Enter number1")


}

function Operation(){
    Oper=prompt("Choose one of operation to be performed","+,-,*,/,%")


}

function Number2(){
     Num2= prompt("Enter number2")
}

if(Oper=="+"){
    button1.innerText=Num1;
    button2.innerText=Oper;
    button3.innerText=Num2;
    button5.innerText=Num1+Num2;
}
if(Oper=="-"){
    button1.innerText=Num1;
    button2.innerText=Oper;
    button3.innerText=Num2;
    button5.innerText=Num1-Num2;
}
if(Oper=="*"){
    button1.innerText=Num1;
    button2.innerText=Oper;
    button3.innerText=Num2;
    button5.innerText=Num1*Num2;
}
if(Oper=="/"){
    button1.innerText=Num1;
    button2.innerText=Oper;
    button3.innerText=Num2;
        if(Num2==0){
        button5.innerText="Not defined";}
        else
        button5.innerText=Num1/Num2;
}
if(Oper=="%"){
    button1.innerText=Num1;
    button2.innerText=Oper;
    button3.innerText=Num2;
    button5.innerText=Num1%Num2;
}




