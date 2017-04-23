// document.getElementById("confirm").addEventListener("click", calculate());

//Function runs as button is pushed
document.getElementById("confirm").onclick = function calculate() {
        
    var fat = document.getElementById("fatness"), 
        ball = document.getElementById("cat-ball"),
        fatAmmount = fat.value,
        weight = fatAmmount / 2.5,
        radius= weight / 2,
        areaEm = (radius * 3.14) * 2,
        areaCm = areaEm / 2.371;
    
//    alert("Your cat is " + areaCm + "cm big!");
    
//    document.getElementsByTagName("P")[0].insertAdjacentHTML("Your cat is ", areaCm, "cm big!");
            
    
// Dunno if innerText will work since it has a variable.
    document.getElementsByTagName("P")[0].innerHTML = "Your cat is " + areaCm + "cm<sup>2</sup> big!";
    
    ball.style.width = weight + "em";
    ball.style.height = weight + "em";
//    ball.style.backgroundColor = "blue";
    
    if (fatAmmount > 75) {
        ball.style.backgroundImage = "url('images/fatcat4.png')" ;
    } else if (fatAmmount < 25) {
        ball.style.backgroundImage = "url('images/fatcat3.png')"; ;
    } else {
        ball.style.backgroundImage = "url('images/fatcat1.png')"; ;
    };
    
    
};
        

    


