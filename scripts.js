let sortedArray = [];

// Function to perform Merge Sort
function performMergeSort() {
    const input = document.getElementById('arrayInput').value;
    const array = input.split(',').map(Number); // Convert input string to an array of numbers
    sortedArray = mergeSort(array); // Sort the array using Merge Sort
    document.getElementById('output').innerHTML = `Sorted Array: ${sortedArray.join(', ')}`; // Display sorted array
}

// Merge Sort Algorithm
function mergeSort(array) {
    if (array.length <= 1) { // Base case: if array is 1 element or empty, it's already sorted
        return array;
    }
    const mid = Math.floor(array.length / 2); // Find the middle index
    const left = mergeSort(array.slice(0, mid)); // Recursively sort the left half
    const right = mergeSort(array.slice(mid)); // Recursively sort the right half
    return merge(left, right); // Merge the sorted halves
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) { // Merge while both arrays have elements
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    // Concatenate remaining elements if any
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Function to perform Binary Search on the sorted array
function performBinarySearch() {
    if (sortedArray.length === 0) { // Check if array has been sorted
        document.getElementById('output').innerHTML = `Please perform Merge Sort first.`;
        return;
    }
    const target = Number(document.getElementById('searchInput').value); // Get the search target from input
    const index = binarySearch(sortedArray, target); // Perform Binary Search
    if (index !== -1) { // Check if target was found
        document.getElementById('output').innerHTML = `Number found at index: ${index}`;
    } else {
        document.getElementById('output').innerHTML = `Number not found in the array.`;
    }
}

// Binary Search Algorithm
function binarySearch(array, target) {
    let left = 0, right = array.length - 1;
    while (left <= right) { // While there are elements to consider
        const mid = Math.floor((left + right) / 2); // Find the middle index
        if (array[mid] === target) { // Check if the middle element is the target
            return mid; // Return the index if found
        } else if (array[mid] < target) { // If target is larger, search in the right half
            left = mid + 1;
        } else { // If target is smaller, search in the left half
            right = mid - 1;
        }
    }
    return -1; // Return -1 if not found
}
