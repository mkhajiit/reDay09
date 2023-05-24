class Person{
    constructor(name,first,second){
        this.name = name;
        this.first =first;
        this.second = second;
    }
    sum(){
        return "prototype: "+(this.first+this.second);
    }
}

let kim = new Person('yeon',10,20);
console.log(kim.sum());