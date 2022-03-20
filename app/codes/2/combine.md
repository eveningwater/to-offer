###  含有 k 个元素的组合

> 题目:给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例1：

```js
// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
```


示例2：

```js
// 输入: n = 1, k = 1
// 输出: [[1]]
```

提示:

* 1 <= n <= 20
* 1 <= k <= n

> 注意：本题与[主站 77 题](https://leetcode-cn.com/problems/combinations/)相同。

### 思路分析

本题和上一题类似，借鉴上一题[所有子集](/codes/2/subsets.md)的深度优先搜索算法，结合剪枝，我们就可以完成本题的解答。

```js
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const dfs = (index,k,list) => {
        //剪枝情况
        if(n - index + 1 < k){
            return;
        }
        if(k === 0){
            res.push(list.slice());
            return;
        }
        list.push(index);
        dfs(index + 1,k - 1,list);
        list.pop();
        dfs(index + 1,k,list);
    }
    dfs(1,k,[]);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/uUsW3B/solution/java-shen-du-you-xian-sou-suo-dfsyu-jian-qx47/)。
