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
        //         if(nums[i] + nums[j] == target){
        //             return [i, j]
        //         }
        //     }
        // }

        // o(n)
        let map = new Map()

            for(let j = 0; j < nums.length; j++){
                let diff = target - nums[j]
                if(map.has(diff)){
                    return [j, map.get(diff)]
                }
            
                //tracking the number in nums and its indice which is 'j'
                map.set(nums[j], j)

            }
    }
}
