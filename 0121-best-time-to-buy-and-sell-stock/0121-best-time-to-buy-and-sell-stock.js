/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minprice =prices[0];
    for(let  i = 0; i < prices.length; i++){
        if(minprice>prices[i]){
            minprice = prices[i];
        }else {
            maxProfit = Math.max(maxProfit,prices[i]-minprice);
        }
    }
    return maxProfit;
};