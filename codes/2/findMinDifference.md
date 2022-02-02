### 最小时间差

> 题目:给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

示例1：

```js
// 输入：timePoints = ["23:59","00:00"]
// 输出：1
```

示例2：

```js
// 输入：timePoints = ["00:00","23:59","00:00"]
// 输出：0
```


提示:

* 2 <= timePoints <= 2 * 10 ^ 4
* timePoints[i] 格式为 "HH:MM"

> 注意：本题与[主站 539 题](https://leetcode-cn.com/problems/minimum-time-difference/)相同。

### 思路分析

本题的思路有很多，首先根据题目，最终结果是要返回分钟数的，因此我们可以先将时间列表中的每一个时间转换成分钟，根据`:`来计算，再然后按照升序排列时间列表，最后就可以计算最小时间差了。

```js
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    //转换成分钟时间戳，小时* 60 + 分钟 
    let newTimePoints = timePoints.map((item) => {
        const arr = item.split(":");
        return arr[0] * 60 + arr[1] * 1;
    });
    //升序排序
    newTimePoints.sort((a,b) => a - b);
    //由于时间列表中可能会出现00:00，因此这里的初始值就可以是，最小值与24小时与最大值之间的差值
    // 24小时为1440
    let res = newTimePoints[0] + 1440 - newTimePoints[newTimePoints.length - 1];
    //循环计算最小差值
    for(let i = 0;i < newTimePoints.length - 1;i++){
        let diff = newTimePoints[i + 1] - newTimePoints[i];
        if(diff < res)res = diff;
    }
    return res;
}
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/569nqc/solution/python3-java-c-golang-si-chong-bian-chen-dvok/)。
