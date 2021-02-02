function selectionSort(){
    let array = Array.from(arguments).shift()
    for(let i = 0 ;i<array.length;i++){
        let minIndex = i
        for(let j = i;j<array.length;j++){
            if(array[minIndex]>array[j]){
                minIndex = j
            }
        }
        if(minIndex!==i){
            let interim = array[i]
            array[i] = array[minIndex]
            array[minIndex] = interim
        }
    }
    return array
}
let result =selectionSort([1,15,87,27,98,37,21,34,23,44,66,23,11])
// console.log(result)