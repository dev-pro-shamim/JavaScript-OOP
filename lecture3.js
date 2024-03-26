// var obj = {
//     name : 'Shamim',

//     print : function(){
//         console.log(this.name);
//     }
// }

// function myFunction(){
//     console.log(this.);
// }
// obj.print();

//=======================================================


// var Person = {
//     name : 'Shamim Islam',
//     print:function(){
//         console.log(this);
//         console.log('Hello ' + this.name);
//     }
// }
// Person.print();



//=====================================================



//var myName = Person.name;
//console.log(myName);

// var myPrint = Person.print.bind(Person);
// console.log(myPrint);
// myPrint();

//==================>>>>>>>>>>><<<<<<<<<<<<<<<
// function add(num){
//     console.log(this);
//     return this.value + num;
// }
// var obj = {
//     value : 10
// }
// var binded = add.bind(obj);
// var result = binded(20);
// console.log(result)

//===========


// var obj = {
//     value : 10
// }

// var obj2 = {
//     value : 50
// }


// var binded  = add.bind(obj);
// var result = binded(40);


//============<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>
var person = {
    name : 'Shamim',
    print:function(){
        setTimeout(function(){
            console.log('Hello ' + this.name);
        },2000)

    }

}
