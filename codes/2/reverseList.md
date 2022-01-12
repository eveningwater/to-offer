### 反转链表

> 题目:给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。


示例 1：

![](../../images/2/reverseList-1.jpg)

```js
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
```

示例 2：

![](../../images/2/reverseList-2.jpg)

```js
// 输入：head = [1,2]
// 输出：[2,1]
```

示例 3：

```js
// 输入：head = []
// 输出：[]
```

提示:

* 链表中节点的数目范围是 [0, 5000]
* -5000 <= Node.val <= 5000

> 进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

> 注意：本题与[主站 206 题](https://leetcode-cn.com/problems/reverse-linked-list/)相同。

### 思路分析

本题的第一种思路就是我们可以使用迭代法来解决，本质上也就是遍历链表。比如假定链表:

```js
// 1 -> 2 -> 3
```

反转过后结果应该是:

```js
//3 -> 2 -> 1
```

链表的反转跟数组不同，链表反转，我们可以约定三个指针，即前一个节点prev指针，当前节点cur指针，下一个节点next指针。所以反转的话本质上就是交换三个指针的位置。我们用prev = null开始，cur = head。然后如果cur节点不为空，我们就开始遍历，然后将当前节点的下一节点也就是next设置为prev，prev设置为当前节点，当前节点设置为下一节点，即可解答本题。代码如下:


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null,cur = head;
    while(cur){
        //获取当前节点的下一节点
        const next = cur.next;
        //开始交换
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/UHnkqh/solution/fan-zhuan-lian-biao-by-leetcode-solution-34oi/)。
