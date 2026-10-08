class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        //  [-1,0,2,4,6,8], target = 2

        let l = 0
        let r = nums.length - 1

        while(l <= r){
            let m = Math.floor( (r + l) / 2 )

            if(nums[m] == target) return m
            if(nums[m] < target){
                l = m + 1
            }
            if(nums[m] > target){
                r = m - 1
            }

        }

        return -1


    }
}
