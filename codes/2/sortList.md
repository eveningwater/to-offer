###  链表排序

> 题目:给定链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表。

示例1：

```js
// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]
```


示例2：

```js
// 输入：head = [-1,5,3,4,0]
// 输出：[-1,0,3,4,5]
```

示例3：

```js
// 输入：head = []
// 输出：[]
```

提示:

* 链表中节点的数目在范围 [0, 5 * 10 ^ ] 内
* -10 ^ 5 <= Node.val <= 10 ^ 5

> 注意：本题与[主站 148 题](https://leetcode-cn.com/problems/sort-list/)相同。

> 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

### 思路分析

本题考察对链表的排序，如果不熟悉链表的排序，可以转成数组然后再排序，最后再转成链表，但是显然这种方法会超时，因此我们需要考虑额外的方法。以下为超时的代码:

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
var arrToList = (arr,start) => {
    if(arr.length === start) {
        return null
    }
    let head = new ListNode(arr[start]);
    let next = arrToList(arr, ++start)
    head.next = next;
    return head;
}
var sortList = function(head) {
    if(head === null){
        return head;
    }
    const list = [];
    let node = head;
    while(node !== null){
        list.push(node.val);
        node = node.next;
    }
    list.sort((a,b) => a - b);
    return arrToList(list);
};
```

直接对链表进行排序，我们似乎很难做到，那么我们考虑将链表分成均分的两个链表进行排序，最后再合并成一个排序的链表，这也算是归并排序算法的原理，即分而治之的思想。那么我们应该如何均分为两个链表呢？如果还有印象的话，我们可以使用快慢指针法，见[回文链表](/codes/2/isPalindromeList.md)。因此，我们就可以得到两个均分的链表，代码如下:

```js
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
```

根据以上思路，我们就可以得到前后两个链表，即slow为前半部分的链表，slow.next为后半部分的链表，然后对这两个链表进行排序，接下来我们就定义一个新的链表，用来合并这两个进行排序后的链表，当前半部分和后半部分的链表不为空的时候，我们就循环，如果left.val < right.val,则代表右半部分的值大，将新的链表的next指向left,否则就是将新的链表的next指向right，遍历完成之后，只要left不为null，还需要将新的链表的next指向left，否则就指向right,最后再返回这个新的链表。

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
var sortList = function(head) {
   //临界值判断
   if(head === null || head.next === null){
       return head;
   }
   let fast = head,slow = head;
   //这里需要明白为什么是根据快指针来进行循环
   while(fast.next !== null && fast.next.next !== null){
       fast = fast.next.next;
       slow = slow.next;
   }
   let newList = slow.next;
   slow.next = null;
   let left = sortList(head), //前半部分
       right = sortList(newList); //后半部分
   //定义一个新的链表
   let newHead = new ListNode(-1),res = newHead;
   while(left !== null && right !== null){
       if(left.val < right.val){
           res.next = left;
           left = left.next;
       }else{
           res.next = right;
           right = right.next;
       }
       res = res.next;
   }
   res.next = left !== null ? left : right;
   return newHead.next;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/7WHec2/solution/yi-bu-bu-jiang-kong-jian-fu-za-du-cong-o-oxes/)。
