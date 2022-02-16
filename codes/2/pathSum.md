###  向下的路径节点之和

> 题目:给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

示例1：

![](../../images/2/pathSum-1.jpg)

```js
// 输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
// 输出：3
// 解释：和等于 8 的路径有 3 条，如图所示。
```

示例2：

```js
// 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// 输出：3
```

提示:

* 二叉树的节点个数的范围是 [0,1000]
* -10 ^ 9 <= Node.val <= 10 ^ 9 
* -1000 <= targetSum <= 1000 


> 注意：本题与[主站 437 题](https://leetcode-cn.com/problems/path-sum-iii/)相同。

### 思路分析

本题首先我们可以思考递归遍历每一种可能存在的路径之和等于targetSum，最后相加所有的路径即可。具体做法如下:

* 1. 定义一个统计路径数量的总数。
* 2. 递归相加左子树和右子树。
* 3. 这是直接统计了所有的路径，所以还需要约定一个辅助方法，这个辅助方法的作用就是找到满足路径之和等于targetSum。
* 4. 在辅助方法中，我们也同样需要定义一个统计路径数的变量。然后递归左子树与右子树。

代码如下:

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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(root === null){
        return 0;
    }
    let count = getNodeSum(root,targetSum);
    count += pathSum(root.left,targetSum);
    count += pathSum(root.right,targetSum);
    return count;
};
var getNodeSum = function(node,targetSum){
    let count = 0;
    if(node === null){
        return 0;
    }
    const val = node.val;
    if(val === targetSum){
        count++;
    }
    count = getNodeSum(node.left,targetSum - val);
    count = getNodeSum(node.right,targetSum - val);
    return count;
}
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n ^ 2)，其中 n 为该二叉树节点的个数。对于每一个节点，求以该节点为起点的路径数目时，则需要遍历以该节点为根节点的子树的所有节点，因此求该路径所花费的最大时间为 O(n)，我们会对每个节点都求一次以该节点为起点的路径数目，因此时间复杂度为 O(n)。
* 空间复杂度：O(n),考虑到递归需要在栈上开辟空间。

[更多思路](https://leetcode-cn.com/problems/6eUYwP/solution/xiang-xia-de-lu-jing-jie-dian-zhi-he-by-a1iyy/)。
