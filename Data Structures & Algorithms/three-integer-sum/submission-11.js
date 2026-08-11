class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {

        let res = []
        let nums = arr.sort((a, b) => a - b)


        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let j = i + 1
            let k = nums.length - 1

            while (j < k) {

                let ans = nums[k] + nums[j] + nums[i]
                if (ans < 0) j++
                if (ans > 0) k--
                if (ans === 0) {
                    res.push([nums[k], nums[j], nums[i]])
                    j++
                    k--
                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                }
            }
        }

        return res


    }
}
