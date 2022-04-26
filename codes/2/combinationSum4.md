###  排列的数目
 
> 题目:给定一个由 不同 正整数组成的数组 nums ，和一个目标整数 target 。请从 nums 中找出并返回总和为 target 的元素组合的个数。数组中的数字可以在一次排列中出现任意次，但是顺序不同的序列被视作不同的组合。

题目数据保证答案符合 32 位整数范围。


示例1：

```js
// 输入：nums = [1,2,3], target = 4
// 输出：7
// 解释：
// 所有可能的组合为：
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
```


示例2：

```js
// 输入：nums = [9], target = 3
// 输出：0
```

提示:

* 1 <= nums.length <= 200
* 1 <= nums[i] <= 1000
* nums 中的所有元素 互不相同
* 1 <= target <= 1000

> 进阶：如果给定的数组中含有负数会发生什么？问题会产生何种变化？如果允许负数出现，需要向题目中添加哪些限制条件？

> 注意：本题与[主站 377 题](https://leetcode-cn.com/problems/combination-sum-iv/)相同。

### 思路分析

本题解题思路和上一题[最少的硬币数目](./coinChange.md)很相似，同样也是使用动态规划来解答。

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const len = nums.length,
          dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for(let i = 1;i <= target;i++){
        for(let j = 0;j < len;j++){
            dp[i] += dp[i - nums[j]];
        }
    }
    return dp[target];
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(target * n),其中 target 是目标值，n 是数组 nums 的长度。需要计算长度为 target + 1 的数组 dp 的每个元素的值，对于每个元素，需要遍历数组 nums 之后计算元素值。
* 空间复杂度：O(target),需要创建长度为 target + 1 的数组dp。

[更多思路](https://leetcode-cn.com/problems/D0F0SV/solution/pai-lie-de-shu-mu-by-leetcode-solution-og7w/)。
