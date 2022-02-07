###  矩阵中最大的矩形

> 题目:给定一个由 0 和 1 组成的矩阵 matrix ，找出只包含 1 的最大矩形，并返回其面积。

> 注意：此题 matrix 输入格式为一维 01 字符串数组。

示例1：

![](../../images/2/maximalRectangle-1.jpg)

```js
// 输入：matrix = ["10100","10111","11111","10010"]
// 输出：6
// 解释：最大矩形如上图所示。
```

示例2：

```js
// 输入：matrix = []
// 输出：0
```

示例3：

```js
// 输入：matrix = ["0"]
// 输出：0
```

示例4：

```js
// 输入：matrix = ["1"]
// 输出：1
```

示例5：

```js
// 输入：matrix = ["00"]
// 输出：0
```

提示:

* rows == matrix.length
* cols == matrix[0].length
* 0 <= row, cols <= 200
* matrix[i][j] 为 '0' 或 '1'


> 注意：本题与[主站 85 题](https://leetcode-cn.com/problems/maximal-rectangle/)相同（输入参数格式不同）。

### 思路分析

本题的解题思路需要借助与上一道题[矩阵中最大的矩形](/codes/2/maximalRectangle.md)的解题思路。因为本题求矩阵中的最大矩形，我们实际上也就可以把这一题转换成上一题的直方图求最大矩形，这样就可以求出本题的答案。首先，我们可以以矩阵第一项的字符串的长度为初始化的heights的长度，并且填充值为0，然后开始循环遍历，需要两个循环，第一个是遍历矩阵，第二个则是遍历矩阵中的每一项字符串，然后当我们遍历字符串时，每一个字符如果是0我们就直接将直方图的heights[i]设置为0,否则就直接相加，如此一来，便可以转换成直方图来求解最大矩形面积，再利用上一道题的单调栈解题思想即可解答本题。

```js
/*
* 单调栈的思路，详见上一道题的解答
*/
var largestRectangleArea = function(heights){
    const stack = [-1];
    let maxArea = 0;
    for(let i = 0;i < heights.length;i++){
        while(stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]){
            const idx = stack.pop(),
                  w = i - stack[stack.length - 1] - 1,
                  h = heights[idx];
            maxArea = Math.max(maxArea,w * h);
        }
    }
    while(stack[stack.length - 1] !== -1){
        const idx = stack.pop(),
              w = heights.length -  stack[stack.length - 1] - 1,
              h = heights[idx];
        maxArea = Math.max(maxArea,w * h);
    }
    return maxArea;
}
/**
 * @param {string[]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    //边界条件的判定
    if(!matrix.length || matrix[0].length){
        //如果矩阵为空或者矩阵第一项是空字符串，则无需计算
        return 0;
    }
    //初始化结果
    let maxArea = 0;
    //初始化转换数组
    const heights = [];
    //默认初始化的大小为矩阵第一个字符串的长度
    for(let i = 0;i < matrix[0].length;i++){
        heights[i] = 0;
    }
    //开始转换成heights
    for(const row of matrix){
        for(let i = 0;i < row.length;i++){
            heights[i] = row[i] !== "0" ? heights[i] + 1 : 0;
        }
        //求最大直方图的矩形面积
        maxArea = Math.max(maxArea,largestRectangleArea(heights));
    }
    return maxArea;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/PLYXKQ/solution/jian-zhi-offer-2-mian-shi-ti-40-shu-zhon-9z2v/)。
