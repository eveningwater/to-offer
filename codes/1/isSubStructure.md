### 树的子结构

> 题目:输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
B是A的子结构， 即 A中有出现和B相同的结构和节点值。

例如:

给定的树 A:
     3
    / \
   4   5
  / \
 1   2
给定的树 B：
   4 
  /
 1
返回 true，因为 B 与 A 的一个子树拥有相同的结构和节点值。


示例 1：

```js
// 输入：A = [1,2,3], B = [3,1]
// 输出：false
```
示例 2：

```js
// 输入：A = [3,4,5,1,2], B = [4,1]
// 输出：true
```

 
> 限制:0 <= 节点个数 <= 10000

### 思路分析

首先根据题意，只要A或者B有一个为空树，则直接返回false。这里可以考虑最简单的方法，也就是递归法，先遍历A树的根节点，然后再递归遍历A树的左子树或者右子树。如果B在递归的时候已经为空树了，则证明B树只有一个节点，并且能在A树中找到，所以返回true。如果B树节点和A树递归的节点不同，则直接返回false，如果在递归的时候A树不存在了，则代表B树永远和B树不相等，也返回false。最后不停的递归，直到两者的节点都遍历完成为止。

代码如下:

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    // 如果A或B为空树，则直接返回false
    if(!A || !B)return false;
    // 先比较根节点，再递归比较左子树和右子树
    return isSameTree(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B);
};

var isSameTree = function(A,B){
    // 如果B树为空树了，则证明B树只有一个节点，并且能在A树中找到，所以直接返回true
    if(!B)return true;
    // 如果A树为空树，则B树不可能是A树的子树
    if(!A)return false;
    // 如果A树的节点和B树的节点不同值，则返回false
    if(A.val !== B.val)return false;
    // 递归子树
    return isSameTree(A.left,B.left) && isSameTree(A.right,B.right);
}
```

该算法的时间复杂度用到了2次递归，所以时间复杂度应为 O(m * n),而空间复杂度为 O(1)。

