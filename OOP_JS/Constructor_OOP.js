// //class Constructor
// class person { // class of blue print

//     //without call it will be auto declare 
//     //can't return!!!!
//     //constructor as a method 
//     constructor(){//constructor itself constructor for the function------
//         console.log('I am Constructor !!!!!!!');
//     }
//     fname = 'Shamim';
//     lName = 'Islam';
//     getname(params) {
//         return ('My Full Name is : '+ this.fname + " " + this.lName );//then same obj in this 'this' can declare is true

//     }
// }

// let personobj = new person();


















//Constructor Perameter //perametarized constructor......

class person { // class of blue print

    //without call it will be auto declare 
    //can't return!!!!
    //constructor as a method 
    //pera meter pass
    constructor(a,b){//constructor itself constructor for the function------
       // console.log('I am Constructor !!!!!!!');
        console.log(a+b);
    }
    fname = 'Shamim';
    lName = 'Islam';
    getname(params) {
        return ('My Full Name is : '+ this.fname + " " + this.lName );//then same obj in this 'this' can declare is true

    }
}

let personobj = new person(20,30);

