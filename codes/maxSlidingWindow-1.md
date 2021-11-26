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

本题的难度比较大。在谈及本题的解法之前，我们首先需要复习一下[包含min函数的栈](./MinStack.md)，在这个示例中，我们通过使用单调栈来实现随意入栈、出栈以获取最小值，其时间复杂度为O(1)。因此，本题，我们也要借鉴单调栈的思路，不同的是本题我们需要使用单调队列。那么什么是单调队列呢？提及单调队列，我们就必须要理解队列，队列是一种数据结构，也可以把它理解成数组，它会有入栈和出栈的操作，对应数组的push和pop。在这里我们使用双端队列，即可以同时从队首和队尾弹出（或弹入）元素，对应数组的shift和pop（或unshift和push）。而满足单调性质（即队列元素单调递增或单调递减）的双端队列，我们就称之为单调队列。

> 其实我们也可以理解数组就是一种特殊的队列。

为什么我们要知道单调队列？因为本题的解题思路就可以使用单调队列，因为滑动窗口本质上也就是一个双端队列。我们假设窗口的区间为[i,j],窗口中的最大值为x<sub>m</sub>。对应伪代码如下:

```js
// 给定窗口双端队列一个默认值，给定窗口长度k为3
const k = 3;
const windowQueue = [1,3,-1];
// 则区间[i,j] 对应[0,windowQueue.length - 1]
// 设最大值为x[m]
let x = 0;
for(let m = 0;m < k;m++){
    x = Math.max(x,windowQueue[m]);
}
// 在这里，我们忽略了循环，所以直接对应定义最大值为x<sub>m</sub>
```

可以看到，当我们滑动窗口向右移动一格的时候，本质上就是往队尾添加一个元素，队首弹出一个元素。也就是windowQueue添加一个nums[j + 1],删除nums[i]，因此区间也就变成了[i + 1,j + 1]。由于删除的nums[i]有可能是窗口的最大值，因此我们需要遍历比较窗口的每一个元素来获取最大值。即:

x<sub>m + 1</sub> = Math.max(nums[i + 1],...,nums[j + 1])

这么分析完了之后，我们实际上也就可以使用暴力循环来解题，暴力算法的时间复杂度我们也就知道了为O(n - k + 1) ≈ O(nk)。

* 如果我们设数组的长度为l,则数组nums一共含有(l - k + 1)个窗口
* 获取窗口的最大值，需要线性时间，为O(k)

下图展示了滑动窗口的过程:

![](../images/maxSlidingWindow-1.png)

以下是我们使用暴力循环解答本题的代码:

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // 存储最大值列表
    let maxValueList = [];
    if(!nums.length){
        return maxValueList;
    }
    // l和r分别为窗口的左边界和右边界，queue即窗口
    let l = 0,r = k - 1,queue = [];
    while(l <= r && r < nums.length - 1){
        if(queue.length < r - l + 1){
            // 当队列中无元素时，需要先添加
            for(let i = 0;i < k;i++){
                queue.push(nums[i]);
            }
        }
        // 查找窗口的最大值
        maxValueList.push(Math.max(...queue));
        // 弹出队首元素
        queue.shift();
        // 弹入队尾元素
        queue.push(nums[r + 1]);
        l++;
        r++;
    }
    return maxValueList;
};
```

但是，本题我们是使用的单调队列来解答。在这里，我们需要保证每轮单调队列queue:

1. queue内仅包含窗口内的元素 => 每轮窗口移除了元素nums[i - 1],则需将对应queue内的对应元素一起移除。
2. queue内的元素非严格递减 => 每轮窗口滑动添加了元素nums[j + 1],需要将对应queue内小于nums[j + 1]的元素删除。

算法流程如下:

1. 初始化: 单调队列queue,结果列表res，数组长度n。

2. 滑动窗口: 左边界范围l∈[1 - k ,n - k],右边界范围r∈[0,n - 1];

    2.1 若l > 0,且队首元素queue[0] === 被删除元素nums[i - 1],则队首元素出队。
    2.2 删除queue内所有小于nums[r]的元素，以保证queue单调递减。
    2.3 将nums[r]添加到queue队尾。
    2.4 若已经形成窗口(即l >= 0),则将窗口最大值(即队首元素queue[0])添加至列表res中。

3. 返回值:返回结果列表。

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // 初始化单调队列和结果列表
    let queue = [],res = new Array(nums.length - k + 1); 
    if(!nums.length){
        return queue;
    }
    for(let r = 0,l = 1 - k;r < nums.length;l++,r++){
        // 删除queue中对应的nums[l - 1]
        if(l > 0 && queue[0] === nums[l - 1]){
            queue.shift();
        }
        // 保持queue递减
        while(queue.length && queue[queue.length - 1] < nums[r]){
            queue.pop();
        }
        // 添加nums[r]到队列
        queue.push(nums[r]);
        // 记录窗口最大值
        if(l >= 0){
            res[l] = queue[0];
        }
    }
    // 返回结果列表
    return res;
};
```

时间复杂度 O(n) ： 其中 n 为数组 nums 长度；线性遍历 nums 占用 O(n) ；每个元素最多仅入队和出队一次，因此单调队列 queue 占用 O(2n) 。
空间复杂度 O(k) ： 双端队列 queue 中最多同时存储 k 个元素（即窗口大小）。


更多详细解题思路参考[题解](https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof/solution/mian-shi-ti-59-i-hua-dong-chuang-kou-de-zui-da-1-6/)。

