class father{

    addNumber(){
        let a = 10;
        let b = 20;
        let c = 30;
        console.log(a+b+c);
    }
}

class son extends father{
    
}

let fatherobj = new father();
let sonobj = new son();

fatherobj.addNumber();//father print

sonobj.addNumber();//for the son inheritance print
