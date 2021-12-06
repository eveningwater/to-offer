### 股票的最大利润

> 题目:假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？


示例 1：

```js
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```

示例 2：

```js
// 输入: [7,6,4,3,1]
// 输出: 0
// 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

限制:

* 0 <= 数组长度 <= 10 ^ 5


### 思路分析

根据题意，我们应该知道给定数组中两个数字之间的最大差值即为最大利润，并且，第二个数字（卖出价格）不能低于第一个数字（买入价格），因此我们应该就知道了，对于递减的数组，是一定没有最大利润的，也就是它的最大利润应该是0。

也因此此问题可以转化为对于每一个数组项i和j，有Math.max(prices[j] - prices[i])，这个值就是股票的最大利润。因此，我们可以使用暴力循环就可以解决本题。代码如下所示:

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 存储最大利润的变量
    let maxProfit = 0;
    // 暴力循环
    for(let i = 0;i < prices.length;i++){
        for(let j = i + 1;j < prices.length;j++){
            // 两个数字相减
            let profit = prices[j] - prices[i];
            // 如果profit大于最大利润，则替换掉
            if(profit > maxProfit){
                maxProfit = profit;
            }
        }
    }
    return maxProfit;  
};
```

时间复杂度：O(n ^ 2)。循环运行n * (n - 1) / 2次。
空间复杂度：O(1)。只使用了常数个变量。

为了降低时间复杂度，我们可以使用动态规划的算法来解决。我们可以试想一下，我们如果要想利润最大，那肯定是要历史的最低点买入，然后在最低点之后的最高点卖出，那么此时一定是最大的利润。因此，我们可以首先选取数组中最小值作为买入点，然后遍历数组，每天都尝试去做利润的比较，直到最后遍历完成就得到了最大利润。代码如下所示:

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 当然首先需要考虑prices如果为空数组，则直接返回0
    if(!prices.length){
        return 0;
    }
    // 定义买入的最小价格,买入从第一项开始，因此循环我们就可以从下标为1开始，然后定义最大利润为0
    let min = prices[0],maxProfit = 0;
    // 开始循环
    for(let i = 1;i < prices.length;i++){
        // 取最小值
        min = Math.min(prices[i],min);
        // 利润最大值比较
        maxProfit = Math.max(maxProfit,prices[i] - min);
    }
    return maxProfit;
};
```

时间复杂度 O(n)： 其中 n 为 prices 列表长度，动态规划需遍历 prices 。
空间复杂度 O(1)： 变量 min 和 maxProfit 使用常数大小的额外空间。



更多详细解题思路参考[题解](https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/solution/mian-shi-ti-63-gu-piao-de-zui-da-li-run-dong-tai-2/)。

