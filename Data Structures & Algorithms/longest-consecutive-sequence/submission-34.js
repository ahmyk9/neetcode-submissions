class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map = new Map()

        for (let n of nums){
            map.set(n)
        }

        let longest = 0

        for (let n of nums){
            if(!map.has(n - 1)){
                let maxSeq = 1

                while(map.has(n + maxSeq))  maxSeq++
                longest = Math.max(longest, maxSeq)
            }
        }

        return longest
    }
}
