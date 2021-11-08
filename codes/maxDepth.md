### 二叉树的深度

> 题目:输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。

例如：

给定二叉树 [3,9,20,null,null,15,7]，

```js
//   3
//  / \
// 9  20
//   /  \
//  15   7
```

返回它的最大深度 3 。

提示:

* 节点总数 <= 10000

### 思路分析

本题我们可以采取后序遍历来解答。根据题意我们可以得出一个要点。那就是求该树的深度等价于求左子树的深度与右子树的深度两者比较得到的最大值加1即可。而后序遍历，我们通常是递归来实现。当然我们还需要做一次判断，那就是如果树是空树，则直接返回0即可。如下图所示:

![](../images/maxDepth-1.png)

算法流程如下:

1. 终止条件: 当root为空，则代表已越过叶节点，直接返回0。
2. 递推工作:本质上就是对树做后序遍历。
   2.1 计算root节点的左子树的深度，即调用maxDepth(root.left)。
   2.2 计算root节点的右子树的深度，即调用maxDepth(root.right)。
3. 返回值:返回此树的深度。即Math.max(maxDepth(root.left),maxDepth(root.right)) + 1即可。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root === null){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
```

时间复杂度 O(n)： n为树的节点数量，计算树的深度需要遍历所有节点。
空间复杂度 O(n)： 最差情况下（当树退化为链表时），递归深度可达到n。

更多详细解题思路参考[题解](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/solution/mian-shi-ti-55-i-er-cha-shu-de-shen-du-xian-xu-bia/)。

