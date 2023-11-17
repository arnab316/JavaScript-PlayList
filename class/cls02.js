
class Product {
    constructor(itemName){
       this.itemName = itemName
    }
    getItemName(){
        return this.itemName + 'is a Product'
    }
}

class Furniture extends Product{
    constructor(itemName){
      super(itemName);
    }
    getItemName(){
        return this.itemName + 'is a Furniture'
    }
}

let chair = new Furniture('chair');

console.log(chair) 