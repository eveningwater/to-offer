### 删除链表的倒数第 n 个结点

> 题目:给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

![](../../images/2/removeNthFromEnd-1.jpg)


示例 1：

```js
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
```

示例 2：

```js
// 输入：head = [1], n = 1
// 输出：[]
```

示例 3：

```js
// 输入：head = [1,2], n = 1
// 输出：[1]
```

提示:

* 链表中结点的数目为 sz
* 1 <= sz <= 30
* 0 <= Node.val <= 100
* 1 <= n <= sz

> 进阶：能尝试使用一趟扫描实现吗？

> 注意：本题与[主站 19 题](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)相同。

### 思路分析

本题的思路可以参考[链表中倒数第k个节点](/codes/1/getKthFromEnd.md)。也就是说本题可以采用双指针算法来解决，创建一个慢指针left和一个快指针right。浪快指针right走完，如果为null，则代表n和链表的长度相等，此时返回头节点即head.next即可。当right.next不为null，则快慢指针一起前进，最后修改慢指针的指向为下一节点的指向即可。代码如下:


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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //创建快慢指针
    let left = head,right = head;
    for(let i = 0;i < n;i++){
        right = right.next;
    }
    //right为null，代表n等于链表的长度，返回头节点
    if(right === null){
        return head.next;
    }
    while(right.next){
        //快慢指针一起前进
        left = left.next;
        right = right.next;
    }
    //修改慢指针指向，也就是删除第n个节点
    left.next = left.next.next;
    return head;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/SLwz0R/solution/shua-chuan-jian-zhi-offer-day11-lian-bia-tuyw/)。
