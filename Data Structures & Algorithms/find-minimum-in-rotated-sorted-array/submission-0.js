class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //o(n)
        // let arr = nums.sort((a,b) => (a - b))
        // return arr[0]
        
        //o(log n)
        
        let l = 0
        let r = nums.length - 1

        while(l <= r){
            let m = Math.floor((r + l) / 2)
            if (nums[m] > nums[r]){
                l = m + 1
            }else{
                r = m
            }

            if(l == r) return nums[l]
        }

     

    }
}
