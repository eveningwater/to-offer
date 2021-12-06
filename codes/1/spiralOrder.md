### 顺时针打印矩阵

> 题目: 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

示例 1：

```js
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]
```

示例 2：

```js
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
```

 
> 限制:

* 0 <= matrix.length <= 100
* 0 <= matrix[i].length <= 100

### 思路分析

通过题意我们可以定义四个方向的值，来模拟这个顺时针方向，比如从左到右，left应该是从0到列的长度，定义变量为left，简写为l，依次类推，t代表从上到下，r代表从右到左，b代表从下到上，按照这个四个方向去模拟，然后每一次模拟我们都通过一次循环添加元素到定义的结果数组中，如此就完成了一轮矩阵遍历。

代码如下:

```js
var spiralOrder  = function(matrix) {
    //判断如果矩阵是空数组，则直接返回空数组
    if(!matrix.length)return [];
    // 定义一个结果数组，并且计算行与列，定义四个方向的变量，定义矩阵的大小。
    let res = [],rows = matrix.length,cols = matrix[0].length,l = 0,t = 0,r = cols - 1,b = rows - 1,size = rows * cols;
    // 如果res长度不等于矩阵的大小，则循环
    while(res.length !== size){
        // 从左到右
        for(let i = l; i <= r;i++)res.push(matrix[t][i]);
        //一个方向完成之后，上方向需要变成下一行
        t++;
        // 从上到下
        for(let i = t; i <= b;i++)res.push(matrix[i][r]);
        // 此时r应该减1，因为下一轮是从右向左
        r--;
        // 完成一轮循环，我们需要判断res结果数组的长度是否和矩阵大小一样，如果一样则中断循环
        if(res.length === size)break;
        // 从右到左
        for(let i = r;i >= l;i--)res.push(matrix[b][i]);
        // 此时b应该减1，因为下一轮是从下到上
        b--;
        for(let i = b;i >= t;i--)res.push(matrix[i][l]);
        // 从左向右，所以l需要加1
        l++;
    }
    return res;
};
```

该算法时间复杂度和空间复杂度都是O(M * N)。

[更多思路](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/shun-shi-zhen-da-yin-ju-zhen-by-leetcode-solution/)。

