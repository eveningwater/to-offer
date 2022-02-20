###  所有大于等于节点的值之和

> 题目:给定一个二叉搜索树，请将它的每个节点的值替换成树中大于或者等于该节点值的所有节点值之和。

提醒一下，二叉搜索树满足下列约束条件：

* 节点的左子树仅包含键 小于 节点键的节点。
* 节点的右子树仅包含键 大于 节点键的节点。
* 左右子树也必须是二叉搜索树。

示例1：

![](../../images/2/convertBST-1.png)

```js
// 输入：root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// 输出：[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
```

示例2：

```js
// 输入：root = [0,null,1]
// 输出：[1,null,1]
```

示例3：

```js
// 输入：root = [1,0,2]
// 输出：[3,3,2]
```

示例4：

```js
// 输入：root = [3,2,4,1]
// 输出：[7,9,4,10]
```
提示:

* 树中的节点数介于 0 和 10 ^ 4 之间。
* 每个节点的值介于 -10 ^ 4 和 10 ^ 4 之间。
* 树中的所有值 互不相同 。
* 给定的树为二叉搜索树


注意：

* 本题与[主站 538 题](https://leetcode-cn.com/problems/convert-bst-to-greater-tree/)相同。
* 本题与[主站 1038 题](https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/)相同。

### 思路分析

根据题意，二叉树的右子树节点值大于右子树的父节点的值，也就是说，以其中一个节点作为起点开始遍历右子树，则右子树的所有节点一定比当前节点的值大。因此我们可以采用中序遍历的反序遍历来遍历整个二叉树，每一次递归遍历就累加一次值，然后将当前节点值替换为累加的和值。中序遍历的遍历顺序是左根右，那么反序遍历就是右根左。如此一来，本题就很简单了。

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
var convertBST = function(root) {
    let sum = 0;
    const dfs =(node) => {
        if(node === null){
            return;
        }
        //中序遍历的反序遍历
        dfs(node.right);
        //当前节点值累加和
        node.val += sum;
        //累加完成重新初始化为当前节点的值，也就是说我们从右子树的第一个节点开始，当前节点就初始化为sum的初始值
        //累加完成之后，再将sum设置成当前节点的值，也就相当于重新初始化了累加和初始值
        sum = node.val;
        dfs(node.left);
    }
    dfs(root);
    return root;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/w6cpku/solution/python3-java-c-golang-si-chong-bian-chen-vvlf/)。
