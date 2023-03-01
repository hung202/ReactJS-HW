var arr=[10,9,10,6]
        let sum = 0;
        for (const a of arr) {
        sum += a;
        }
        const avg = sum / arr.length;
        console.log(arr)
        console.log(avg)
         
        
        switch (true) {
    case (avg<=7):
        console.log("D grade");
        break;
    case (avg>7.1 && avg<=8) :
        console.log("C grade");
        break;
    case (avg>8.1 && avg<=9):
         console.log("B grade");
        break;
    case (avg>9.1 && avg<=10):
        console.log("A grade");
        break;
        
    
}