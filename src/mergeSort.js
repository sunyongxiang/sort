

function mergeSort(arr) {
    let array = Array.from(arguments).shift()
    var len = array.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right) {
    var result = [];
    while (left.length>0 && right.length>0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }else {
            result.push(right.shift());
        }
        console.log(result)
    }
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}
let data =mergeSort([15,1,87,27,98,37,21,34,23,44,66,23,11,22,99])
console.log(data)