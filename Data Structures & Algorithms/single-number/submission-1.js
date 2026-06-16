class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    
    //O(n)^2
    
    // singleNumber(nums) {

    //     for (let i = 0; i < nums.length; i++){
    //     let count = 0
            
    //         for (let j = 0; j < nums.length; j++){
    //             if(nums[i] === nums[j]){
    //                 count++

    //             }
    //         }

    //         if (count === 1){
    //             return nums[i]
    //         }
    //     }
    // }

    singleNumber(nums) {
        const map = new Map()
        for (let i = 0; i < nums.length; i++){
            let count = map.get(nums[i])
            map.set(nums[i], count + 1 || 1)
        }
        for (let j = 0; j < nums.length; j++){
           if(map.get(nums[j]) === 1 ){
                return nums[j] 
           }
        }
        
    }

}
