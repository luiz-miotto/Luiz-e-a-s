var x = 16;
var defaultSquareValue = x*x;

var squaresPerSide = document.getElementById("squaresPerSide");

squaresPerSide.addEventListener("click", ()=>{
var customAmount = prompt("How many squares would you like per side?", 16);
var defaultSquareValue = customAmount * customAmount;
console.log(`customAmount is equal to ${customAmount}. defaultSquareValue is ${defaultSquareValue}`);
var ids = Array.from(Array(defaultSquareValue).keys());
divRemover();
newDivGenerator(ids);
let getId2 = document.querySelectorAll(".divClass");
newMouseOver(getId2);

});


var newSquaresPerSide = document.getElementById("newSquaresPerSide");
newSquaresPerSide.addEventListener("click",(defaultSquareValue) => {
   buttonFunctionTwo(defaultSquareValue);
   console.log("this tells me the button worked");
})
 
var ids = Array.from(Array(defaultSquareValue).keys());

var needDivs = divGenerator();

function divGenerator(){ids.forEach(function(e){
   document.getElementById("container").innerHTML += `
      <div class="divClass" id=${e}>
          
      </div>
   `;


});
}


function newDivGenerator(ids){ids.forEach(function(e){
     document.getElementById("container").innerHTML += `
        <div class="divClass" id=${e}>
            
        </div>
     `;


 });
}



function divRemover(){ids.forEach(function(e){
   document.getElementById(`${e}`).remove();
   console.log("this confirms the function ran");

  
})}



 let getId2 = document.querySelectorAll(".divClass");

 let colorHoverChanger = mouseOver();

 function mouseOver(){
 getId2.forEach(thiscanbewhatever => thiscanbewhatever.addEventListener("mouseover", ()=>
 { console.log(thiscanbewhatever.id);
document.getElementById(thiscanbewhatever.id).style.backgroundColor = "rgb(238, 130, 238)";
}));
 }

 function newMouseOver(getId2){
   getId2.forEach(thiscanbewhatever => thiscanbewhatever.addEventListener("mouseover", ()=>
   { console.log(thiscanbewhatever.id);
  document.getElementById(thiscanbewhatever.id).style.backgroundColor = "red";
  }));
   }

   
  function generateRGBValue(){
      var   redValue = redFunction();
      var   greenValue = greenFunction();
      var   blueValue = blueFunction();
   var   randomRGBValue = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
   console.log(`the rgb value is ${randomRGBValue}`);
   }

   function redFunction(){
      return Math.floor(Math.random()*255);
   }

   function greenFunction(){
    return  Math.floor(Math.random()*255);
   }

   function blueFunction(){
      return Math.floor(Math.random()*255);
   }

