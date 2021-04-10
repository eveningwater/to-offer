### 旋转数组的最小数字

> 题目:一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  


示例 1：

```js
// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0
```

### 思路分析

本题有点类似排序算法题，关于排序算法我们有选择排序算法（也叫冒泡排序算法），快速排序算法等等。详情可[这篇文章](https://segmentfault.com/a/1190000018233346)。

因此我们能用排序算法来解决这道题，但是这不是我们想要的，我们可以使用二分法来解决这道题。

- 二分法

```js
    var minArray = function(numbers){
        let min = 0,max = numbers.length - 1;
        while(min < max){
            // min和max始终都是变化的，因此需要加上min，因为通过判断来排除左边的还是右边的元素，比中间值大的就都可以排除掉
            let cen = min + (max - min) / 2;
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
