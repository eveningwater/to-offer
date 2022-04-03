###  爬楼梯的最少成本 

> 题目:数组的每个下标作为一个阶梯，第 i 个阶梯对应着一个非负数的体力花费值 cost[i]（下标从 0 开始）。
每当爬上一个阶梯都要花费对应的体力值，一旦支付了相应的体力值，就可以选择向上爬一个阶梯或者爬两个阶梯。
请找出达到楼层顶部的最低花费。在开始时，你可以选择从下标为 0 或 1 的元素作为初始阶梯。

示例1：

```js
// 输入：cost = [10, 15, 20]
// 输出：15
// 解释：最低花费是从 cost[1] 开始，然后走两步即可到阶梯顶，一共花费 15 。
```


示例2：

```js
// 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// 输出：6
// 解释：最低花费方式是从 cost[0] 开始，逐个经过那些 1 ，跳过 cost[3] ，一共花费 6 。
```

提示:

* 2 <= cost.length <= 1000
* 0 <= cost[i] <= 999


> 注意：本题与[主站 746 题](https://leetcode-cn.com/problems/min-cost-climbing-stairs/)相同。

### 思路分析

假设数组cost的长度为n,则n个阶梯对应下标为0 ~ n - 1,楼层顶部对应下标为n，问题就等价于计算到达n的最小规划，因此本题可以使用动态规划的算法思想来回答。创建长度为n + 1的数组dp，其中dp[i]代表达到下标i的最小花费。由于可以选择下标0到1作为初始阶梯，因此dp[0] = dp[1] = 0,当2 <= i <= n时，可以从下标i - 1使用cost[i - 1]的花费达到下标i，或者可以从下标i - 2使用cost[i - 2]的花费达到下标i。为了使得总花费最小，dp[i]应该取以上两项的最小值，因此状态转移方程如下:

dp[i] = min(dp[i - 1] + cost[i - 1],dp[i - 2] + cost[i - 2])

依次计算dp中的每一项的值，最终得到的dp[n]即为达到楼层顶部的最小花费。

由于当i >= 2时，dp[i]只与dp[i - 1]和dp[i - 2]有关，因此可以使用变量的交换来替代数组dp的创建，从而将空间复杂度降为O(1)。

```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    let prev = 0,cur = 0;
    for(let i = 2;i <= n;i++){
        const next = Math.min(cur + cost[i - 1],prev + cost[i - 2]);
        prev = cur;
        cur = next;
    }
    return cur;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/GzCJIP/solution/pa-lou-ti-de-zui-shao-cheng-ben-by-leetc-xx4h/)。
