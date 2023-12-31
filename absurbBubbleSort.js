const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} larger than ${el2}?`, function(input){
    if(input === 'yes'){
        callback(true)
    }else{
        callback(false)
    }
  })
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
    if(i === arr.length - 1){
        outerBubbleSortLoop(madeAnySwaps)
        return
    }else{
        askIfGreaterThan(arr[i], arr[i + 1], function(sort){
            if (sort){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                madeAnySwaps = true;
            }
        })
    }
    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps){
        innerBubbleSortLoop(arr,0,false,outerBubbleSortLoop)
    }else{
        sortCompletionCallback(arr)
       reader.close()
    }
  }
  function start() {
    outerBubbleSortLoop(true)
  }
  start()

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

