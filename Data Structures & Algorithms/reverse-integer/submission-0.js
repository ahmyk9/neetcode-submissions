class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        const min = -1000000000; // -2^31
        const max =  1000000000; // 2^31 - 1
        let str = x.toString()
        let reverseStr = ''
        for (let i = 0; i < str.length; i++){
            reverseStr = str[i] + reverseStr 
        }

        let reverseInt = parseInt(reverseStr)

        if (x < max && x > min){
            if(x < 0){
                return reverseInt * -1
            }

            return reverseInt
        }
        return 0

        

    }
}
