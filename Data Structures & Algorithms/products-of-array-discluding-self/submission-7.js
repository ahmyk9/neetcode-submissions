class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = []
        //gets the product
        let product = 1
        let arr = nums.filter(num => num !== 0)
        for(let i = 0; i < arr.length; i++){
            product = product * arr[i]
        }

        //divide the product with the element and push to array then return

    let zeroCount = nums.length - arr.length;

    if (zeroCount === 0) {
        for (let j = 0; j < nums.length; j++) {
            output.push(product / nums[j]);
        }
    } else if (zeroCount === 1) {
        for (let k = 0; k < nums.length; k++) {
            if (nums[k] !== 0) {
                output.push(0);
            } else {
                output.push(product);
            }
        }
    } else {
        for (let k = 0; k < nums.length; k++) {
            output.push(0);
        }
    }
        return output
    }
}
