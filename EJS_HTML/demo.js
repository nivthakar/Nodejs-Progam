function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
module.exports ={
    add,
    sub,
    mul
}
const math = require('./math');
console.log(math.add(5,5));