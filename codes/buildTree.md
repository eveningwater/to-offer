### 重建二叉树

> 题目:输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

例如，给出

```js
//前序遍历 preorder = [3,9,20,15,7]
//中序遍历 inorder = [9,3,15,20,7]
```

返回如下的二叉树：

```js
    3
   / \
  9  20
    /  \
   15   7
```
> 限制：0 <= 节点个数 <= 5000

### 思路分析

- 方法一：普通解法

在解这道题之前，我们首先需要明白什么是二叉树，前序遍历和中序遍历的遍历顺序是什么？二叉树是一种数据结构，它包含一个根节点以及左右子节点，它是树形结构的一种重要的数据类型。如下图所示:

![](/images/tree.jpg)

二叉树有三种遍历方式，即前序遍历，中序遍历，后序遍历。前序遍历即根->左->右,中序则是左->根->右,而后序遍历则是根->右->左。知晓了以上的概念之后，我们就能很好的解决这道题了，代码如下:

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var buildTree = function (preorder,inorder) {
    if(preorder.length === 0)return null;
    // 根节点
    let rootVal = preorder[0];
    // 当前节点
    let curNode = new TreeNode(rootVal);
    // 中序遍历中根节点的索引
    let rootIndex = inorder.indexOf(rootVal);
    // 左子树,在前序遍历中，根节点的索引为0，因此从1开始截取，从中序遍历中的索引值加1结束即得到左子树,相反则得到右子树
    curNode.left = buildTree(preorder.slice(1,rootIndex + 1),inorder.slice(0,rootIndex));
    curNode.right = buildTree(preorder.slice(rootIndex + 1),inorder.slice(rootIndex + 1));
    return curNode;
};
```

由于用到了2个递归，所以这个算法的时间复杂度为 O(n^2),而空间复杂度为 O(1)。


