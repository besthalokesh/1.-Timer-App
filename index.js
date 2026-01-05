const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const decreaseButton = document.getElementById("decreaseButton");

const labelText = document.getElementById("labelText");

counter=0;

increaseButton.onclick= function(){
    counter++;
    labelText.textContent=counter;
}


resetButton.onclick= function(){
    counter= 0;
    labelText.textContent=counter;
}


decreaseButton.onclick= function(){
    counter--;
    labelText.textContent=counter;
}