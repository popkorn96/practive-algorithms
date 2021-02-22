console.log("hello world")

function expressionCheck(p1, p2) {
    return p1 * p2
}

function doSomething() {
    // The console.info()method outputs an informational message to the Web Console. In Firefox, a small 'i' icon is displayed next to these items int he Web Console's log.
    console.info('DOM loaded')
}

// This event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading
// If you want the DOM to get parsed as fast as possible after the user has requested the page, you can make your JS asynchronous*
// *Asynchronous programming is a form of parallel programming that allows a unit of workk to run *seperately* from the primary application thread. 
document.addEventListener("DOMContentLoaded", doSomething)

