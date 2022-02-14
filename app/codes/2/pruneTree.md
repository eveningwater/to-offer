###  二叉树剪枝

> 题目:给定一个二叉树 根节点 root ，树的每个节点的值要么是 0，要么是 1。请剪除该二叉树中所有节点的值为 0 的子树。

节点 node 的子树为 node 本身，以及所有 node 的后代。

示例1：

```js
// 输入: [1,null,0,0,1]
// 输出: [1,null,0,null,1] 
// 解释: 
// 只有红色节点满足条件“所有不包含 1 的子树”。
// 下图为返回的答案。
```

![](../../images/2/pruneTree-1.png)

示例2：

```js
// 输入: [1,0,1,0,0,0,1]
// 输出: [1,null,1,null,1]
// 解释: 如下图所示:
```

![](../../images/2/pruneTree-2.png)

示例3：

```js
// 输入: [1,1,0,1,1,0,1,0]
// 输出: [1,1,0,1,1,null,1]
// 解释: 如下图所示:
```

![](../../images/2/pruneTree-3.png)

提示:

* 二叉树的节点个数的范围是 [1,200]
* 二叉树节点的值只会是 0 或 1


> 注意：本题与[主站 814 题](https://leetcode-cn.com/problems/binary-tree-pruning/)相同。

### 思路分析

本题可以使用递归来实现，首先我们需要找到终止递归的条件。分为2种情况，如下所示:

* 1. root为空时。
* 2. 子节点没有左右子树，并且子节点的值为0。

根据这两个条件，我们很快可以写出如下代码:

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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    let node = root;
    //停止递归
    if(root === null){
        return node;
    }
    //递归左子树
    node.left = pruneTree(root.left);
    //递归右子树
    node.right = pruneTree(root.right);
    //还有一个递归条件
    if(node.left === null && node.right === null && node.val === 0){
        node = null;
    }
    return node;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/pOCWxh/solution/jian-zhi-offer-2-mian-shi-ti-47-shu-zhon-mztd/)。
