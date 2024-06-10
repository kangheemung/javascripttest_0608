let person=
{
    name:"kang",
    age:25,
    cute:true,
}
for (let key in person){
console.log("key",key)
if(key ==="cute"){
console.log("누나는 귀엽니?",person[key])
}
}