class Solution {
    public int maxProfit(int[] prices) {
        /** use two pointers
            iterate through the array in reverse
            left = 0
            right = length - 1;

            profit = 0
            while(left < right){
                leftVal = prices[left]
                rightVal = prices[right]
                sum = rightVal - leftVal
                if (sum < 0){
                    left++
                    continue
                } else if (sum >= 0) {
                    right--
                    if (sum > profit) {
                        profit = sum
                    }
                }
            }
        */
        int length = prices.length;
        int left = 0;
        int right = 1;
        int profit = 0;
        while(right < length) {
            int buy = prices[left];
            int sell = prices[right];
            int total = sell - buy;

            if (buy < sell) {
                profit = Math.max(profit, total);
            }else {
                left = right;
            }
            right++;
        }
        return profit;
    }
}
