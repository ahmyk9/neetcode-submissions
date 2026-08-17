class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b) => (a-b))

        let res = []

        for(let i = 0; i < nums.length; i++){
            let l = i + 1
            let r = nums.length - 1
            if (i > 0 && nums[i] === nums[i - 1]) continue; //the nums[i] === nums[i - 1] is dupe checks (if dupe in nums array, then skip the iteration)
            while(l < r){

                let ans = nums[l] + nums[r] + nums[i]
                
                if(ans === 0){
                    res.push([nums[l], nums[r], nums[i]])
                    l++
                    r--
                    
                    while(nums[l] == nums[l - 1]) l++ //these while loops are dupe checks as well, if the iterations besides it is was counted it moves the pointer one more (right poiner to the left,   and left pointer to the right)
                    while(nums[r] == nums[r + 1]) r--
                }
                if(ans > 0) r--
                if(ans < 0) l++
                
            }



        }

        return res
    }
}
