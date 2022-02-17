###  节点之和最大的路径

> 题目:路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给定一个二叉树的根节点 root ，返回其 最大路径和，即所有路径上节点值之和的最大值。

示例1：

![](../../images/2/maxPathSum-1.jpg)

```js
// 输入：root = [1,2,3]
// 输出：6
// 解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
```

示例2：

![](../../images/2/maxPathSum-2.jpg)

```js
// 输入：root = [-10,9,20,null,null,15,7]
// 输出：42
// 解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
```

提示:

* 树中节点数目范围是 [1, 3 * 10 ^ 4]
* -1000 <= Node.val <= 1000


> 注意：本题与[主站 124 题](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)相同。

### 思路分析

在二叉树中，每一个节点的值有正有负，如果是负值的话，我们就要想办法去掉。根据题意，我们可以知道节点的最大路径和等于当前节点的值加上左子树节点的最大值以及右子树节点的最大值，因此我们可以采用后序遍历，先求出左子树节点的最大值，然后再求出右子树节点的最大值，再取节点的最大值。也就是说我们可以使用深度优先搜索算法递归遍历二叉树，从而得到左右子树节点的最大值。代码如下:

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    //初始化最大值
    let maxSum = -Infinity;
    const dfs = (node) => {
        if(node === null){
            return 0;
        }
        let left = Math.max(dfs(node.left),0),
            right = Math.max(dfs(node.right),0);
        maxSum = Math.max(maxSum,node.val + left + right);
        //返回当前节点的最大路径和
        return node.val + Math.max(left,right);
    }
    dfs(root);
    return maxSum;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/jC7MId/solution/jian-zhi-offer-2-mian-shi-ti-51-shu-zhon-aumb/)。
