// document.getElementById("confirm").addEventListener("click", calculate());

//Function runs as button is pushed
document.getElementById("confirm").onclick = function calculate() {
        
    var fat = document.getElementById("fatness"), 
        ball = document.getElementById("cat-ball"),
        fatAmmount = fat.value,
        weight = fatAmmount / 1.2,
        radius= weight / 2,
        areaEm = (radius * 3.14) * 2,
        areaCm = areaEm / 2.371;
    
    alert("Your cat is " + areaCm + "cm big!");
    
//    document.getElementsByTagName("P")[0].insertAdjacentHTML("Your cat is ", areaCm, "cm big!");
            
    
// whenever I change this from .innerHTML it says that the function is undefined. Do I need parameters?
    document.getElementsByTagName("P")[0].innerHTML = "Hi";
    
    ball.style.width = weight + "em";
    ball.style.height = weight + "em";
    ball.style.backgroundColor = "blue";
};
        

    


