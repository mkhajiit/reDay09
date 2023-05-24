function Person(name,first,second,third){
    this.name = name;
    this.first=first;
    this.second = second;
    this.third = third;
}

//constructor 생성자
let kim = new Person('kim',10,20,30);
kim.sum = function(){
    return 'this: '+ (this.first+this.second+this.third);
}
//prototype보다 따로 정의한 함수가 우선순위다
let yeon = new Person('yeon',30,40,70);

Person.prototype.sum=function() {
    return 'prototype: '+ (this.first+this.second+this.third);
}

console.log('kim.sum()',kim.sum());
console.log('yeon.sum()',yeon.sum());