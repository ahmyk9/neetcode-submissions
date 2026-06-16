class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
    //first sort the nums
    nums.sort((a,b) => a-b)
    let results = []

    
    //Note the 'i' is acting an an anchor pointer or a third pointer
    //therefore making left pointer start from i + 1
    //as we dont want to count the already checked pointer
    for (let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i-1]){
            continue;
        }
        
        let l = i + 1
        let r = nums.length - 1

        while(l < r){
            const sum = nums[i] + nums[l] + nums[r]
            if(sum > 0){
                r--
            }
            if(sum < 0){
                l++
            }
            if(sum === 0){
                results.push([nums[i] , nums[l] , nums[r]])
                l++
                while(nums[l] == nums[l-1]&& l < r ){
                    l++
                }
            }
        }


    }
    return results




    }
}
