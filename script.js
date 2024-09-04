function reverseArray(numbers) {
    const numbersArray = Array.from(numbers)
    const evenNumbersArray = []
    numbersArray.forEach(item => {
        if(item % 2 == 0) {
            evenNumbersArray.push(item)
        } else {
            return
        }
    })
    return evenNumbersArray
}


function AscendingOrderArray(arr) {
    arr.forEach(item => {
        if(isNaN(item))
            throw new Error('you cannot input array with values other than numbers')
            return
        })
    const sortedArray =  arr.sort((a,b) => a - b)
    return sortedArray
}

console.log(AscendingOrderArray([1,10,13,75,33]))