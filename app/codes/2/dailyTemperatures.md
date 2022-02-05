### 每日温度

> 题目:请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。


示例1：

```js
// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
```

示例2：

```js
// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
```

示例3：

```js
// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]
```

提示:

* 1 <= temperatures.length <= 10 ^ 5
* 30 <= temperatures[i] <= 100

> 注意：本题与[主站 739 题](https://leetcode-cn.com/problems/daily-temperatures/)相同。

### 思路分析

本题有点不好理解，我们可以根据举的示例来理解，例如temperatures = [30,60,90]时，对应的下标应该是[0,1,2],而结果是[1,1,0],这是怎么得出来的呢。根据题意我们需要计算间隔天数，当前的下标索引就可以理解为每天的温度，所以使用下标减下标即可得到间隔天数。现在我们遍历这个温度列表，我们可以创建一个栈来存储下标。首先如果栈中没有元素，则入栈第一天的温度，即30，然后再到下一轮循环，也就是下标为1的60,30小于60，代表温度是升高了，间隔天数也就等于1 - 0 = 1。所以我们需要额外创建一个栈来存储这个间隔天数。然后再进入下一轮循环，比较60 < 90，代表温度升高了，所以间隔天数也是2 - 1 = 1,而90后面没有温度了，代表温度不会升高，所以需要再添加一个0。也就是说这道题的实质就是找到右边第一个比当前数字大的数，这里的当前数字指的就是每一轮循环遍历的数组项。理解这道题的意思之后，我们就可以使用单调栈的思路来解决。本质上就是模拟栈的弹入和弹出。

```js
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [],res = [];
    //初始化结果数组每一轮间隔天数，也就是等待的天数为0
    for(let i = 0;i < temperatures.length;i++){
        res.push(0);
    }
    for(let i = 0;i < temperatures.length;i++){
        while(stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]){
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/iIQa4I/solution/shua-chuan-jian-zhi-offer-day18-zhan-ii-mdv06/
)。
