### 回文链表

> 题目:给定一个链表的 头节点 head ，请判断其是否为回文链表。

如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

示例 1：

![](../../images/2/isPalindromeList-1.png)

```js
// 输入: head = [1,2,3,3,2,1]
// 输出: true
```

示例 2：

![](../../images/2/isPalindromeList-2.png)

```js
// 输入: head = [1,2]
// 输出: false
```


提示:

* 链表 L 的长度范围为 [1, 10 ^ 5]
* 0 <= node.val <= 9

> 进阶：能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

> 注意：本题与[主站 234 题](https://leetcode-cn.com/problems/palindrome-linked-list/)相同。

### 思路分析

本题的解题思路有很多，如果想不出来如何去操作链表然后判断是否回文，我们可以采用数组来存储，每一个链表节点，然后再利用双指针算法去遍历这个数组，就可以判断是否回文。代码如下:

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const list = [];
    //根据题意，这里不用不考虑空链表的情况
    while(head !== null){
        list.push(head.val);
        head = head.next;
    }
    for(let i = 0,j = list.length - 1;i < j;i++,j--){
        //从两边遍历，左右节点不相同，就可以知道不是回文链表
        if(list[i] !== list[j]){
            return false;
        }
    }
    return true;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

很明显以上的思路我们需要一个数组来存储链表节点，也就用到了O(n)的空间复杂度。现在我们来优化一下空间复杂度，我们只有在链表的基础上操作，才可以将空间复杂度降为O(1)。因此，我们可以将链表分成两个部分，假如一个链表是回文链表，如下所示:

```js
//1 -> 2 -> 3 -> 3 -> 2 -> 1
```

前半部分就是`1 -> 2 -> 3`，而后半部分则是`3 -> 2 -> 1`。因此，我们需要将后半部分给反转，这也就会用到[反转链表](/codes/2/reverseList.md)的思路。然后通过比较前半部分和后半部分，即可判断是否是回文链表。当然还有一种情况，就是链表不可能只包含偶数个数的节点，也有可能包含奇数个数的节点。因此，在这种情况下，我们首先需要找到链表被分割的尾节点。

在这里需要注意一点，那就是在比较完成之后，我们应该要将链表给恢复。这是因为在并发环境下，函数运行时需要锁定其他线程或进程对链表的访问，因为在函数执行过程中链表会被修改。因此，我们在这里可以采用快慢指针的思路来解决。整个算法流程可以分为如下五步:

*  找到前半部分链表的尾节点。 //用于区分链表节点个数是奇数还是偶数的情况
*  反转后半部分的链表。
*  判断是否是回文链表。
*  恢复链表。
*  返回结果。

对于第一步，我们可以通过计算链表节点的数量来找到前半部分链表的尾节点。同样的我们也可以使用快慢指针来查找，也就是说我们约定两个指针快指针fast和慢指针slow，快指针一次走两步，慢指针一次走一步，当快指针走到尾节点的时候，慢指针刚好到达链表的中间。因此可以通过慢指针来将链表分成两部分。然后再根据步骤来一步一步的完善代码。代码如下:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//反转链表，思路参考反转链表一章
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
//查找前半部分的尾节点
var findHalf = function(head){
    let fast = head,
        slow = head;
    while(fast.next !== null && fast.next.next !== null){
        //快指针走两步
        fast = fast.next.next;
        //慢指针走两步
        slow = slow.next;
    }
    return slow;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //空链表返回true
    if(head === null){
        return true;
    }
    //前半部分链表
    let firstOfHalf = findHalf(head),
        endOfHalf = reverseList(firstOfHalf.next); //从链表中间的下一个节点开始就是后半部分,需要反转
    //判断是否回文
    let p1 = head,
        p2 = endOfHalf,
        res = true; //返回结果
    while(res && p2 !== null){
        //比较前半部分和后半部分值不同，则代表不是回文链表
        if(p1.val !== p2.val){
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    //还原链表
    firstOfHalf.next = reverseList(endOfHalf);
    //返回结果
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。


[更多思路](https://leetcode-cn.com/problems/aMhZSa/solution/hui-wen-lian-biao-by-leetcode-solution-3q3r/)。
