// Question 1 : how to compare two json have the same properties without order
let obj1 = {
  "name": "priya",
  "age": "27"
};
let obj2 = {
  "age": "25",
  "name": "bala"
};

//converting JSON obj to string to compare
 var obj1Str=JSON.stringify(obj1);
 var obj2Str=JSON.stringify(obj2);

 if(obj1Str===obj2Str){
  console.log("The objects are equal.");
 }else{
  console.log("The objects are not equal.")
 }

//Question 2
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
console.log(result);
for(var i=0; i<result.length; i++){
  console.log(result[i].flag);
}
}

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
}
