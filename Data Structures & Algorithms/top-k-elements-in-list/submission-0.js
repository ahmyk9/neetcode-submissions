class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map()
        

        for (const num of nums){
            map.set(num,(map.get(num) || 0) + 1)
        }

        let sorted = [...map.entries()].sort((a , b)=> (b[1] - a[1]))

        // console.log(sorted)
        let ans = sorted.slice(0 , k).map(entry => entry[0])
        console.log(ans)
        return ans
    }
}
