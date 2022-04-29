function factoralize(num) {
var count=num;
//store a count variable for the loop
if(count===0){
    return 1;
    //statement for unique '0' case scenario
}
else{
    for(var i=1;i<count;i++){
        num=num*i
        //loop to factoralize starting at 1 and moving up to the end
    }
    }
return num;
}
factoralize(5);
factoralize(10);
factoralize(20);
factoralize(0);


//2nd exercise

function where(collection,source) {
    var arr = collection.filter(function(item){
        for(var i in source){
            if(source[i]!=item[i]){
                return false;
            }
        }
    return true;
    });
    return arr;
}

where([{first: "Romeo", last: "Montague"},  {first: "Mercutio", last: "Null"}, {first: "Tybalt",last: "Capulet"}], {last:"Capulet"});

//Third exercise

function end(str, target) {
var start= str.length-(target,length);
if(str.substr(start, str.length)==target){
    return true;
}
else{
    return false;
      }

}
end("Bastian", "n");