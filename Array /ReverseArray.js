// Write a program to reverse an array or string

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

// ITERATIVE METHOD

// const reverseArray = (arr) => {

//     let start = 0;
//     let end = arr.length - 1;

//     while(start < end){
//         var temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start ++;
//         end --;
//     }
//     return arr
// }

// let Arr = [1,7,5,9,7,4]
// console.log(reverseArray(Arr))

const reverseArray =(arr, start, end) => {
    if(start >= end){
        return arr;
    }

    var temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    reverseArray(arr, start+1, end-1)
    return arr;
}

let Arr = [1, 7, 5, 9, 7, 4];
console.log(reverseArray(Arr, 0, Arr.length - 1));