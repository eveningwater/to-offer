### 二维数组中的查找

> 题目:在一个 n \* m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:

现有矩阵 matrix 如下：

```js
[
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
```

给定 target = 5，返回  true。给定  target = 20，返回  false。

> 限制：0 <= n <= 1000

### 思路分析

- 方法一：暴力解法

利用 2 个循环遍历这个二维数组，然后判断每一项是否与给定项相等，如果相等则返回 true 并终止循环。代码如下:

```js
var findNumberIn2DArray = function (matrix, target) {
  if (matrix && target) {
    for (let i = 0, len = matrix.length; i < len; i++) {
      for (let j = 0, newLen = matrix[i].length; j < newLen; j++) {
        if (matrix[i][j] === target) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
};
```
以上算法的时间复杂度和空间复杂度分析如下:

由于要执行 2 个循环，所以这个算法的时间复杂度为 O(n^2),每次都会访问 n 次变量，所以空间复杂度为 O(n)。

* 时间复杂度O(n ^ 2)。
* 空间复杂度O(n)。

- 方法二:线性算法

由于该二维数组是从左到右都是递增，并且从上到下也是递增，因此我们可以从第一行的最右边开始寻找，如果最右边的元素比给定的 target 大，这样就可以排除后续的所有行的数都不会等于 target，也就让列数减一，继续进行比较，知道将每一列都访问完成也找不到又或者能找到便能返回结果。同理，如果最右边的元素比给定的 target 小，则能直接排除第一行的元素，行加一继续访问判断。代码如下:

```js
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix || !matrix.length || !target) return false;
  //   由于每一行的长度都相等，因此取第一行的长度即可，也就是列数
  let rows = matrix.length,
    columns = matrix[0].length;
  //   行从0开始，列从第一行最后一个元素开始
  let row = 0,
    column = columns - 1;
  //   当行小于行数，并且列数大于0时开始循环
  while (row < rows && column >= 0) {
    let item = matrix[row][column];
    //   如果两者相等，则直接返回，否则判断大小来确定是行加1还是列加1
    if (item === target) {
      return true;
    } else if (target > item) {
      row++;
    } else {
      column--;
    }
  }
  return false;
};

```

以上算法的时间复杂度和空间复杂度分析如下:

由于程序只有一个循环只运行n次，然后根据条件最多在循环里执行m次，因此时间复杂度为O(m + n),其中m可忽略不计，时间复杂度就变成了O(n),而空间复杂度仍然是O(n)。

* 时间复杂度O(n)。
* 空间复杂度O(n)。

[更多思路](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/solution/mian-shi-ti-04-er-wei-shu-zu-zhong-de-cha-zhao-zuo/)。