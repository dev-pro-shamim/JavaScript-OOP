
//Declaring Class to create Class

// class person {
//     fName = 'Shamim';
//     lName = 'islam';

//      getname(params) {
//         return ('My Full Name is : ' + this.fName + " "+ this.lName);
                
//     }
// }

class person { // class of blue print
    fname = 'Shamim';
    lName = 'Islam';
    getname(params) {
        return ('My Full Name is : '+ this.fname + " " + this.lName );//then same obj in this 'this' can declare is true

    }
}

let personobj = new person();//obj declare
console.log(personobj);//obj print
console.log(personobj.getname());//obj print
console.log(personobj.fname);//obj print

////ReDeclaring is not possible !!!!!!!!!
