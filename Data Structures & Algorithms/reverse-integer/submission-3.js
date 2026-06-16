class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {

        let min = -2147483648
        let max = 2147483648

        // if (x < min ||  x > max ){
        //     return 0
        // }
        
        
        let str = x.toString()

        let reverseStr = ''
        for(let i = 0; i < str.length; i++){
                reverseStr = str[i] + reverseStr 
        }
        
        let ans = parseInt(reverseStr)
        if(x < 0){
            ans *= -1
        }


        if (ans < min ||  ans > max ){
            return 0
        }

        return ans

    }
}
