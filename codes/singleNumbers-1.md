### 数组中数字出现的次数(1)

> 题目:一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

示例 1：

```js
// 输入：nums = [4,1,4,6]
// 输出：[1,6] 或 [6,1]
```

示例 2：

```js
// 输入：nums = [1,2,10,4,1,4,3,3]
// 输出：[2,10] 或 [10,2]
```

限制:

* 2 <= nums.length <= 10000

### 思路分析



```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    
};
```

时间复杂度 O(n)： 线性遍历 nums使用 O(n) 时间，遍历 x ^ y 二进制位使用 O(32) = O(1) 时间。
空间复杂度 O(1)： 辅助变量 a, b, x, y使用常数大小额外空间。

更多详细解题思路参考[题解](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/jian-zhi-offer-56-i-shu-zu-zhong-shu-zi-tykom/)。

