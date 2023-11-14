
//loops
/*
for (let i = 1; i <= 10; i++) {
    console.log(`im done ${i}`)
    
}*/

/*
let i =0;
while (i <=10) {
    console.log(`testing ${i}`)
    i++
}
*/
let j = 0;
do {
    console.log(`im running in my ways `)
    j++
} while (j < 10);


let animal = {
    name: 'Tiger',
    leg: 4,
}
for(let key in animal){

    console.log(key, animal[key])
}