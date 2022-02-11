###  二叉树每层的最大值

> 题目:给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。

示例1：

```js
// 输入: root = [1,3,2,5,3,null,9]
// 输出: [1,3,9]
// 解释:
//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 
```

示例2：

```js
// 输入: root = [1,2,3]
// 输出: [1,3]
// 解释:
//           1
//          / \
//         2   3
```

示例3：

```js
// 输入: root = [1]
// 输出: [1]
```

示例4：

```js
// 输入: root = [1,null,2]
// 输出: [1,2]
// 解释:      
//            1 
//             \
//              2  
```

示例5：

```js
// 输入: root = []
// 输出: []
```

提示:

* 二叉树的节点个数的范围是 [0,10 ^ 4]
* -2 ^ 31 <= Node.val <= 2 ^ 31 - 1


> 注意：本题与[主站 515 题](https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/)相同。

### 思路分析

本题考察对二叉树的遍历，我们可以使用一个队列来存储每一层节点的最大值，采用深度优先搜索算法（DFS）遍历每一层，实际上也就是递归每一层，添加一个层级数，方便计算每一层的最大值。代码如下:

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
var largestValues = function(root) {
    const largestNodeList = [];
    const dfs = (node,level) => {
        //如果节点值为null，则不需要递归遍历了，终止递归
        if(node === null){
            return;
        }
        //largestNodeList[level] === undefined判断这一项的目的就是为了添加根节点的值，也就是第一个节点
        //因为第一层就只有一个根节点，无需比较大小，此时队列也是为空，取出第一项就是undefined的值，或者也可以判断队列的长度
        if(largestNodeList[level] === undefined || largestNodeList[level] < node.val){
            largestNodeList[level] = node.val;
        }
        //递归遍历左子树和右子树
        dfs(node.left,level + 1);
        dfs(node.right,level + 1);
    }
    dfs(root,0);
    return largestNodeList;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/hPov7L/solution/shua-chuan-jian-zhi-offer-day21-dui-lie-vo9a5/)。
