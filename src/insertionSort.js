function insertionSort(){
    let array = Array.from(arguments).shift()
    for(let i = 1 ;i< array.length;i++){
        let preIndex = i - 1;
        let current = array[i];
        while (preIndex >= 0 && array[preIndex] > current) {
            array[preIndex + 1] = array[preIndex];
            preIndex--;
        }
        array[preIndex + 1] = current;
    }
    return array
}
let result =insertionSort([15,1,87,27,98,37,21,34,23,44,66,23,11])
// console.log(result)