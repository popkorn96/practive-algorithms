console.log("hello world")

function expressionCheck(p1, p2) {
    return p1 * p2
}

// This event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
// If you want the DOM to get parsed as fast as possible after the user has requested the page, you can make your JS asynchronous*
// *Asynchronous programming is a form of parallel programming that allows a unit of workk to run *seperately* from the primary application thread. 
document.addEventListener("DOMContentLoaded", init)

// This variable identifies an HTML element and assigns it variable 'addTwoSum'
const addTwoSum = document.getElementById('open-first-algorithm')

// This function is inititialized as soon as the DOMContentLoaded has been fired. 
function init() {
    // The console.info()method outputs an informational message to the Web Console. In Firefox, a small 'i' icon is displayed next to these items int he Web Console's log.
    console.info('DOM loaded')
    // This event listener is triggered when the value assigned to 'displauTwoSum' is 'ckicked'
    addTwoSum.addEventListener('click', displayTwoSum)

}
// This function is used to toggle the button and <div> tag contents between the open and closed 
function displayTwoSum() {
    const x = document.getElementById('first-algorithm')
    if(x.style.display === 'block'){
        
        x.style.display = 'none';
        addTwoSum.innerHTML = `Open First Algorithm`
    } else {
        x.style.display = 'block';
        addTwoSum.innerHTML = `Close First Algorithm`
    }
        

}



