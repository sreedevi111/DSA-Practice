// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

const tagetArr = (arr, target) => {
    for(let i =0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [arr[i], arr[j]]
            }
        }
    }
    return [];
}

let array = [10, 15, 3, 7] 
let target = 13

console.log(tagetArr(array, target))
