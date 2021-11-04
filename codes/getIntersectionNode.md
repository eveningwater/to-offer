### 两个链表的第一个公共节点

> 题目:输入两个链表，找出它们的第一个公共节点。如下面的两个链表：

![](../images/getIntersectionNode-1.png)

在节点 c1 开始相交。

示例1:

![](../images/getIntersectionNode-2.png)

```js
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
// 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
```

示例2:

![](../images/getIntersectionNode-3.png)

```js
// 输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// 输出：Reference of the node with value = 2
// 输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
```

示例3:

![](../images/getIntersectionNode-4.png)

```js
// 输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// 输出：null
// 输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
// 解释：这两个链表不相交，因此返回 null。
```


注意:

* 如果两个链表没有交点，返回 null.
* 在返回结果后，两个链表仍须保持原有的结构。
* 可假定整个链表结构中没有循环。
* 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

[类似题](https://leetcode-cn.com/problems/intersection-of-two-linked-lists/)。

### 思路分析

本题我们定义2个指针A和B，当A和B不相等时，我们就开始遍历。当遍历headA为最后一个节点（即节点值为null）时，将指针指向headB的头节点即headB。当遍历headB为最后一个节点（即节点值为null）时，将指针指向headA的头节点即headA。如此一来，两个链表的第一个公共节点就找到了。返回headA或者headB即可。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA,headB){
    // 定义2个指针
    let A = headA,B = headB;
    // 当两个节点不相等时才遍历，相等了就表示节点相交
    while(A !== B){
        //等于null的时候代表遍历链表最后一个节点了，返回头节点
        A = A !== null ? A.next : headB;
        B = B !== null ? B.next : headA;
    }
    // 返回A或B都可以
    return A;
}

```

时间复杂度：O(m+n)，其中 m 和 n 是分别是链表 headA 和 headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次。
空间复杂度：O(1)。

更多详细解题思路参考[题解](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/solution/liang-ge-lian-biao-de-di-yi-ge-gong-gong-pzbs/)。

