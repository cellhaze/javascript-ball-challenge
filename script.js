// document.getElementById("confirm").addEventListener("click", calculate());

//Function runs as button is pushed
document.getElementById("confirm").onclick = function calculate() {
        
    var fat = document.getElementById("fatness"), 
        ball = document.getElementById("cat-ball"),
        fatAmmount = fat.value,
        weight = fatAmmount / 5;
    
    alert(weight);
    
// whenever I change this from .innerHTML it says that the function is undefined. Do I need parameters?
    document.getElementsByTagName("P")[0].innerHTML = "Hi";
    
    ball.style.width = weight + "em";
    ball.style.height = weight + "em";
    ball.style.backgroundColor = "blue";
};
        

    


