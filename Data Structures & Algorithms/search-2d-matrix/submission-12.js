class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        

        let l = 0
        let r = matrix[0].length - 1
        let i = 0

        while(i < matrix.length){
            let m = Math.floor((l + r) / 2)

            if(matrix[i][m] === target) return true
            if(matrix[i][m] < target){
                l = m + 1
            }
            if(matrix[i][m] > target){
                r = m - 1
            }

            if(l > r){
                i = i + 1        
                l = 0
                r = matrix[0].length - 1
            } 


        }

        return false

    }
}
