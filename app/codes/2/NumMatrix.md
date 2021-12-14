### 二维子矩阵的和

> 题目:给定一个二维矩阵 matrix，以下类型的多个请求：

* 计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。实现 NumMatrix 类：
* NumMatrix(int[][] matrix) 给定整数矩阵 matrix 进行初始化
* int sumRegion(int row1, int col1, int row2, int col2) 返回左上角 (row1, col1) 、右下角 (row2, col2) 的子矩阵的元素总和。

示例 1：

![](../../images/2/NumMatrix-1.png)

```js
输入: 
// ["NumMatrix","sumRegion","sumRegion","sumRegion"]
// [[[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]],[2,1,4,3],[1,1,2,2],[1,2,2,4]]
// 输出: 
// [null, 8, 11, 12]

// 解释:
// NumMatrix numMatrix = new NumMatrix([[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]]]);
// numMatrix.sumRegion(2, 1, 4, 3); // return 8 (红色矩形框的元素总和)
// numMatrix.sumRegion(1, 1, 2, 2); // return 11 (绿色矩形框的元素总和)
// numMatrix.sumRegion(1, 2, 2, 4); // return 12 (蓝色矩形框的元素总和)
```


提示:

* m == matrix.length
* n == matrix[i].length
* 1 <= m, n <= 200
* -10 ^ 5 <= matrix[i][j] <= 10 ^ 5
* 0 <= row1 <= row2 < m
* 0 <= col1 <= col2 < n
* 最多调用 10 ^ 4 次 sumRegion 方法

> 注意：本题与[主站 304 题]( https://leetcode-cn.com/problems/range-sum-query-2d-immutable/)相同。

### 思路分析


```js
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {

};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:



[更多思路](https://leetcode-cn.com/problems/O4NDxx/solution/er-wei-zi-ju-zhen-de-he-by-leetcode-solu-vtih/)。
