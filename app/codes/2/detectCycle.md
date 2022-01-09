### 链表中环的入口节点

> 题目:给定一个链表，返回链表开始入环的第一个节点。 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

> 说明：不允许修改给定的链表。

示例 1：

![](../../images/2/detectCycle-1.png)

```js
// 输入：head = [3,2,0,-4], pos = 1
// 输出：返回索引为 1 的链表节点
// 解释：链表中有一个环，其尾部连接到第二个节点。
```

示例 2：

![](../../images/2/detectCycle-2.png)

```js
// 输入：head = [1,2], pos = 0
// 输出：返回索引为 0 的链表节点
// 解释：链表中有一个环，其尾部连接到第一个节点。
```

示例 3：

![](../../images/2/detectCycle-3.png)

```js
// 输入：head = [1], pos = -1
// 输出：返回 null
// 解释：链表中没有环。
```

提示:

* 链表中节点的数目范围在范围 [0, 10 ^ 4] 内
* -10 ^ 5 <= Node.val <= 10 ^ 5
* pos 的值为 -1 或者链表中的一个有效索引

> 进阶：是否可以使用 O(1) 空间解决此题？

> 注意：本题与[主站 142 题](https://leetcode-cn.com/problems/linked-list-cycle-ii/)相同。

### 思路分析

本题有两种算法来解答，第一种则是哈希表算法，哈希表算法的思路就是我们遍历链表每一个节点，当哈希表中存在一个节点和遍历的节点相等，则代表链表中有环，直接返回该节点,否则就代表无环，返回null。代码如下:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const visited = new Set();
    while(head){
        if(visited.has(head)){
            return head;
        }
        visited.add(head);
        head = head.next;
    }
    return null;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

而第二种则是我们的双指针算法，在双指针算法中我们定义一个快指针fast，一个慢指针slow，同时规定fast指针比slow指针快2步。此时应该会分成两种结果。如下:

* 1. 第一种结果:当fast指针走过链表末端，此时代表链表无环，返回null。
    * 1.1 说明:如果有环，则fast指针和slow指针一定会相遇，因为每走一轮，fast指针与slow指针的间距就是+1,fast指针最终就会追上slow指针。
* 2. 第二种结果:当fast与slow相等时，两指针就会在环中第一次相遇。此时我们需要分析fast与slow走过的步数。
   * 2.1 设链表一共有 a + b 个节点，其中从链表头部到环的入口一共有a个节点（不计链表入口节点），链表环中有b个节点（这里需要注意a和b是未知数），设两个指针分别走了f和s步。则有:
    * 2.1.1 fast走的步数是slow的2倍，即f = 2s(f为fast指针走的步数，s为slow指针走的步数)。
    * 2.1.2 fast比slow多走了n个环的长度，即f = s + nb（s为slow走的步数，n为走的环的次数，b即环有多少个节点，也就是说双指针都走过a步，然后再环内绕圈直到重合，重合时，fast指针就比slow指针多走环的长度的整数倍，即为n倍）。
   * 2.2 根据以上两个公式，我们可以得出f = 2nb,s = nb(两式相减)，即fast和slow指针分别走了2n，n个环的周长（注意这里的n也是未知数，不同的链表情况都不同）。

根据以上分析，我们来分析一下本题目前的情况:

* 如果让指针从链表头部一直向前走并统计步数k,则走到链表入口节点时的步数是:k = a + nb(先走a步到入口节点，然后每饶一圈环（b步）都会再次回到入口节点)。
* slow走过的步数为nb步，因此我们只要想办法让slow再走a步停下来，这样就可以到达环的入口。
* 但是我们并不知道a的值，那么应该怎么办？依然是采用双指针算法。我们需要再次构建一个指针，此指针需要有这样一条性质:此指针和slow一起向前走a步后，两者均在入口节点相遇，并且我们也知道从链表的头节点开始，就可以走a步到达环的入口。

接下来，我们来分析双指针的第二次相遇：

* 根据以上的分析，slow指针是不需要变动的，在fast和slow指针第一次相遇跳出后，将fast指针重新指向链表的头节点，此时slow和fast指针每次只需要向前走一步。
    * 注意，此时f = 0,s = nb。
* 当fast指针走到f = a步的时候，slow指针就应该走的是a + nb,此时两指针重合，并同时指向环的入口节点，返回fast或者slow均可。代码如下:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head,slow = head;
    while(true){
        // fast走到链表末端则代表无环
        if(fast === null || fast.next === null){
            return null;
        }
        //fast走2步，slow走1步
        fast = fast.next.next;
        slow = slow.next;
        //当fast与slow重合时跳出循环
        if(fast === slow){
            break;
        }
    }
    //重新修改fast指向为链表头节点
    fast = head;
    //如果fast和slow不相等，就继续走
    while(fast !== slow){
        //第二次相遇fast和slow都只是走1步
        fast = fast.next;
        slow = slow.next;
    }
    return fast; //或者返回slow
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/c32eOV/solution/lian-biao-zhong-huan-de-ru-kou-jie-dian-vvofe/)。
