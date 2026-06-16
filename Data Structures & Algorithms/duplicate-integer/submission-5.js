class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // gonna make a new map

        //gonna loop over the nums array
        // to set the each number in map, if that number exist in the map, return false

        let map = new Map();

        for (let i = 0; i < nums.length; i ++){
            if(map.has(nums[i])){
                return true
            }
            map.set(nums[i])
        }

        return false
    }
}
