
function bubbleSort(arr) {
  // Iterate through the array
  let swap = false

  for(let i = 0; i < arr.length ; i++){
    // If the current value is greater than its neighbor to the right
    let value =  arr[i]
    let next = arr[i+1]
    if(value > next){
      // Swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      swap = true

      // Do not move this console.log
      console.log(arr.join(","));
    }

  }
  // If you get to the end of the array and no swaps have occurred, return
  if (!swap) {
    return arr;
  } else {
    // Otherwise, repeat from the beginning
    bubbleSort(arr);
  }
  return arr;
}

module.exports = bubbleSort;
