const object1 = {
    name: "person1",
    age: 5
  };
      
  const object2 = {
    age:5,
    name:"person1"
  };
      
  //var obj1 = {"name":"Sam","class":"MCA"};
//var obj2 = {"class":"MCA","name":"Sam"};

var flag=true;

if(Object.keys(object1).length==Object.keys(object2).length){
    for(key in object1) { 
        if(object1[key] == object2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal" + flag);