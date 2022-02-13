###  二叉树的右侧视图

> 题目:给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。


示例1：

![](../../images/2/rightSideView-1.jpg)

```js
// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
```

示例2：

```js
// 输入: [1,null,3]
// 输出: [1,3]
```

示例3：

```js
// 输入: []
// 输出: []
```

提示:

* 二叉树的节点个数的范围是 [0,100]
* -100 <= Node.val <= 100 


> 注意：本题与[主站 199 题](https://leetcode-cn.com/problems/binary-tree-right-side-view/)相同。

### 思路分析

本题仍然可以使用深度优先搜索算法来解决，同样是递归，我们确定一个层级level,递归的时候右边的节点就会覆盖左边的节点值。

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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = [];
    const dfs = (node,level) => {
        //如果节点不存在就停止递归
        if(!node){
            return;
        }
        res[level] = node.val;
        //注意递归顺序，如果调换那就是左边的节点覆盖右边的节点
        dfs(node.left,level + 1);
        dfs(node.right,level + 1);
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/WNC0Lk/solution/shua-chuan-jian-zhi-offer-day21-dui-lie-n360i/)。
