function findMaxNumber(array) {
    if (!array || !array.length) return "Lỗi";
    
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
    if (max < array[index]) {
    max = array[index];
    }
    }
    
    return max;
    }
    function findMinNumber(array) {
    if (!array || !array.length) return "Lỗi";
    
    let min = array[0];
    for (let index = 0; index < array.length; index++) {
    if (min > array[index]) {
    min = array[index];
    }
    }
    
    return min;
    }
    var arr1 =[6,15,9,5]
    var arr2 = [1,20]
    var q =  findMaxNumber(arr1)
    var w = findMinNumber(arr1)
    var e = findMaxNumber(arr2)
    var r = findMinNumber(arr2)
    console.log("Mảng thứ hai", arr1);
    console.log("Mảng thứ nhất", arr2);
    function result() {
        if (e>q && w >r) {
    
            console.log("true");
        }
        else{
            console.log("false");
        }
    }
     console.log(result());