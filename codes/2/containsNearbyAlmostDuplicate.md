###  值和下标之差都在给定的范围内

> 题目:给你一个整数数组 nums 和两个整数 k 和 t 。请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，同时又满足 abs(i - j) <= k 。

如果存在则返回 true，不存在返回 false。

示例1：

```js
// 输入：nums = [1,2,3,1], k = 3, t = 0
// 输出：true
```

示例2：

```js
// 输入：nums = [1,0,1,1], k = 1, t = 2
// 输出：true
```

示例3：

```js
// 输入：nums = [1,0,1,1], k = 1, t = 2
// 输出：true
```

提示:

* 0 <= nums.length <= 2 * 10 ^ 4
* -2 ^ 31 <= nums[i] <= 2 ^ 31 - 1
* 0 <= k <= 10 ^ 4
* 0 <= t <= 2 ^ 31 - 1


> 注意：本题与[主站 220 题](https://leetcode-cn.com/problems/contains-duplicate-iii/)相同。

### 思路分析

本题我们可以采用暴力解法，也就是双层循环，需要注意的是外层循环从头到尾遍历数组，内层则需要从i + k开始，然后找到abs(nums[i] - nums[j]) <= t即返回true，否则返回false。代码如下:

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i = 0;i < nums.length;i++){
        for(let j = i + 1;j <= i + k && j < nums.length;j++){
            if(Math.abs(nums[i] - nums[j]) <= t){
                return true;
            }
        }
    }
    return false;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * k)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/7WqeDu/solution/zhi-he-xia-biao-zhi-chai-du-zai-gei-ding-94ei/)。
