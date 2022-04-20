###  最小路径之和
 
> 题目:给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：一个机器人每次只能向下或者向右移动一步。

示例1：

![](../../images/2/minPathSum-1.jpg)

```js
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
```


示例2：

```js
// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12
```

提示:

* m == grid.length
* n == grid[i].length
* 1 <= m, n <= 200
* 0 <= grid[i][j] <= 100


> 注意：本题与[主站 64 题](https://leetcode-cn.com/problems/minimum-path-sum/)相同。

### 思路分析

由于路径的方向只可能是向下或者向右，因此网格的第一行的每个元素只能从左上角元素开始向右移动到达，网格的第一列的每个元素只能从左上角元素开始向下移动到达，此时的路径就是唯一的，因此每个元素对应的最小路径和即为对应的路径上的数字总和。而对于不在第一行和不在第一列的元素，可以从其上方相邻元素向下移动一步到达，或者从其左方相邻元素向右移动一步到达，元素对应的最小路径和等于其上方相邻元素与其左方相邻元素两者对应的最小路径和中的最小值加上当前元素的值。由于每个元素对应的最小路径和与其相邻元素对应的最小路径和有关，因此可以使用动态规划来求解。

创建二维数组dp，与原始网格大小相同，dp[i][j]表示从左上角触发到(i,j)位置的最小路径和。显然dp[0][0] = grid[0][0]。对于dp中的其余元素，可以通过以下状态转移方程计算元素值。

* 当i > 0且j = 0时,dp[i][0] = dp[i - 1][0] + grid[i][0]
* 当i = 0且j > 0时,dp[0][j] = dp[0][j - 1] + grid[0][j]
* 当i > 0且j > 0时，dp[i][j] = min(dp[i - 1][j],dp[i][j - 1]) + grid[i][j]

最后得到dp[m - 1][n - 1]的值即为从网格左上角到网格右下角的最小路径和。

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid === null || grid.length === 0 || grid[0].length === 0){
        return 0;
    }
    const m = grid.length,n = grid[0].length;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for(let i = 1;i < m;i++){
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for(let j = 1;j < n;j++){
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            dp[i][j] = Math.min(dp[i - 1][j],dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[m - 1][n - 1];
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m * n)，其中 m 和 n 分别是网格的行数和列数。需要对整个网格遍历一次，计算 dp 的每个元素的值。
* 空间复杂度：O(m * n)，其中 m 和 n 分别是网格的行数和列数。创建一个二维数组 dp，和网格大小相同。空间复杂度可以优化，例如每次只存储上一行的dp值，则可以将空间复杂度优化到 O(n)。


[更多思路](https://leetcode-cn.com/problems/0i0mDW/solution/zui-xiao-lu-jing-zhi-he-by-leetcode-solu-y7tx/)。
