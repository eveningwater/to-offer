### 复杂链表的复制

> 题目:请实现 copyRandomList 函数，复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。


示例 1:

![示例1](../images/copyRandomList-1.png)

输入: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
输出: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 

示例 2:

![示例2](../images/copyRandomList-2.png)

输入: head = [[1,1],[2,1]]
输出: [[1,1],[2,1]]

示例 3:

![示例3](../images/copyRandomList-3.png)

输入: head = [[3,null],[3,0],[3,null]]
输出: [[3,null],[3,0],[3,null]]

示例 4:


输入: head = []
输出: []
解释：给定的链表为空（空指针），因此返回 null。

提示：

* -10000 <= Node.val <= 10000
* Node.random 为空（null）或指向链表中的节点。
* 节点数目不超过 1000 。

### 思路分析

本题更像是实现复制一个链表。可能需要注意的就是，复制的节点包含三种情况。即:

1. 普通节点
2. 随机节点
3. next节点

我们可以用一个数据结构来缓存这些节点，比如可以使用Map数据结构。那么我们只需要判断当该数据结构中缓存的有节点，就直接返回。如果没有缓存，我们就需要重新创建一个新的节点，然后再缓存。由于每个节点都有next指针和random指针，所以我们需要递归每一个节点，直到当前节点为null为止。因此，我们就完成了这道题的解法。

```js
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
var copyRandomList = function(head) {
    //定义map数据结构缓存节点
    let map = new Map();
    let copy = function(node){
        //当为空节点时直接返回
        if(!node){
            return node;
        }
        //当map数据结构中存在节点，则返回
        if(map.has(node)){
            return map.get(node);
        }
        //创建新节点
        let newNode = new Node();
        //将新节点存到map中
        map.set(node,newNode);
        //设置节点值
        newNode.val = node.val;
        //递归next节点与random节点
        newNode.next = copy(node.next);
        newNode.random = copy(node.random);
        //返回这个新节点
        return newNode;
    }
    return copy(head);
};
```

以上算法，时间复杂度是O(n),空间复杂度也为O(n)。更多解题思路参考[题解](https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/fu-za-lian-biao-de-fu-zhi-by-leetcode-so-9ik5/)。

