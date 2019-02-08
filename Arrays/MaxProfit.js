var maxProfit = function(prices) {
  let min = Infinity;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i];
    if (currentPrice <= min) {
      min = currentPrice;
    } else if (currentPrice - min > profit) {
      profit = currentPrice - min;
    }
  }
  return profit;
};
