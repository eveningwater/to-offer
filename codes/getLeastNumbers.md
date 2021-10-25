###  最小的k个数

> 题目:输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。


示例 1：

```js
// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]
```

示例 2：

```js
// 输入：arr = [0,1,2,1], k = 1
// 输出：[0]
```

限制：

0 <= k <= arr.length <= 10000
0 <= arr[i] <= 10000

### 思路分析

本题很简单，其实就是考察的排序算法。我们只要递增排序，然后截取开始索引为0结束索引为k的数组，就是最后的答案。关于排序算法，可以参考这篇[文章](https://segmentfault.com/a/1190000018233346)。本题我们可以直接使用数组的排序算法API来解答。

```js
var getLeastNumbers = function(arr,k) {
    return arr.sort((a,b) => a - b).slice(0,k);
};
```

以上算法，时间复杂度是O(n),空间复杂度也为O(1)。更多详细解题思路参考[题解](https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/zui-xiao-de-kge-shu-by-leetcode-solution/)。

