function person(name, age){
    this.name = name;
    this.age = age;
    this.hello = function(){
       // console.log('Hello ' + this.name);
    }

}
var p1 = new person('Shamim', 22);
var p2 = new person('Tuha', 01);
console.log(p1, p2);