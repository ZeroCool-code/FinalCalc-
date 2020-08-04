function test (){
   alert ("Working");
}
var b = document.getElementsByClassName("numbers").length;
for(var i = 0 ; i < b ; i++) {
document.querySelectorAll('button.numbers')[i].addEventListener("click", function(){
   var sound1 = new Audio("click.mp3");
   sound1.play();
   var f = this.value;
   document.getElementById("result").value +=f;


})}


document.getElementById("calc").addEventListener("click" , function(){
   var screenValue = document.getElementById("result").value;
   var screenText = document.getElementById("result").innerHTML;
   var yy = eval(screenValue);
   document.getElementById("result").value = yy;
   var sound2 = new Audio("calcu.mp3");
		  sound2.play();
  
 
})

document.getElementById("clear").addEventListener("click" , function (){
   var sound3 = new Audio("clear.mp3");
   sound3.play();
   return document.getElementById("result").value = "";
   
})

/*var n = document.getElementsByClassName("opperator").length;
for (var h = 0 ; h< n ; h++){
   document.querySelectorAll('button.opperator')[h].addEventListener("click" , function (){
      if (this.innerHTML = "+") {

      }
   })
}*/


