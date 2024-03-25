//create a oop class

//constructor
function Person(name, email){
   // console.log('I Have Constructed...........');
   this.name = name;
   this.email = email;
   this.print = function(){
    console.log('Name :' + this.name);
   }
}

var p1 = new Person('Shamim', 'shamimalok@gmail.com');
var p2 = new Person('tamim','tamim@gmail.com')
var p3 = new Person('tuha','tuha@gmail.com')

var people = [p1, p2,p3];

// console.log(p1.name);
// console.log(p1.email);

///console.log(people);


//foreach loop

// array.forEach(element => {
    
// });

// people.forEach(function(Person) {
//     //console.log('Email  : ' + Person.email);
//     Person.print()
    
// });

for(var props in p1 ){
    console.log('Properties : '+ props);

}

//======================..............>>>>>>>><<<<<<<<<<<=============

function Book(name ,author , price){
    this.name = name;
    this.author = author;
    this.price = price;

}
var book = new Book('Alexbroties', 'Shamim ', 250)

console.log(book.constructor);

