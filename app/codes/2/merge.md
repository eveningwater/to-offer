###  合并区间

> 题目:以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。


示例1：

```js
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
```

示例2：

```js
// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
```

提示:

* 1 <= intervals.length <= 10 ^ 4
* intervals[i].length == 2
* 0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10 ^ 4


> 注意：本题与[主站 56 题](https://leetcode-cn.com/problems/merge-intervals/)相同。

### 思路分析

本题我们可以按照左边界然后进行排序，然后设定一个初始比较值（即为排序后的第一项），然后遍历数组，将初始比较值的end和每一项的start做比较，如果end大于了start，则代表有重叠，修改初始比较值的end，然后进行合并，最后添加到数组中去即可。

```js
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let prev = intervals[0],res = [];
    for(const interval of intervals){
         if(prev[1] >= interval[0]){
             prev[1] = Math.max(interval[1],prev[1]);
         }else{
             res.push(prev);
             prev = interval;
         }
    }
    //遍历完了还要最后再添加一次
    res.push(prev);
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * log<sup>n</sup>)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/SsGoHC/solution/he-bing-qu-jian-by-leetcode-solution-ghjl/)。
