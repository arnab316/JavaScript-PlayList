var y = 55;
function first(){
  //global scope
  let x =1;
  console.log(x)
  function childOfFirst(){ //bcz two diff exectuion context 
    let x = "now i'm changed.."
    console.log(x)
  }
  childOfFirst(); // it will print -> now i'm changed..
} 
first() // it will print 1

function second(){
    console.log(y)
}

second()

// blocked scope
{
    var num =10;
    console.log(num) //it will print 10
}




//lexical scope -> you can access the fun inside fun  
function Dada(){
    let name = 'Kalidas Golder'
    function Papa (){
    console.log(name)
    function beta(){
        let likes = 'coading'
    }
    beta()
}

   Papa()
}

Dada()