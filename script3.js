// Question 1 : how to compare two json have the same properties without order
let obj1 = {
    "name":"priya",
    "age":"27"
};
let obj2 = {
    "age":"25",
    "name":"bala"
};
if (obj1===obj2){
    console.log("both the objects are same");
}else{
    console.log("both the objects are not same");
}

//Question 2
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result.flag);

//Question 3
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);
for(var i in result){
    console.log(i,result[i].name);
    console.log(i,result[i].region);
    console.log(i,result[i].subregion);
    console.log(i,result[i].population);

}
