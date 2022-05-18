###  重建序列
 
> 题目:请判断原始的序列 org 是否可以从序列集 seqs 中唯一地 重建 。

序列 org 是 1 到 n 整数的排列，其中 1 ≤ n ≤ 104。重建 是指在序列集 seqs 中构建最短的公共超序列，即  seqs 中的任意序列都是该最短序列的子序列。

示例1：

```js
// 输入: org = [1,2,3], seqs = [[1,2],[1,3]]
// 输出: false
// 解释：[1,2,3] 不是可以被重建的唯一的序列，因为 [1,3,2] 也是一个合法的序列。
```

示例2：

```js
// 输入: org = [1,2,3], seqs = [[1,2]]
// 输出: false
// 解释：可以重建的序列只有 [1,2]。
```

示例3：

```js
// 输入: org = [1,2,3], seqs = [[1,2],[1,3],[2,3]]
// 输出: true
// 解释：序列 [1,2], [1,3] 和 [2,3] 可以被唯一地重建为原始的序列 [1,2,3]。
```

示例4：

```js
// 输入: org = [4,1,5,2,6,3], seqs = [[5,2,6,3],[4,1,5,2]]
// 输出: true
```

提示:

* 1 <= n <= 104
* org 是数字 1 到 n 的一个排列
* 1 <= segs[i].length <= 105
* seqs[i][j] 是 32 位有符号整数

> 注意：本题与[主站 444 题](https://leetcode-cn.com/problems/sequence-reconstruction/)相同。

### 思路分析

```js
/**
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
var sequenceReconstruction = function(org, seqs) {

};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O()。
* 空间复杂度：O()。

[更多思路](https://leetcode.cn/problems/QA2IGt/solution/ke-cheng-shun-xu-by-leetcode-solution-mq6d/)。
