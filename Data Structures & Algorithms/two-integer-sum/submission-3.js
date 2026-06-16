class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // o(n^2)
        // for(let i = 0; i < nums.length; i++){
        //     for(let j = 0; j < nums.length; j++){
        //         if (nums[i] + nums[j] === target){
        //             return [i, j]
        //         }
        //     }
        // }
        
        // o(n)
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            if(map.has(target - nums[i])){
                return [i, map.get(target - nums[i])]
            }
            map.set(nums[i], i)
        }



    }
}
