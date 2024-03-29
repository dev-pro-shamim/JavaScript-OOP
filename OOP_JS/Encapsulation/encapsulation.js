// Encapsulation using Closures

function Profile(){
    let details = 'profie Details';

    return{
       update:function(){
        console.log('profile Update Process')
       },

       photoupload:function(){
        console.log('photoupload Update Process')
       },

       passReset:function(){
        console.log('Password Reset Process');
       }



    }
}

const learnerProfile = Profile();
learnerProfile.photoupload();







// Encapsulation using ES6 classes

class bankAccount{
    #balance = 100; //private variable
    deposite(amount){
        this.#balance += amount;
        

    }
    cashOut(){
        this.#balance-amount
    }
checkBalance(){
    return this.#balance;
}
}