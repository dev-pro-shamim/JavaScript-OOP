// var obj = {};
// var obj1 = new Object;
// console.log(obj);
// console.log(obj1);
var book ={
    name : 'Javascript OOP',
    author:'Shamim',
    publisher: 'Reality',
    page:250,
    print:function(){
        console.log(this.name, this.author)

    }
}
// console.log(book);
// book.print();

//console.log('Book Name : ' + book.name);//dot notation
//console.log('Book Author  : ' +book['author'] );//bracket notation

console.log('Published year : '+book.publishyear);

book.publishyear= 2020
console.log('Published year : '+book.publishyear);
book['price'] = 30;
console.log('Price : ' + book.price);

//for in loop 

for( var props in book){
    //console.log(props);
    console.log(props + ' = ' + book[props])
}























