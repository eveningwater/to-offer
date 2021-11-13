### 和为s的连续正数序列

> 题目:输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。


示例 1：

```js
// 输入：target = 9
// 输出：[[2,3,4],[4,5]]
```

示例 2：

```js
// 输入：target = 15
// 输出：[[1,2,3,4,5],[4,5,6],[7,8]]
```

限制:

* 1 <= target <= 10 ^ 5

### 思路分析



```js
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(nums) {
    
};
```

时间复杂度 O(n)： 其中 n = target；连续整数序列至少有两个数字，而 i < j 恒成立，因此至多循环 target / 2次，使用 O(n)时间；循环内，计算 j 使用 O(1) 时间；当 i = 1 时，达到最大序列长度![](../images/findContinuousSequence-O.png)，考虑到解的稀疏性，将列表构建时间简化考虑为 O(1)；
空间复杂度 O(1)： 变量 i , j 使用常数大小的额外空间。


更多详细解题思路参考[题解](https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/jian-zhi-offer-57-ii-he-wei-s-de-lian-xu-t85z/)。

