function bruteForceTwoSum(sum, a) {
  
  const hash = {}, ans = []
  
  for (let num of a) {
    hash[num] = hash[num]+1 || 1
  }
  
  
  for (let num in hash) {
    hash[num]--
    if (hash[sum - num] > 0) {
      ans.push([num, sum - num])
      hash[sum - num]--
    }
  }
  
  return ans
  
}