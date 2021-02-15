const fs = require('fs')

try {
  const data = fs.readFile('input.txt', 'utf8',(err,data)=>{
    var op=data.split('\r\n')
    //console.log(op)
    var count=0;
    var myMap = new Map();
    //var keyObj = {};
     // myMap.set(keyObj, "value");
      //myMap.get(keyObj);

      for(let t=0;t<op.length;t++){
       var pos= op[t].split(' ')
        if(pos[0]==="jmp"){
          myMap.set(t,false)
        }
        } 

   for(var i=0;i<op.length;){
     var value=op[i].split(' ')
     if(value[0]==="nop"){
      i++;
      continue;
     }
     else if(value[0]==="acc"){ 
      count+=parseInt(value[1])
      i++;
          
     }
     else if(value[0]==="jmp"){ 
         if(myMap.get(i)===false){
          myMap.set(i,true)
          //console.log(parseInt(value[1]))
          i=i+parseInt(value[1])
         }
         else{
           break;
         }
     }
     
   } 
   console.log(count)

  })
  
} catch (err) {
  console.error(err)
}
