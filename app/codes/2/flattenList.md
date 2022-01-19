### 展平多级双向链表

> 题目:多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

给定位于列表第一级的头节点，请扁平化列表，即将这样的多级双向链表展平成普通的双向链表，使所有结点出现在单级双链表中。

示例 1：

```js
// 输入：head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// 输出：[1,2,3,7,8,11,12,9,10,4,5,6]
// 解释：

// 输入的多级列表如下图所示：
```
![](../../images/2/flattenList-1.png)

```js
// 扁平化后的链表如下图：
```
![](../../images/2/flattenList-2.png)

示例 2：

```js
// 输入：head = [1,2,null,3]
// 输出：[1,3,2]
// 解释：

// 输入的多级列表如下图所示：

//   1---2---NULL
//   |
//   3---NULL
```

示例 3：

```js
// 输入：head = []
// 输出：[]
```

如何表示测试用例中的多级链表？

以 示例 1 为例：

```js
//  1---2---3---4---5---6--NULL
//          |
//          7---8---9---10--NULL
//              |
//              11--12--NULL
```

序列化其中的每一级之后：

```js
// [1,2,3,4,5,6,null]
// [7,8,9,10,null]
// [11,12,null]
```

为了将每一级都序列化到一起，我们需要每一级中添加值为 null 的元素，以表示没有节点连接到上一级的上级节点。

```js
// [1,2,3,4,5,6,null]
// [null,null,7,8,9,10,null]
// [null,11,12,null]
```

合并所有序列化结果，并去除末尾的 null 。

```js
// [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
```

提示:

* 节点数目不超过 1000
* 1 <= Node.val <= 10 ^ 5

> 注意：本题与[主站 430 题](https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/)相同。

### 思路分析

本题题干很长，需要多阅读几遍。在此，我们可以使用一个栈来存储需要遍历的节点，开始循环，如果有next即下一节点，就压入栈，有child即子节点也同样压入栈。然后我们需要根据以下两种情况来更改节点的指向。

* 1. child节点有值时，将当前节点与子节点转换成兄弟节点，并且将child节点置为空。
* 2. next和child节点为空值，并且栈中含有节点时，将当前节点与栈顶节转换成兄弟节点，并且将child节点置为空。

```js
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    const helper = (cur,next) => {
        // 转换为兄弟节点
        cur.next = next;
        next.prev = cur;
        // 将子节点置空
        cur.child = null;
    }
    let node,stack = [head];
    //循环节点
    while(node = stack.pop()){
        //如果有next节点,入栈
        if(node.next){
            stack.push(node.next);
        }
        //如果有child节点，入栈
        if(node.child){
            stack.push(node.child);
            //转换兄弟节点
            helper(node,node.child);
        }
        //第二种情况的转换处理
        if(!node.next && !node.child && stack.length){
            helper(node,stack[stack.length - 1]);
        }
    }
    return head;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/Qv1Da2/solution/zhan-ping-duo-ji-shuang-xiang-lian-biao-x5ugr/)。
