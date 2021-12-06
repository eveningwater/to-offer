### 从上到下打印二叉树

> 题目:从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:

给定二叉树: `[3,9,20,null,null,15,7]`,

```js
//     3
//    / \
//   9  20
//     /  \
//    15   7
```

返回其层次遍历结果：

```js
//  [
//   [3],
//   [9,20],
//   [15,7]
// ]
```

> 提示: 节点总数 <= 1000

### 思路分析

本题思路同[从上到下打印二叉树-1](codes/levelOrder-1)。区别在于把每一层节点存成一行而已。

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
 * @return {number[]}
 */
var levelOrder = function(root) {
    // 如果是空树，则返回空队列
   if(!root)return [];
   //用一个空队列来存储节点,第二个值为节点层级，因为存储的时候需要分层级，也就是分行，另一个队列用于接受遍历的结果
   let stack = [[root,0]],res = [];
  // 判断存储节点的队列长度来确定循环
   while(stack.length){
       //取出队列的节点
       let [node,level] = stack.shift();
       //这里要加一个判断，如果该层并不是一个空队列，则初始化一个空队列
       if(!res[level])res[level] = [];
       //添加到结果队列中
       res[level].push(node.val);
       //如果有左子树和右子树，则继续添加到空队列中,注意顺序是先左后右
       node.left && stack.push([node.left,level + 1]);
       node.right && stack.push([node.right,level + 1]);
   }
   return res;
};
```

时间复杂度 O(N) ： N 为二叉树的节点数量，即 BFS 需循环 N 次。
空间复杂度 O(N) ： 最差情况下，即当树为平衡二叉树时，最多有 N/2 个树节点同时在 stack 中，使用 O(N) 大小的额外空间。

[更多思路](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/solution/mian-shi-ti-32-ii-cong-shang-dao-xia-da-yin-er-c-5/)。
