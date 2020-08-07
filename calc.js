function test (){
   alert ("Working");
}
function get (){
   return document.getElementById("result").value;
}
var b = document.getElementsByClassName("numbers").length;
for(var i = 0 ; i < b ; i++) {
document.querySelectorAll('button.numbers')[i].addEventListener("click", function(){
   var sound1 = new Audio("sound/click.mp3");
   sound1.play();
   var f = this.value;
   document.getElementById("result").value +=f;


})}


document.getElementById("calc").addEventListener("click" , function(){
   var screenValue = document.getElementById("result").value;
   var screenText = document.getElementById("result").innerHTML;
   var yy = eval(screenValue);
   document.getElementById("result").value = yy;
   var sound2 = new Audio("sound/calcu.mp3");
        sound2.play();
   
  
 
})

document.getElementById("clear").addEventListener("click" , function (){
   var sound3 = new Audio("sound/clear.mp3");
   sound3.play();
   return document.getElementById("result").value = "";
   
})

document.getElementById("power").addEventListener("click", function (){
var val = document.getElementById("result").value;
var s = val * val;
return document.getElementById("result").value = s;

})

document.getElementById("percentage").addEventListener("click" , function (){
   var lst = document.getElementById("result").value;
   var lst2 = lst * 100 ;
   return document.getElementById("result").value = lst2 + '%';
})
/*      TEST        ///////////
document.getElementById("gg").addEventListener("click" , function(){
   var valu =Number (document.getElementById("result").value);
   var uii ;
   valu = Number(uii) *Number(uii);
   alert(Number (uii));
})

/*var n = document.getElementsByClassName("opperator").length;
for (var h = 0 ; h< n ; h++){
   document.querySelectorAll('button.opperator')[h].addEventListener("click" , function (){
      if (this.innerHTML = "+") {

      }
   })
}*/


