### 链表中的两数相加

> 题目:给定两个 非空链表 l1和 l2 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
可以假设除了数字 0 之外，这两个数字都不会以零开头。

示例 1：

![](../../images/2/addTwoNumbers-1.png)

```js
// 输入：l1 = [7,2,4,3], l2 = [5,6,4]
// 输出：[7,8,0,7]
```

示例 2：

```js
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[8,0,7]
```

示例 3：

```js
// 输入：l1 = [0], l2 = [0]
// 输出：[0]
```

提示:

* 链表的长度范围为 [1, 100]
* 0 <= node.val <= 9
* 输入数据保证链表代表的数字无前导 0

进阶：如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。

> 注意：本题与[主站 445 题](https://leetcode-cn.com/problems/add-two-numbers-ii/)相同。

### 思路分析

本题假如不考虑进阶解法，l1和l2链表节点长度不相等的情况下，我们如果要准确的计算出两者相加后的链表，需要对链表进行反转，这样链表的尾节点被当做了个位来相加，在前面的[反转链表](/codes/2/reverseList.md)中，我们知道了反转链表的解法。当反转后，我们对两个链表进行相加，需要建立一个辅助变量来帮助进位。具体解法如下:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 链表反转,递归算法
var reverseList = function(head){
    if(head === null || head.next === null){
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    l1 = reverseList(l1);
    l2 = reverseList(l2);
    let computedSumNode = function(l1,l2){
        //初始化一个辅助链表
        let node = new ListNode(0);
        //初始化一个求和链表,以及进位的辅助变量
        let sumNode = node,carry = 0;
        //当两个链表中有一个节点不是空，就循环
        while(l1 !== null || l2 !== null){
            //每一个节点之和
            let sum = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;
            //大于等于10需要进位
            if(sum >= 10){
                carry = 1;
                //进位1之后，sum需要减去10
                sum -= 10;
            }else {
                carry = 0;
            }
            let newNode = new ListNode(sum);
            //交换节点
            sumNode.next = newNode;
            sumNode = sumNode.next;
            l1 = l1 === null ? null : l1.next;
            l2 = l2 === null ? null : l2.next;
        }
        //最后计算到最高位时，如果carry不是0，则代表需要再进一位
        if(carry > 0){
            sumNode.next = new ListNode(carry);
        }
        //返回辅助链表
        return node.next;
    }
    //计算完成之后需要再次反转
    return reverseList(computedSumNode(l1,l2));
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

现在我们来思考一下进阶解法，假如我们不能对链表进行操作，那么我们应该如何去解答这道题呢？实际上，我们可以使用两个辅助栈，分别将两个链表从头到尾入栈，然后每次同时出栈，就可以实现右端对齐相加。具体如下:

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [],stack2 = [];
    //入栈
    while(l1 !== null){
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2 !== null){
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let sumNode = null,carry = 0;
    //当栈中含有节点时循环
    while(stack1.length || stack2.length){
        //定义和
        let sum = 0;
        //根据栈节点的情况来求和,stack1无节点时，求和stack2，同理
        if(!stack1.length){
            sum += stack2.pop();
        }else if(!stack2.length){
            sum += stack1.pop();
        }else {
            sum += (stack1.pop() + stack2.pop());
        }
        //与进位相加
        sum += carry;
        //计算进位
        carry = sum >= 10 ? 1 : 0;
        //将sum与10取余即可得进位后的和
        sum %= 10;
        let node = new ListNode(sum);
        //节点交换
        node.next = sumNode;
        sumNode = node;
    }
    //最后一个节点相加时也有可能有进位
    if(carry > 0){
        let node = new ListNode(carry);
        node.next = sumNode;
        sumNode = node;
    }
    return sumNode;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/lMSNwu/solution/shua-chuan-jian-zhi-offer-day13-lian-bia-cl27/)。
