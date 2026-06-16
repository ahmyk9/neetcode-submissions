class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        //o(n^2)
        // for (let i = 0; i < nums.length; i++){
        //     for (let j = 0; j < nums.length; j++){
        //         if (nums[i] + nums[j] === target) return [i,j]
        //     }
        // }

        //o(n)
        let map = new Map()

        for (let k = 0; k < nums.length; k++){
            map.set(nums[k], k)
        }
        
        for (let i = 0; i < nums.length; i++){
            let ans = target - nums[i]
            if(map.has(ans) && i !== map.get(ans) ){
                return [i, map.get(ans)]
            }
        }







    }
}
