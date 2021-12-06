### 从上到下打印二叉树

> 题目:从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。

例如:

给定二叉树: `[3,9,20,null,null,15,7]`,

```js
//     3
//    / \
//   9  20
//     /  \
//    15   7
```

返回：

```js
// [3,9,20,15,7]
```

> 提示: 节点总数 <= 1000

### 思路分析

根据题意，我们可以通过创建一个队列来存储这个二叉树节点，然后遍历这个队列，即可将每一个节点添加到新的队列中。

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
   //用一个空队列来存储节点，另一个队列用于接受遍历的结果
   let stack = [root],res = [];
  // 判断存储节点的队列长度来确定循环
   while(stack.length){
       //取出队列的节点
       let node = stack.shift();
       //添加到结果队列中
       res.push(node.val);
       //如果有左子树和右子树，则继续添加到空队列中,注意顺序是先左后右
       node.left && stack.push(node.left);
       node.right && stack.push(node.right);
   }
   return res;
};
```

时间复杂度 O(N) ： N 为二叉树的节点数量，即 BFS 需循环 N 次。
空间复杂度 O(N) ： 最差情况下，即当树为平衡二叉树时，最多有 N/2 个树节点同时在 stack 中，使用 O(N) 大小的额外空间。

[更多思路](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/solution/mian-shi-ti-32-i-cong-shang-dao-xia-da-yin-er-ch-4/)。
