###  山峰数组的顶部

> 题目:符合下列属性的数组 arr 称为 山峰数组（山脉数组）：

* arr.length >= 3
* 存在 i（0 < i < arr.length - 1）使得：
    * arr[0] < arr[1] < ... arr[i-1] < arr[i]
    * arr[i] > arr[i+1] > ... > arr[arr.length - 1]

给定由整数组成的山峰数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i ，即山峰顶部。


示例1：

```js
// 输入：arr = [0,1,0]
// 输出：1
```

示例2：

```js
// 输入：arr = [1,3,5,4,2]
// 输出：2
```

示例3：

```js
// 输入：arr = [0,10,5,2]
// 输出：1
```

示例4：

```js
// 输入：arr = [3,4,5,1]
// 输出：2
```

示例5：

```js
// 输入：arr = [24,69,100,99,79,78,67,36,26,19]
// 输出：2
```

提示:

* 3 <= arr.length <= 10 ^ 4
* 0 <= arr[i] <= 10 ^ 6
* 题目数据保证 arr 是一个山脉数组

> 进阶：很容易想到时间复杂度 O(n) 的解决方案，你可以设计一个 O(log(n)) 的解决方案吗？

> 注意：本题与[主站 852 题](https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/)相同。

### 思路分析

本题由于题目给定的数组就是一个山脉数组，因此我们不需要判断是否是山脉数组，而所谓的山顶，根据题意，事实上就是找到数组中的最大值,并返回最大值的索引。因此我们很容易想到O(n)的解法。如下:

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    return arr.indexOf(Math.max(...arr));
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

当然时间复杂度为O(n)的解法还可以就是枚举（即遍历）。

本题还有一个进阶的解法，那就是使用二分算法来解答本题。二分算法的思路就是不停的取一半，找到满足条件的那个索引值即可。代码如下:

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0,end = arr.length - 1,res = -1;
    while(start <= end){
        let m = Math.floor((start + end) / 2);
        if(arr[m] > arr[m - 1] && arr[m] > arr[m + 1]){
            res = m;
            break;
        }else if(arr[m] < arr[m - 1]){
            end = m - 1;
        }else{
            start = m + 1;
        }
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(log<sup>n</sup>)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/B1IidL/solution/shan-feng-shu-zu-de-ding-bu-by-leetcode-9j8lk/)。
