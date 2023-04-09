arr = [1,2,3,4]
arr2 = [1,2,9,4]

function ke(arr) {
    var max=arr[0]
for(i=0; i<arr.length; i++){
    if (max<arr[i]) {
        max=arr[i]
        
    }
}
return max
}

console.log(ke(arr2));