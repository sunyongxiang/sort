function bubbleSort(){
    let array = Array.from(arguments).shift()
    for(let i = 0 ;i< array.length;i++){
        for(let j = 0 ;j<array.length-1-i ; j++){
            if(array[j+1]<array[j]){
                let interim = array[j]
                array[j] = array[j+1]
                array[j+1] = interim
            }
        }
    }
    return array
}
let result =bubbleSort([1,15,87,27,98,37,21,34,23,44,66,23,11])
// console.log(result)