### 合并两个排序的链表

> 题目:输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例:

```js
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
```
 
> 限制:0 <= 链表长度 <= 1000

### 思路分析

合并两个链表，由于两个链表都是递增的，因此我们可以通过比较每一个节点，然后进行递归，将节点的next指向递归的那一个节点，相当于互相交换位置一样。例如[1,2,3]
与[2,3,4]进行合并，比较第一个节点1 < 2成立将1的next指向2，然后l1的节点指向更改为2，然后再去做比较，以此类推。

代码如下:

```js
var mergeTwoLists = function(l1,l2) {
    // 如果l1链表为null，则返回l2,如果链表l2为null，则返回l1
    if(l1 === null)return l2;
    if(l2 === null)return l1;
    if(l1.val < l2.val){
        // 改变l1指向
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        // 改变l2指向
        l2.next = mergeTwoLists(l1,l2.next);
        return l2;
    }
};
```

该算法的时间复杂度与递归的链表节点数有关，所以时间复杂度应为 O(n),而空间复杂度为 O(1)。

[更多思路](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/solution/mian-shi-ti-25-he-bing-liang-ge-pai-xu-de-lian-b-2/)。

