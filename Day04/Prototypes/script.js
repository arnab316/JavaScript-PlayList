
// first it will look in obj if it's not aval 
// thn it will go down to proto 
let a = {

    name: 'Toyota',
    Type: 'car',
    model: 'fortuner',
    mode: '4x4',
    Price: 40000,
    run :()=>{
        alert('self running')
    }
}

let p = {
    run: ()=>{
        alert('Book now!')
    }
    
}
a.__proto__= p
a.run();
console.log(a)
