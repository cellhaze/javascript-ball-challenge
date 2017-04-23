 document.getElementById("confirm").addEventListener("click", calculate);

//Function runs as button is pushed
function calculate() {
        
    var fat = document.getElementById("fatness"), 
        ball = document.getElementById("cat-ball"),
        fatAmmount = fat.value,
        width = fatAmmount / 10;
//        msg = document.getElementsByTagName("P"),
//        weight = findWeight(fat.value);
        
    

//    alert(fatAmmount);    
//    msg.appendChild("Hi");
        
    document.getElementsByTagName("P")[0].innerHTML = "Hi";
        

    
//     function findWeight(r, width) {
//            var area = (r * 3.14) * 2;
//            r = width / 2;
//        }
//    
//    console.log("Your cat is " + weight + " big!"); 
    };

  


/*Initially my findWeight funciton was inside my sentece function. However, this way, the console log would never be called, so I separated them. That way the console log when be called when the button is clicked like everything else in calculate()*/

//    var sentence = function(weight) {       
//        }
    
    
    
//    $('input[name=fatSlider]').val();
//    
//    $('input[name=fatSlider]').on('change', handleChange);

