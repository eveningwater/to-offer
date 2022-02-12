###  二叉树最底层最左边的值

> 题目:给定一个二叉树的 根节点 root，请找出该二叉树的 最底层 最左边 节点的值。

假设二叉树中至少有一个节点。

示例1：

![](../../images/2/findBottomLeftValue-1.jpg)

```js
// 输入: root = [2,1,3]
// 输出: 1
```

示例2：

![](../../images/2/findBottomLeftValue-2.jpg)

```js
// 输入: [1,2,3,4,null,5,6,null,null,7]
// 输出: 7
```

提示:

* 二叉树的节点个数的范围是 [1,10 ^ 4]
* -2 ^ 31 <= Node.val <= 2 ^ 31 - 1


> 注意：本题与[主站 513 题](https://leetcode-cn.com/problems/find-bottom-left-tree-value/)相同。

### 思路分析

本题和[二叉树每层的最大值](/codes/2/largestValues.md)的求解思路很类似，同样的我们需要定义一个层级变量确定层级是否是最后一层，然后再递归遍历即可，代码如下:

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
var findBottomLeftValue = function(root) {
    let res = root,maxLevel = 0;
    let dfs = (node,level) => {
        if(!node){
            return;
        }
        if(level > maxLevel){
            res = node;
            //maxLevel用于确定是否是最深的层级
            maxLevel = level;
        }
        dfs(node.left,level + 1);
        dfs(node.right,level + 1);
    }
    //由于题意已经约定了二叉树至少有一个节点，因此层级最低值就是1
    dfs(root,1);
    return res && res.val;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/LwUNpT/solution/shua-chuan-jian-zhi-offer-day21-dui-lie-do26g/)。
