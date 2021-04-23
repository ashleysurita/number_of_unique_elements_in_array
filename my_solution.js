function numUniques(array) {
    if(!array || !array.length) return 0
    
    const count = {}
    let unique = 0
    array.forEach(num => {
        if(!count[num]) {
            count[num] = 1
            unique++
        } else {
            if(count[num] === 1) unique--
            count[num] += 1                       
        }
    })
    
    return unique
}

// Test Cases
console.log(numUniques([])) // 0
console.log(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numUniques([1])) // 1
