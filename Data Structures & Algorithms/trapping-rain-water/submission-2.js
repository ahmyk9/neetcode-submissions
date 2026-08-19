class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {

        let forwardMax = []
        let heightMax = 0
        for(let i = 0; i < heights.length; i++){ // o(n)
            if(heights[i] > heightMax){
                heightMax = heights[i]
            } 
            forwardMax.push(heightMax)
        }

        let backwardMax = []
        let heightMax2 = heights[heights.length - 1]
        for(let i = heights.length - 1; i >= 0; i--){ // o(n)
            if(heights[i] > heightMax2){
                heightMax2 = heights[i]
            } 
            backwardMax.push(heightMax2)
        }
        backwardMax.reverse() // o(n)

        let sum = 0
        for(let i = 0; i < heights.length; i++){ // o(n)
            let ans = (Math.min(forwardMax[i], backwardMax[i])) - heights[i]
            sum = ans + sum
        }
        
        return sum
        // o(4n) = o(n)

        
    }
}
