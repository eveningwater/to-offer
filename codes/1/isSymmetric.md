### 对称的二叉树

> 题目:请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3


示例1:

```js
// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
```

示例2:

```js
// 输入：root = [1,2,2,null,3,null,3]
// 输出：false
```
 
> 限制:0 <= 节点个数 <= 1000

### 思路分析

通过题意，我们可以看到，二叉树如果是对称，必定会有如下特点。

* 根节点不为null，且二叉树和二叉树的镜像必定是相等的。
* 如果根节点不为null，那么左子树和右子树各有一个根左节点和根右节点，两者必定是相等的。
* 左子树的左节点和右子树的右节点必定相等，左子树的右节点必定和右子树的左节点相等。

通过如上分析的特点，我们就可以使用递归方法，然后去遍历每一道子树，判断节点是否相同即可。

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
   return !root ? true : recur(root.left,root.right);
};

// 递归方法
var recur = function(l,r){
    // 如果左右节点都为null，则该二叉树只有一个根节点，所以也为对称
    if(!l && !r)return true;
    // 左右节点有一个为null或者两者的值不相等，则一定不对称
    if(!l || !r || l.val !== r.val)return false;

    // 其它情况就是对称的，递归即可
    // 左子树的左节点和右子树的右节点必定相等，左子树的右节点必定和右子树的左节点相等。
    return recur(l.left,r.right) && recur(l.right,r.left);
}
```

时间复杂度 O(N)： 其中 N为二叉树的节点数量，每次执行 recur 可以判断一对节点是否对称，因此最多调用 N/2 次 recur 方法。
空间复杂度 O(N)： 最差情况下，二叉树退化为链表，系统使用 O(N) 大小的栈空间。

[更多思路](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/solution/mian-shi-ti-28-dui-cheng-de-er-cha-shu-di-gui-qing/)。

