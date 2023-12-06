// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// quickly: O(n)
// no space constraints

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6




// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// given [13, 17, 18, 3, 5, 6, 8, 9, 10]
// return 3

const minOfSorted = (arr, low = 0, high = arr.length-1) => {
    let middle = Math.floor((low + high) / 2);

    // sorted array
    if(arr[high] > arr[low]){
        return arr[low];
    }

    // array with 1 element
    if(high === low){
        return arr[low];
    }

    // middle or next to middle is our min
    if(middle < high && arr[middle + 1] < arr[middle]){
        return arr[middle + 1];
    }

    if(middle > low && arr[middle] < arr[middle -1]){
        return arr[middle];
    }

    if(arr[high] > arr[middle]){
        return minOfSorted(arr, low, middle - 1);
    }else{
        return minOfSorted(arr, middle + 1, high);
    }
}