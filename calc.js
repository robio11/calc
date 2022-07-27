console.log("hello kitti");

let Input = document.getElementById('input');
Numbers = document.getElementById('numbers');
Operators = document.getElementById('operators');
Results = document.getElementById('results');
Clear = document.getElementById('clear');
ResultsDisplay = false;

for(let i=0; i<Numbers.length; i++){
Numbers[i].addEventListner("click",function(e){
    let currentString = Input.innerHTML;
    LastCahr = currentString[currentString.length - 1];
    if(ResultsDisplay === false){
        Input.innerHTML = traget.innerHTML;
    }
    else
})
}