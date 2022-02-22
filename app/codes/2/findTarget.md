###  二叉搜索树中两个节点之和

> 题目:给定一个二叉搜索树的 根节点 root 和一个整数 k , 请判断该二叉搜索树中是否存在两个节点它们的值之和等于 k 。假设二叉搜索树中节点的值均唯一。

示例1：

```js
// 输入: root = [8,6,10,5,7,9,11], k = 12
// 输出: true
// 解释: 节点 5 和节点 7 之和等于 12
```

示例2：

```js
// 输入: root = [8,6,10,5,7,9,11], k = 22
// 输出: false
// 解释: 不存在两个节点值之和为 22 的节点
```

提示:

* 二叉树的节点个数的范围是  [1, 10 ^ 4]
* -10 ^ 4 <= Node.val <= 10 ^ 4
* root 为二叉搜索树
* -10 ^ 5 <= k <= 10 ^ 5


> 注意：本题与[主站 653 题](https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/)相同。

### 思路分析

本题我们可以定义一个哈希表，然后每次遍历二叉树，就将节点值添加到哈希表中，如果哈希表中存在k - node.val的值，则代表二叉树中存在两个节点值的和为k。因此使用深度优先搜索递归遍历二叉树即可。

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const map = new Map();
    const dfs = node => {
        if(node === null){
            return false;
        }
        if(map.has(k - node.val)){
            return true;
        }
        map.set(node.val,node.val);
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/opLdQZ/solution/offerii056er-cha-sou-suo-shu-zhong-liang-85hk/)。
