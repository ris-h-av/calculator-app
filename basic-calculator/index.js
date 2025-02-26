const buttonsElement = document.querySelectorAll("button");
const inputField = document.getElementById("result");

for(let i=0;i<buttonsElement.length;i++){
    buttonsElement[i].addEventListener("click", ()=>{
        const buttonValue = (buttonsElement[i].textContent);
        console.log(typeof buttonValue);
        if(buttonValue === 'C'){
            clearResult();
        }
        else if(buttonValue === '='){
            calculateResult();
        }else if(buttonValue === 'DEL'){
            deleteVal();
        }
        else{
            appendValue(buttonValue);
        }
    });
}

function clearResult(){
    inputField.value = '';
}

function calculateResult(){
    inputField.value = eval(inputField.value);
}

function deleteVal(){
    let val = String(inputField.value);
    inputField.value = val.slice(0,val.length-1);
}

function appendValue(buttonValue){
    inputField.value += buttonValue;
}