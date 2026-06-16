class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let l = 0 
    let r = 1

    let maxProfit = 0

    while(r < prices.length){
       let profit =  prices[r] - prices[l]

       if(profit > 0){
        if( profit > maxProfit){
            maxProfit = profit
        }
       }else{
        l = r
       }
       r++
    }
    return maxProfit

    }
}
