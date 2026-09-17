class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        

        let l = 0 
        let r = numbers.length - 1 

        while(l < r) {
            let ans = numbers[l] + numbers[r]
            if(ans > target) r--
            if(ans < target) l++
            if(ans == target) return [l + 1, r + 1]

        }



    }
}
