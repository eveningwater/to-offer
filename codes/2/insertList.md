### 排序的循环链表

> 题目:给定循环单调非递减列表中的一个点，写一个函数向这个列表中插入一个新元素 insertVal ，使这个列表仍然是循环升序的。

给定的可以是这个列表中任意一个顶点的指针，并不一定是这个列表中最小元素的指针。

如果有多个满足条件的插入位置，可以选择任意一个位置插入新的值，插入后整个列表仍然保持有序。

如果列表为空（给定的节点是 null），需要创建一个循环有序列表并返回这个节点。否则。请返回原先给定的节点。

示例 1：

![](../../images/2/insertList-1.jpg)

```js
// 输入：head = [3,4,1], insertVal = 2
// 输出：[3,4,1,2]
// 解释：在上图中，有一个包含三个元素的循环有序列表，你获得值为 3 的节点的指针，我们需要向表中插入元素 2 。新插入的节点应该在 1 和 3 之间，插入之后，整个列表如上图所示，最后返回节点 3 。
```

![](../../images/2/insertList-2.jpg)


示例 2：

```js
// 输入：head = [], insertVal = 1
// 输出：[1]
// 解释：列表为空（给定的节点是 null），创建一个循环有序列表并返回这个节点。
```

示例 3：

```js
// 输入：head = [1], insertVal = 0
// 输出：[1,0]
```


提示:

* 0 <= Number of Nodes <= 5 * 10 ^ 4
* -10 ^ 6 <= Node.val <= 10 ^ 6
* -10 ^ 6 <= insertVal <= 10 ^ 6

> 注意：本题与[主站 708 题](https://leetcode-cn.com/problems/insert-into-a-sorted-circular-linked-list/)相同。

### 思路分析


```js
/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：。
* 空间复杂度：。

[更多思路](https://leetcode-cn.com/problems/4ueAj6/solution/gan-jue-da-jia-xie-de-du-you-dian-fu-za-k1klz/)。
