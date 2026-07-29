class Solution {

    longestConsecutive(nums) {

      let map = new Map()

      let longest = 0

      for(let n of nums){
        map.set(n)
      }
      for(let n of nums){
        if(!map.has(n - 1)){
          let length = 1
          while(map.has(n + length)){
            length++
          }
          longest = Math.max(longest, length)
        }
      
      }

      return longest

    }
}
