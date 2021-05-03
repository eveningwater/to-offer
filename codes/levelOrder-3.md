### 从上到下打印二叉树

> 题目:请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

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
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
```

> 提示: 节点总数 <= 1000

### 思路分析

本题思路同[从上到下打印二叉树-1](codes/levelOrder-2)。区别在于判断每一层的顺序是先右到左还是先左到右。

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
    if(!root)return [];
    let stack = [[root,0]],res = [];
    while(stack.length){
        let [node,level] = stack.shift();
        //初始化空队列
        if(!res[level])res[level] = [];
        //这里不一样，判断是奇数层还是偶数层，从而确定使用的添加方法是push还是unshift方法，因为这2个方法刚好添加顺序相反
        //通过&位运算符可判断是奇数还是偶数
        level & 1 ? res[level].unshift(node.val) : res[level].push(node.val);
        node.left && stack.push([node.left,level + 1]);
        node.right && stack.push([node.right,level + 1]);
    }
};
```

时间复杂度 O(N) ： N 为二叉树的节点数量，即 BFS 需循环 N次，占用 O(N) ；双端队列的队首和队尾的添加和删除操作的时间复杂度均为O(1)。
空间复杂度 O(N) ： 最差情况下，即当树为满二叉树时，最多有 N/2 个树节点 同时在队列中，使用 O(N) 大小的额外空间。


[更多思路](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/solution/mian-shi-ti-32-iii-cong-shang-dao-xia-da-yin-er--3/)。
