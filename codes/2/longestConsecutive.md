###  最长连续序列
 
> 题目:给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

示例1：

```js
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
```

示例2：

```js
// 输入：nums = [0,3,7,2,5,8,4,6,0,1]
// 输出：9
```

提示:

* 0 <= nums.length <= 10 ^ 4
* -1 ^ 9 <= nums[i] <= 10 ^ 9

> 进阶：可以设计并实现时间复杂度为 O(n) 的解决方案吗？

> 注意：本题与[主站 128 题](https://leetcode-cn.com/problems/longest-consecutive-sequence/)相同。

### 思路分析

本题我们可以尝试将数组按照从小到大排序，然后利用set去重，接着遍历计算连续数的个数这里，我们需要额外建立一个变量来确定是否是最大的连续数列，因为我们遍历连续数列的个数不一定是最大的连续数列的个数。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const newNums = [...new Set(nums.sort((a,b) => a - b))];
    if(newNums.length === 0){
        return 0;
    }
    let count = 1,
        res = 0;
    for(let i = 0;i < newNums.length - 1;i++){
        if(newNums[i] === newNums[i + 1] - 1){
            count++;
        }else{
            if(count > res){
                res = count;
            }
            //重置为1，相当于就是重新统计连续子数列的个数
            count = 1;
        }
    }
    return Math.max(res,count);
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * log<sup>n</sup>),其中n为数组nums的长度，时间复杂度实际上就是看排序的时间复杂度。
* 空间复杂度：O(n),需要使用长度为n的数组存储去重排序后的数组。

[更多思路](https://leetcode.cn/problems/WhsWhI/solution/zui-chang-lian-xu-xu-lie-by-leetcode-sol-z8jk/)。
