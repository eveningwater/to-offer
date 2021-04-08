### 从尾到头打印链表

> 题目:输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：

```js
//输入：head = [1,3,2]
//输出：[2,3,1]
```

> tips:这里是链表，不是数组，链表是一种数据结构，类数组，它有一个next指针，指向下一项。

> 限制：0 <= 链表长度 <= 10000

### 思路分析

- 方法一：普通解法

使用一个循环结合数组的`unshift`方法即可完成。代码如下:

```js
var reversePrint = function (head) {
    let res = [];
    let node = head;
    while(node !== null){
        res.unshift(node.val);
        node = node.next;
    }
    return res;
};
```

由于用到了一个循环，所以这个算法的时间复杂度为 O(n),用了一个数组存储，所以空间复杂度为 O(n)。


