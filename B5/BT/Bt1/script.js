var heightInput = document.querySelector(".height-input")
var weightInput = document.querySelector(".weight-input")
var calculateButton = document.querySelector(".calculate")
var result = document.querySelector(".result")
var statement = document.querySelector(".result-statement")
var BMI, height, weight, rate;

calculateButton.addEventListener("click", ()=>{
    
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI.toFixed(2);

    
    var selected = document.querySelector('input[type=radio][name=sexx]:checked');
    rate= parseInt(selected.value)
    

    if (rate==1) {
        
        if(BMI < 20.7){
            statement.innerText = "Gầy ";    
        }else if((BMI > 20.7) && (BMI <= 26.4)){
            statement.innerText = "Bình thường ";
        }else if((BMI >= 26.4) && (BMI <= 27.8 )){
            statement.innerText = "Thừa cân nhẹ 	";
        }else if((BMI >= 27.8) && (BMI <= 31.1 )){
            statement.innerText = "Trên lý tưởng ";
        }else if(BMI > 31.1 ){
            statement.innerText = "Béo phì ";
        }
    } 
    else {
        if(BMI < 19.1){
            statement.innerText = "Gầy  ";    
        }else if((BMI > 19.1) && (BMI <= 25.8)){
            statement.innerText = "Bình thường";
        }else if((BMI >= 25.8) && (BMI <= 27.3 )){
            statement.innerText = "Thừa cân nhẹ	";
        }else if((BMI >= 27.3) && (BMI <= 32.3 )){
            statement.innerText = "Trên lý tưởng";
        }else if(BMI > 32.3 ){
            statement.innerText = "Béo phì";
        }
    }

   

}
);