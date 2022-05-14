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



 const getId2 = document.querySelectorAll(".divClass");

 getId2.forEach(thiscanbewhatever => thiscanbewhatever.addEventListener("mouseover", ()=>
 { console.log(thiscanbewhatever.id);
document.getElementById(thiscanbewhatever.id).style.backgroundColor = "red";
}));

/*

function initialValue(defaultSquareValue){
   console.log("checks if initialValueGenerator function is running");
   var defaultSquareValue = x*x;
   var ids = Array.from(Array(defaultSquareValue).keys());
   function divGenerator(){ids.forEach(function(e){
      document.getElementById("container").innerHTML += `
         <div class="divClass" id=${e}>
             
         </div>
      `;
 
 
  });
 }
 
 var needDivs = divGenerator();
 
}

// the function below is not currently used for anything but has not been deleted as it can still be useful
/*
function buttonFunctionTwo(defaultSquareValue){ 
   var ids = Array.from(Array(defaultSquareValue).keys());
   return function divGenerator(){ids.forEach(function(e){
      document.getElementById("container").innerHTML += `
         <div class="divClass" id=${e}>
             
         </div>
      `;
 
 
  });
 }
 
}
*/

/*

let initialValueGenerator = initialValue(defaultSquareValue);

function initialValue(defaultSquareValue){
   console.log("checks if initialValueGenerator function is running");
   var x = 40;
   var defaultSquareValue = x*x;
   var ids = Array.from(Array(defaultSquareValue).keys());
   function divGenerator(){ids.forEach(function(e){
      document.getElementById("container").innerHTML += `
         <div class="divClass" id=${e}>
             
         </div>
      `;
 
 
  });
 }
 
 var needDivs = divGenerator();
 
}

*/
