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

代码如下:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：。
* 空间复杂度：。

[更多思路](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/solution/mian-shi-ti-25-he-bing-liang-ge-pai-xu-de-lian-b-2/)。

