let h1 = document.querySelector("h1");
console.log(h1);
h1.addEventListener("click",function(){
    h1.style.color='green';
})

let link = document.querySelector("#cl");
link.addEventListener("click", myMove);
let flag; 


function myMove(){
    link.style.visibility="hidden";
    let elem = document.getElementById("animate");
    let pos = 0;
    let id , id2; 

    if (!flag){
        id =setInterval(frame,10);


    }
    else{
      id2 = setInterval(reverse, 10);
      pos=350;
    }
   flag= !flag;




    function frame(){
    if(pos==350){
        link.addEventListener("click", myMove);

        link.style.visibility="visible";
        clearInterval(id);
    }

    else{
    pos++;
    elem.style.top= pos+"px";
    elem.style.left= pos+"px";
  
}
}
    function reverse(){
        if(pos==0){
            link.addEventListener("click", myMove);
    
            link.style.visibility="visible";
            clearInterval(id2);
        }
    
        else{
        pos--;
        elem.style.top= pos+"px";
        elem.style.left= pos+"px";
      
    }

}
}

