### 旋转数组的最小数字

> 题目:把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为 1。  
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

示例 1：

```js
// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0
```

> 注意：本题与[主站 154 题](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)相同。

提示：

* n == numbers.length
* 1 <= n <= 5000
* -5000 <= numbers[i] <= 5000
* numbers 原来是一个升序排序的数组，并进行了 1 至 n 次旋转

### 思路分析

本题有点类似排序算法题，关于排序算法我们有选择排序算法（也叫冒泡排序算法），快速排序算法等等。详情可[这篇文章](https://segmentfault.com/a/1190000018233346)。

因此我们能用排序算法来解决这道题，但是这不是我们想要的，我们可以使用二分法来解决这道题。

- 二分法

```js
    var minArray = function(numbers){
        let min = 0,max = numbers.length - 1;
        while(min < max){
            // min和max始终都是变化的，因此需要加上min，因为通过判断来排除左边的还是右边的元素，比中间值大的就都可以排除掉
            let cen = min + Math.floor((max - min) / 2);
            if(numbers[max] > numbers[cen]){
                max = cen;
            }else if(numbers[max] < numbers[cen]){
                min = cen + 1;
            }else{
                max -= 1;
            }
        }
        return numbers[min];
    }
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(log n), 其中 n 是数组 numbers 的长度。如果数组是随机生成的，那么数组中包含相同元素的概率很低，在二分查找的过程中，大部分情况都会忽略一半的区间。而在最坏情况下，如果数组中的元素完全相同，那么 while 循环就需要执行 n 次，每次忽略区间的右端点，时间复杂度为 O(n)。
* 空间复杂度：O(1), 几个标志变量使用常数大小的额外空间。

[更多思路](https://leetcode.cn/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-by-leetcode-s/)。

