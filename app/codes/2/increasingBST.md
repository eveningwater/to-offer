###  展平二叉搜索树

> 题目:给你一棵二叉搜索树，请 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

示例1：

![](../../images/2/increasingBST-1.jpg)

```js
// 输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// 输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
```

示例2：

![](../../images/2/increasingBST-2.jpg)

```js
// 输入：root = [5,1,7]
// 输出：[1,null,5,null,7]
```

提示:

* 树中节点数的取值范围是 [1, 100]
* 0 <= Node.val <= 1000


> 注意：本题与[主站 897 题](https://leetcode-cn.com/problems/increasing-order-search-tree/)相同。

### 思路分析

本题根据题意要求返回我们按照中序遍历的结果改造而成的，只有右节点的等价二叉搜索树。我们可以进行如下操作:

* 1.先对输入的二叉搜索树执行中序遍历，然后添加到结果列表中。
* 2. 然后根据列表中的节点值，创建等价的只含有右节点的二叉搜索树，其过程等价于根据节点创建链表。

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
var increasingBST = function(root) {
    const res = [];
    inOrder(root,res);
    //重新构造只含有右节点的二叉搜索树
    const dummyNode = new TreeNode(-1);
    let curNode = dummyNode;
    for(const value of res){
        curNode.right = new TreeNode(value);
        curNode = curNode.right;
    }
    return dummyNode.right;
};
//中序遍历
var inOrder = function(node,res){
    if(!node){
        return;
    }
    inOrder(node.left,res);
    res.push(node.val);
    inOrder(node.right,res);
}
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)，其中 n 是二叉搜索树的节点总数。
* 空间复杂度：O(n)，其中 n 是二叉搜索树的节点总数。需要长度为 n 的列表保存二叉搜索树的所有节点的值。

[更多思路](https://leetcode-cn.com/problems/NYBBNL/solution/zhan-ping-er-cha-sou-suo-shu-by-leetcode-pmxr/)。
