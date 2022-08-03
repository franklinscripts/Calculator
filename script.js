const btns  = document.querySelectorAll('#number')
var input = document.getElementById('area')
const equal = document.getElementById('equals')
const clr = document.querySelector('.clear')
const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const body = document.querySelector('body')
const container = document.querySelector('.container')
clr.addEventListener('click',clear)
let sum = ""
input.value = ""
for (i = 0; i<btns.length; i++){
    btns[i].addEventListener('click',(e) => {   
        let val = e.currentTarget.value;
        input.value += val;   
    })
}
equal.addEventListener('click', () => {
    if(input.value == ''){
        alert("Provide numbers")
    }
    else{
        sum = eval(input.value)
        input.value = sum;
    }
  
})

function clear(){
    return input.value = ""
    
}

light.addEventListener('click',() => {
    body.style.backgroundColor = "white"
    container.style.backgroundColor = "white"
    light.style.backgroundColor = "orangered"
    dark.style.backgroundColor = "white"
})
dark.addEventListener('click',() => {
    body.style.backgroundColor = " #030936"
    container.style.backgroundColor = " #030936"
    dark.style.backgroundColor = "orangered"
    light.style.backgroundColor = "white"
    
})