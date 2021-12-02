### 二叉树的镜像

> 题目:请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9

镜像输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1


示例:

```js
// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
```
 
> 限制:0 <= 节点个数 <= 1000

### 思路分析

通过题意，我们可以看到，所谓的镜像就是将原本二叉树的左子树和右子树调换一下位置即可，所以本题我们通过创建一个中间变量，然后递归遍历整个二叉树，然后交换左子树与右子树的位置即可。

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
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    // 判断如果root是空树，直接返回null
    if(!root)return null;
    // 定义一个中间变量,左子树，右子树
    let temp,left = root.left,right = root.right;
     // 中间变量先存储左子树，然后开始调换顺序
    temp = left;
    // 左右子树不可能只有一个节点，所以需要递归去遍历所有的节点
    // 左子树等于右子树
    root.left = mirrorTree(right);
    // 右子树等于存储的左子树
    root.right = mirrorTree(temp);
};
```

该算法平均下来时间复杂度应为 O(n),而空间复杂度为 O(1)。

[更多思路](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/solution/mian-shi-ti-27-er-cha-shu-de-jing-xiang-di-gui-fu-/)。

