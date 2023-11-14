/* document.querySelector('button').addEventListener('click', ()=>{
    alert('Hola!')
})*/


let btn = document.querySelector('button');
 

btn.addEventListener('click', inputMsg)


function inputMsg(){

let name = prompt('Enter Your Name ');
  btn.textContent = 'Roll NO. 1 ' + name
 

}
