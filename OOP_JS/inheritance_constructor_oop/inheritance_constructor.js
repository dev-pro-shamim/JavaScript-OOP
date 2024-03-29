



//constructor inside only parent class****************

//constructor inside only child class pass perams******************


// class father{
//     constructor(a, b){
//         console.log('I am Father  Constructor' + ' ' + (a+b));

//     }

// }
// class son extends father{
    
// }


// //obj declare

// //let fatherobj = new father();

// let sonobj = new son(20,30);


//==================================<<<<<<<<<<<>>>>>>>>>>>>>>>>>=======================



//constructor inside only child class*/**************** */

//constructor inside only child class pass perams*************



// class father{


// }
// class son extends father{

//     constructor(a, b){
//         super();
//         console.log('I am Son  Constructor' + ' ' + (a+b));

//     }
    
// }


// //obj declare

// //let fatherobj = new father();

// let sonobj = new son(30,40);








//constructor inside both parent and  child class ***********<<<<>>>>>>>>>>>>

//constructor inside both parent and  child class pass params*******************<<<<<<<>>>>>>>>>>


class father{

    constructor(a, b){
    
        console.log('I am Father  Constructor' + ' ' + (a+b));

    }


}
class son extends father{

    constructor(a, b){
        super();
        console.log('I am Son  Constructor' + ' ' + (a+b));

    }
    
}


//obj declare

let fatherobj = new father(30,40);

//let sonobj = new son(30,40);




