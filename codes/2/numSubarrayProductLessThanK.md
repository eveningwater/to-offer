### 乘积小于 K 的子数组

> 题目:给定一个正整数数组 nums和整数 k ，请找出该数组内乘积小于 k 的连续的子数组的个数。


示例 1：

```js
// 输入: nums = [10,5,2,6], k = 100
// 输出: 8
// 解释: 8 个乘积小于 100 的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
// 需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
```

示例 2：

```js
// 输入: nums = [1,2,3], k = 0
// 输出: 0
```

提示:

* 1 <= nums.length <= 3 * 10 ^ 4
* 1 <= nums[i] <= 1000
* 0 <= k <= 10 ^ 6

> 注意：本题与[主站 713 题](https://leetcode-cn.com/problems/subarray-product-less-than-k/ )相同。

### 思路分析

本题的思路与[和大于等于 target 的最短子数组](/codes/2/minSubArrayLen.md)的思路很相似，都是使用滑动窗口的算法来解决，所以这里不做详解。但是这里额外需要注意一点，那就是如果数组中某一项比k还大，那么此时start指针会大于等于end指针，这里就无需计算。还有一点需要注意，那就是乘积的初始值不是0，而是1。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    const len = nums.length;
    if(!len){
        return 0;
    }
    let start = 0,//开始指针
        end = 0,//结束指针
        acc = 1,//存储乘积
        res = 0;//存储结果
    while(end < len){
        acc *= nums[end];
        while(acc >= k && start <= end){
            acc /= nums[start];
            start++:
        }
        if(start <= end){
            res += end - start + 1;
        }
        end++;
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度:O(n ^ 2)。最坏情况下第一个while循环使用O(n),第二个循环也是O(n)。

* 空间复杂度:O(1),使用常数的空间。

[更多思路](https://leetcode-cn.com/problems/ZVAVXX/solution/jian-zhi-offerii009cheng-ji-xiao-yu-kde-q158e/)。
