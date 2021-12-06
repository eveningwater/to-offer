### 链表中倒数第k个节点


> 题目：输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

 
示例：

```js
// 给定一个链表: 1->2->3->4->5, 和 k = 2.
// 返回链表 4->5.
```

思路分析

---双指针法

定义一个快指针先根据k的值往前找到第k个节点，然后根据第K个节点与原链表（也可以被称作是慢指针）继续循环改变next指向，当跑完第k个节点的时候，快指针所代表的链表就跑完了，慢指针的那个一定是剩余的倒数第k个节点。代码如下:

```js
    var getKthFromEnd = function(head,k){
        let node_f = head,node_s = head;
        // 将第二个链表副本当做快指针循环
        while(k && node_s){
            node_s = node_s.next;
            k--;
        }
        while(node_f && node_s){
            node_f = node_f.next;
            node_s = node_s.next;
        }
        return node_f;
    }
```

时间复杂度 O(N) ： N 为链表长度；总体看， node_f 走了 N 步， node_s 走了 (N-k) 步。
空间复杂度 O(1) ： 双指针 node_f , node_s 使用常数大小的额外空间。

[更多题解](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/solution/mian-shi-ti-22-lian-biao-zhong-dao-shu-di-kge-j-11/)。