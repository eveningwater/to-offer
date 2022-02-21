###  二叉搜索树迭代器

> 题目:实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：

* BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
* boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
* int next()将指针向右移动，然后返回指针处的数字。

注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。

可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。

示例1：

![](../../images/2/BSTIterator-1.png)

```js
// 输入
// inputs = ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// inputs = [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// 输出
// [null, 3, 7, true, 9, true, 15, true, 20, false]

// 解释
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // 返回 3
// bSTIterator.next();    // 返回 7
// bSTIterator.hasNext(); // 返回 True
// bSTIterator.next();    // 返回 9
// bSTIterator.hasNext(); // 返回 True
// bSTIterator.next();    // 返回 15
// bSTIterator.hasNext(); // 返回 True
// bSTIterator.next();    // 返回 20
// bSTIterator.hasNext(); // 返回 False
```

提示:

* 树中节点的数目在范围 [1, 10 ^ 5] 内
* 0 <= Node.val <= 10 ^ 6
* 最多调用 105 次 hasNext 和 next 操作

进阶：

你可以设计一个满足下述条件的解决方案吗？next() 和 hasNext() 操作均摊时间复杂度为 O(1) ，并使用 O(h) 内存。其中 h 是树的高度。

> 注意：本题与[主站 173 题](https://leetcode-cn.com/problems/binary-search-tree-iterator/)相同。

### 思路分析

根据题意，我们可以得知题目中的二叉树使用中序遍历的话，则节点值始终是单调递增的，也就是说，我们只要通过中序遍历将每一个节点值添加到一个数组中存储，然后next方法和hasNext的方法就好实现了，定义一个当前索引值，每次访问next的时候，当前索引就需要加1，这样hasNext方法实际上就等价于判断当前索引值是否小于数组的长度。而next方法的实现实际上就是返回当前索引对应的元素。

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
 */
var BSTIterator = function(root) {
    //初始化当前索引为0
    this.currentIndex = 0;
    //存储节点值的数组
    this.nodeArr = [];
    //中序遍历添加节点到数组中
    this.inOrderNodeHelper(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.nodeArr[this.currentIndex++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.currentIndex < this.nodeArr.length;
};
BSTIterator.prototype.inOrderNodeHelper = function(node){
    //如果节点值不存在则直接返回
    if(node === null){
        return;
    }
    //递归,中序遍历的顺序左->根->右
    this.inOrderNodeHelper(node.left);
    this.nodeArr.push(node.val);
    this.inOrderNodeHelper(node.right);
}
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/kTOapQ/solution/er-cha-sou-suo-shu-die-dai-qi-by-leetcod-hwfe/)。
