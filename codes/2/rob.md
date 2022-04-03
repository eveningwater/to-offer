###  房屋偷盗 

> 题目:一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响小偷偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组 nums ，请计算 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额


示例1：

```js
// 输入：nums = [1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
```


示例2：

```js
// 输入：nums = [2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

提示:

* 1 <= nums.length <= 100
* 0 <= nums[i] <= 400


> 注意：本题与[主站 198 题](https://leetcode-cn.com/problems/house-robber/)相同。

### 思路分析

本题也是典型的动态规划算法题，同样的也用动态规划的思路来学习，参考[爬楼梯的最少成本](/codes/2/minCostClimbingStairs.md)思路。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev = 0,cur = 0,temp;
    for(let i = 0;i < nums.length;i++){
        temp = cur;
        cur = Math.max(prev + nums[i],cur);
        prev = temp;
    }
    return cur;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/Gu0c2T/solution/jian-zhi-offer-ii-089-fang-wu-tou-dao-do-y2uu/)。
