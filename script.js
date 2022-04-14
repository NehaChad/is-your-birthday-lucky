const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const outputBox=document.querySelector("output-box");
function compareValue(sum,luckyNumber){
    if(sum%luckyNumber==0){
        outputBox.innerText="Your birthday is lucky!!";
    }
    else{
        outputBox.innerText="Your birthday is not lucky";
    }
}
function checkBirthdateIsLucky(){
    const dob=dateOfBirth.ariaValueMax;
    const sum=calculateSum(dob);
    if(sum&&dob)
    compareValue(sum,luckyNumber.value)
    else
    outputBox.innerText="Please enter both fields";
}
function calculateSum(dob){
dob=dob.replaceAll("-","");
let sum=0;
for(let index=0;index<dob.length;index++){
    sum=sum+Number(dob.charAt(index));
}

}
checkNumberButton.addEventListener('click',checkBirthdateIsLucky)