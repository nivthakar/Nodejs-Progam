let test= function(){

        console.log("Hello Test");
}();
function sum(a,b){
    return a+b;
}
console.log(sum(3,5));

(function(){
    console.log("Test Function");
})();