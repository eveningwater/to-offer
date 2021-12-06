### 数组中出现次数超过一半的数字

> 题目:数组中有一个数字出现的次数超过数组长度的一半,请找出这个数字。你可以假设数组是非空的,并且给定的数组总是存在多数元素。


示例:

```js
// 输入: [1, 2, 3, 2, 2, 2, 5, 4, 2]
// 输出: 2
```

限制：

1 <= 数组长度 <= 50000

### 思路分析

本题的解法很多,如果只是使用基本的循环来完成,比较简单没什么难度。但是要寻找一种优雅的解决方案,却还是有一点难度的。比如本题可以采用著名的`Boyer-Moore投票算法`来解决。这里我们可以把出现次数超过2次以上的数称作是众数。投票算法的步骤如下:

1. 维护一个候选的众数vote以及它出现的次数count。初始的时候这个众数的值可以是任意的值,例如0,count的值也是0。
2. 我们去遍历数组nums的每个数字num:
    2.1 当count为0的时候,记当前的数字num是众数。
    2.2 当num=vote的时候,则count加1,否则count减1。
3. 返回的众数vote即我们的答案。


```js
var majorityElement = function(nums) {
    let vote = 0,count = 0,l = nums.length;
    for(let i = 0;i < l;i++){
        if(count === 0){
            vote = nums[i];
        }
        count += nums[i] === vote ? 1 : -1;
    }
    return vote;
};
```

时间复杂度:O(n)。Boyer-Moore算法只对数组进行了一次遍历。

空间复杂度:O(1)。Boyer-Moore算法只需要常数级别的额外空间。


更多详细解题思路参考[题解](https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/solution/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-pvh8/)。

