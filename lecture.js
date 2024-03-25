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

console.log('Book Name : ' + book.name);
console.log('Book Author  : ' +book['author'] );


