// for(var i=1;i<=3;i++){
//     setTimeout(function(){
//         console.log(i);
//     },0);
// }

// console.log(end);

var fs=require("fs");

fs.readFile("./demo.txt","UTF-8",function(err,data){
    if(err){
        return err;
    }else{
        getDate(data);
    }
});

function getDate(data){
    setTimeout(function(){
        console.log(data);
    },2000);
}