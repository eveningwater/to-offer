### 用两个栈实现队列

> 题目:用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )。


示例 1：

```js
//输入：
//["CQueue","appendTail","deleteHead","deleteHead"]
//[[],[3],[],[]]
//输出：[null,null,3,-1]
```

示例 2：
```js
//输入：
//["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
//[[],[],[5],[2],[],[]]
//输出：[null,-1,null,null,5,2]
```

提示：

> 1 <= values <= 10000
> 最多会对 appendTail、deleteHead 进行 10000 次调用

### 思路分析

这里乍一看题和示例估计会十分懵逼，特意在这里说明一下，如下:

输入： ["CQueue","appendTail","deleteHead","deleteHead"] 这里是要执行的方法，从左到右执行

[[],[3],[],[]]对应上面的方法，是上面方法的参数。CQueue和deleteHead方法不需要指定数字，只有添加才需要指定数字

1.创建队列，返回值为null

2.将3压入栈，返回值为null

3.将栈底的元素删除，也就是消息队列中先进来的元素，所以是deleteHead，返回该元素的数值，所以为3

4.继续删除栈底的元素，但是没有元素了，所以返回-1

所以就有了下面的输出 输出：[null,null,3,-1]

示例 2： 输入： ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]

[[],[],[5],[2],[],[]]

1.创建队列，返回值为null

2.删除栈底的元素，但是没有元素，所以返回-1

3.把5压入栈，返回null

4.把2压入栈，返回null

5.删除栈底的一个元素，也就是消息队列中先进来的元素，所以是deleteHead，就是最先进来的5，返回值为5，

6.删除栈底的一个元素，就是后进来的2，返回值为2，

所以就有了下面的输出

输出：[null,-1,null,null,5,2]

有没有发现先进来的数字，首先显示出来了，但是题目中说要使用栈，栈是先进后出的，使用栈来实现先进先出，在这里使用两个栈就好了，从一个进来再到另一个栈，这样顺序就是先进先出了。题目的主旨写在第一句，就是，使用两个栈实现一个队列。


- 方法一：普通解法

根据以上题解，我们就很好理解了题意，因此这里我们分别用两个队列来代表两个栈，因此`CQueue`函数的代码无非就是初始化2个队列，即2个数组，然后往头部插入整数，意思即往第一个队列中插入传入的参数，然后从头部开始删除整数也就是说我们先把第一个队列的所有元素添加到第二个队列中，当然我们首先需要做判断，如果第二个队列中含有元素，则直接删除该元素并返回，否则就把第一个队列的元素添加到第二个队列中再进行删除，当第一个队列的元素全部添加到第二个队列中，并且第二个队列没有元素了，此时就没有元素，就直接返回-1。因此详细代码如下:

```js
var CQueue = function () {
    // 定义2个队列
    this.firstStack = [];
    this.secondStack = [];
};
CQueue.prototype.appendTail = function(value) {
    // 往第一个队列中插入元素，参数为整数
    this.firstStack.push(value);
};
CQueue.prototype.deleteHead = function() {
    // 先判断第二个队列中是否有元素
    if(this.secondStack.length){
        // 如果有即返回被删除的元素，调用pop方法即返回被删除的元素
        return this.secondStack.pop();
    }else{
        // 如果第二个队列中没有元素，则将第一个队列中的所有元素添加到第二个队列中
        let i = 0,len = this.firstStack.length;
        while(i < len){
            this.secondStack.push(this.firstStack.pop());
            i++;
        }
        // 然后再去删除第二个队列中的元素，先判断如果第二个队列无元素，则直接返回-1
        if(!this.secondStack.length){
            return -1;
        }else{
            return this.secondStack.pop();
        }
    }
};
```

由于用到了一个循环，所以这个算法的时间复杂度为 O(n),用了2个数组存储，所以空间复杂度为 O(2n)。


