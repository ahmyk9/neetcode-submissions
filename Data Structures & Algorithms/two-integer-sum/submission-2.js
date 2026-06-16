class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    //Nested Loops Method - O(n^2)
    // twoSum(nums, target) {
    //     for(let i = 0; i < nums.length; i++){
    //         for(let j = 0; j < nums.length; j++){
    //             if(nums[i] + nums[j] === target && i !=j ){
    //                 let arr = []
    //                 arr.push(i, j)
    //                 return arr
    //             }

    //         }
    //     }
    // }

    //Hashmap Method
    twoSum(nums, target) {
        let map = new Map()
        for(let i = 0; i < nums.length; i++){
            let ans = target - nums[i]
            if (map.has(ans)){
                return [map.get(ans), i]
            } 
            map.set(nums[i], i)
        }
        return []
    }







}
