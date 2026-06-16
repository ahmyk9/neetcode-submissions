class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let Nnums = nums.sort((a,b) => a-b)

        let target = 0
        let arr = []


        for ( let i = 0; i < Nnums.length; i++ ){

            if (Nnums[i] == Nnums[i - 1]){
                continue;
            }

            let l = i + 1
            let r = Nnums.length - 1

            while( l < r){
            let sum = Nnums[i] + Nnums[l] + Nnums[r]
                if(sum < target){
                    l++
                } 
                if(sum > target){
                    r--
                }
                if (sum == target){
                    arr.push([Nnums[i], Nnums[l], Nnums[r]])
                    l++
                    while(Nnums[l] == Nnums[l - 1] && l < r){
                        l++
                    
                    }
            }
        
            }

        }

        return arr


    }
}
