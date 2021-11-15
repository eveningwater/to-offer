### 滑动窗口的最大值(1)

> 题目:给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例 1：

```js
// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 
// 解释: 

//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
```

提示：

* 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

> 注意:本题与[主站239题](https://leetcode-cn.com/problems/sliding-window-maximum/)相同。

### 思路分析



```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) { 

};
```

时间复杂度 O(n) ： 其中 n 为数组 nums 长度；线性遍历 nums 占用 O(n) ；每个元素最多仅入队和出队一次，因此单调队列 deque 占用 O(2n) 。
空间复杂度 O(k) ： 双端队列 deque 中最多同时存储 k 个元素（即窗口大小）。


更多详细解题思路参考[题解](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/)。

