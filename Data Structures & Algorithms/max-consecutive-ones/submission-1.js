class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0
        let res = 0
        for(let i = 0; i < nums.length; i++){
            if(nums[i] == 1){
                count++
            }else{
                res = Math.max(res, count);
                count = 0
            }
        }

        return Math.max(res, count);
    }
}
