def numUniques(array: [int]) -> int:
    if not array or not len(array):
        return 0
    
    count = {}
    unique = 0
    for num in array:
        if not num in count.keys():
            count[num] = 1
            unique += 1
        else:
            if count[num] == 1:
                unique -= 1
            count[num] += 1
    return unique

# Test Cases
print(numUniques([])) # 0
print(numUniques([3, 1, 1, 2, 3, 1, 1, 1, 4])) # 2
print(numUniques([1])) # 1
