class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        // o(n) - time complexity
        // for(let i = 0; i < nums.length; i++){
        //     if(nums[i] !== target){
        //         return i
        //     }
        // }
        // return -1


        // o(logn)
        let l = 0
        let r = nums.length - 1


        while(l <= r){
        let m = Math.floor( (l + r)/2)
            if(nums[m] == target) return m
            if(nums[m] > target){
                r = m - 1 
            }
            if(nums[m] < target){
                l = m + 1 
            }


        }

        return -1



    }
}
