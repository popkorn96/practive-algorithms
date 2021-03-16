// Multiple Pointers

// Creating pointers or values that correspond to an index or position and move
//  towards the beginning, endn or middle abased on a certain condition.
//  Very effiient for solving problems with minimal space complexity as well

//  Example: sumZero
// Write a function called sumZero which accepts a sorted array of fintegers. 
// The functin should find the  first pair where the sum is 0.
// Return an array tha tincludes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if(sum > 0){
            right--;

        }else {
            left++;
        }
    }
}

function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }
    if(arr.length === 1){
        return 1
    }
    let left = 0;
    let right = 1;
    let unique = 0;
    while(right <= arr.length){
        if(arr[left] !== arr[right]){
            unique++;
            right++;
            left++;
        } else {
            right++;
            left = right - 1
        }
    }
    return unique
}

function uniqueValuesUdemy(arr){
    var i = 0;
    for(var j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]= arr[j]
        }
        console.log(i,j)
    }
    return i + 1
}

unction uniqueValuesUdemy(arr){
    var i = 0;
    for(var j = 0; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i]= arr[j]
        }
        console.log(i,j)
    }
    return i + 1
}