### 合并排序链表

> 题目:给定一个链表数组，每个链表都已经按升序排列。请将所有链表合并到一个升序链表中，返回合并后的链表。

示例1:

```js
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6
```

示例2:

```js
// 输入：lists = []
// 输出：[]
```
 
示例1:

```js
// 输入：lists = [[]]
// 输出：[]
```

提示:

* k == lists.length
* 0 <= k <= 10^4
* 0 <= lists[i].length <= 500
* -10^4 <= lists[i][j] <= 10^4
* lists[i] 按 升序 排列
* lists[i].length 的总和不超过 10^4

> 注意：本题与[主站 23 题](https://leetcode-cn.com/problems/merge-k-sorted-lists/)相同。

### 思路分析

本题如果没有思路，我们可以先考虑如何去合并两个排序链表？如果我们合并了两个排序链表，那么我们再遍历整个链表数组，就可以合并所有链表了。那么问题来了，如何去合并两个排序的链表。我们可以从上一题中获取答案[链表排序](/codes/2/sortList.md)，可以看到我们实际上就是创建一个空的链表，然后分别遍历两个排序链表，依次比较大小，就可以合并两个排序链表了。代码如下:

```js
var merge = function(x,y){
    let head = new ListNode(-1),
        res = head;
    while(x !== null && y !== null){
        if(x.val < y.val){
            res.next = x;
            x = x.next;
        }else{
            res.next = y;
            y = y.next;
        }
        res = res.next;
    }
    res.next = x !== null ? x : y;
    return head.next;
}
```

明白了如何去合并两个排序链表，接下来，我们就可以遍历链表数组去合并整个链表了。完整代码如下:

代码如下:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var merge = function(x,y){
    let head = new ListNode(-1),
        res = head;
    while(x !== null && y !== null){
        if(x.val < y.val){
            res.next = x;
            x = x.next;
        }else{
            res.next = y;
            y = y.next;
        }
        res = res.next;
    }
    res.next = x !== null ? x : y;
    return head.next;
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let x = null;
    for(const y of lists){
        x = merge(x,y);
    }
    return x;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/vvXgSW/solution/cpython3java-1bian-li-zhu-ge-he-bing-2-b-xngx/)。

