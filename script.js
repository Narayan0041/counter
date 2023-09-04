var Counter =document.getElementsByClassName("counter");
var btn= document.getElementsByClassName("btn");
var count =0;
function clicked(){
 count +=1;
 document.getElementsByClassName("counter")[0].innerHTML = +count;
  console.log("click hua")
}
function clicked1(){
     if(count>0){ 
         count -=1;
    document.getElementsByClassName("counter")[0].innerHTML = +count;
 }
 else{
         document.getElementsByClassName("counter")[0].innerHTML = count;
}

    }

    function clicked2(){
 count =0;
 document.getElementsByClassName("counter")[0].innerHTML = count;
}