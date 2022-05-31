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

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/solution/mian-shi-ti-06-cong-wei-dao-tou-da-yin-lian-biao-b/)。
