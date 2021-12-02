### 反转链表

> 题目:定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:

```js
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
```
 
> 限制:0 <= 节点个数 <= 5000

### 思路分析

倒转链表，我们实际上可以认为用一个变量代表当前节点，然后将当前节点的下一个节点指向当前节点的上一节点，当前节点的上一节点的next指向就是当前节点，而当前节点就是原本当前节点的下一节点。例如:假定有链表结构[1,2,3],我们如何反转它呢？我们令cur为当前节点，prev为当前节点的上一节点，然后如果当前节点存在，那么我们就循环遍历整个链表，比如cur为1的时候，那么prev就是null，下一节点next就是2，我们只要将next节点的指向为当前节点的上一节点，上一节点的指向为当前节点，当前节点再次前移，就是反转了，按照前面的说法顺序就应该是next -> prev -> cur即2 -> null -> 1，然后不断的循环，直到让cur当前节点变成null为止。

代码如下:

```js
var reverseList = function(head) {
    let prev = null,cur = head;
    while(cur){
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    // 遍历完成prev就是遍历完成的结果
    return prev;
};
```

该算法的时间复杂度与节点数有关，所以时间复杂度应为 O(n),而空间复杂度为 O(1)。

[更多思路](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/fan-zhuan-lian-biao-by-leetcode-solution-jvs5/)。

