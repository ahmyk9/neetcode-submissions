class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        //Set Range
        let min = -2147483648
        let max = 2147483648

        let numsString = x.toString()
        let reverseStr = ''

        for(let i = 0; i < numsString.length; i++){
            reverseStr =  numsString[i]  + reverseStr
        }

        let ans = parseInt(reverseStr)

        if (x < 0){
            return ans * -1
        }

        if (ans < min || ans > max){
            return 0
        }



        return ans

    }
}
