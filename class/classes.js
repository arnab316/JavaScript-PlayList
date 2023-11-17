//Declareing a class
class Product{
       constructor(itenName,price,discount,productCode){
           this.itenName = itenName;
           this.price = price;
           this.discount = discount;
           this.productCode = productCode;
    }
}

let pencil = new  Product('pencil', 20 ,2, 'p10');

let Product_1 = class {
    constructor(itenName,price,discount,productCode){
        this.itenName = itenName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
        
 }
 get getDiscountValue(){
    return  this.discount
 }
 set setDiscountValue(value){
    this.discount= value
 }
  discountValue(){
    return this.discount * this.price/100
 }
}

let chair = new Product_1('chair', 499, 15, 'c10')

console.log(chair)
//set discount value
chair.setDiscountValue = 90
// get discount value
console.log(chair.getDiscountValue)


 
console.log(chair.discountValue())