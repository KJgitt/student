function Person(){
    this.think=function(callback){
        console.log("think....");
        setTimeout(function(){
            callback();
        },500)
    };
    this.answer=function(){
        console.log("i am answering other question");
        
    };
}
var person=new Person();
person.think(function(){
    console.log("think 5 ms");
    
});

person.answer();