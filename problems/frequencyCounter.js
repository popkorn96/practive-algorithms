// Explain each line of code and its purpose towards achieving the solution

// Frequency Counter - valudAnagram
// Given two strings, write a function to determine if the second string is an anagram
// of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, 
// Such as cinema, formed from iceman.

// Examples: 
// validAnagram('','') => true
// validAnagram('aaz', 'zza') => false (not corresponding values)
// validAnagram('awesome', 'awesom') => false (not corrensponding lengths)
// validAnagram('tar', 'rat') => true


function validAnagram(arr1, arr2){
    // his if statement is to determine whether the length of each array equates the other;
    if(arr1.length !== arr2.length){
        return false
    }

    let lookup = {}

    // iterate through first array and determine the number of times each letter is present in the array
    for(let i = 0; i < arr1.length; i++){
        let letter = arr1[i]
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for(let i = 0; i < arr2.length; i++){
        let letter = arr2[i];
        //  if we can't find the letter or the letter is zero, then it's not an anagram
        if(!lookup[letter]){
            return false
            // if we find the letter, we decrement the number of times each letter is present in the array 
        } else {
            lookup[letter] -= 1;
        }
        
    } return true
    
  // add whatever parameters you deem necessary - good luck!
}
function sameFrequency(val1, val2){
    let first = val1.toString();
    let second = val2.toString();
    if(first.length !== second.length){
        return false;
    }
    let lookup = {};
    for(let i = 0; i < first.length; i++){
        let letter = first[i];
        lookup[letter] ? lookup[letter] += 1: lookup[letter] = 1;
    }
    console.log(lookup)
    for(let i = 0; i < second.length; i++){
        let letter = second[i];
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] - 1;
        }
    } return true;
}

// Implement a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the fequency counter or the multipe pointers pattern.

// This function was implemented using the multiple pointers pattern

function areThereDuplicates(...args){
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        } else{
            start++
            next++;
        }
    } return false
}

