

let a = {

    name: 'Toyota',
    Type: 'car',
    model: 'fortuner',
    mode: '4x4',
    Price: 40000,
}

let p = {
    run: ()=>{
        alert('Book now!')
    }
    
}
a.__proto__= p
a.run();
console.log(a)
