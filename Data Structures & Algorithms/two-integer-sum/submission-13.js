class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            let ans = target - nums[i]

            if(map.has(ans) && i !== map.get(ans)){
                return [i, map.get(ans)]
            }

            map.set(nums[i], i)

        }

    }
}
