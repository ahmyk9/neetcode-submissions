class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

         let newS = s.replace(/[\W_]+/g," ").replace(/\s/g, '').toLowerCase();

        let left = 0
        let right = newS.length - 1

        while(left < right){
            if(newS[left] !== newS[right]){
                return false
            }
                left = left + 1
                right = right - 1

        }

        return true

    }
}
