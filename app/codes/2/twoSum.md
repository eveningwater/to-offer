### 排序数组中两个数字之和 

> 题目:给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 0 开始计数 ，所以答案数组应当满足 0 <= answer[0] < answer[1] < numbers.length 。

假设数组中存在且只存在一对符合条件的数字，同时一个数字不能使用两次。

示例 1：

```js
// 输入：numbers = [1,2,4,6,10], target = 8
// 输出：[1,3]
// 解释：2 与 6 之和等于目标数 8 。因此 index1 = 1, index2 = 3 。
```

示例 2：

```js
// 输入：numbers = [2,3,4], target = 6
// 输出：[0,2]
```

示例 3：

```js
// 输入：numbers = [-1,0], target = -1
// 输出：[0,1]
```

提示:

* 2 <= numbers.length <= 3 * 10 ^ 4
* -1000 <= numbers[i] <= 1000
* numbers 按 递增顺序 排列
* -1000 <= target <= 1000
* 仅存在一个有效答案

> 注意：本题与[主站 167 题](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/)相似（下标起点不同）。

### 思路分析

观察本题，我们可以看到答案是返回下标，因此我们可以考虑双指针法。定义left为起始值0,right为结束值nums.length - 1。然后根据求和与target做比较，判断是哪个指针变动，返回这两个指针组成的数组即可。代码如下:

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0,r = numbers.length - 1;
    while(l < r){
         const sum = numbers[l] + numbers[r];
         if(sum === target){
             return [l,r];
         }else if(sum > target){
             r--;
         }else {
             l++;
         }
    }
    return [];
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)，其中 n 是数组的长度。
* 空间复杂度：O(1)。

基于双指针，我们还可以使用二分法进行优化。

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length;
    for(let i = 0;i < len;i++){
        let l = i + 1,
            r = len - 1;
        while(l <= r){
            let m = l + Math.floor((r - l) / 2);
            const sum = numbers[i] + numbers[m];
            if(sum === target){
                return [i,m];
            }else if(sum > target){
                r = m - 1;
            }else {
                l = m + 1;
            }
        }
    }
    return [];
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * log<sup>n</sup>)，其中 n 是数组的长度。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/kLl5u1/solution/jian-dan-yi-dong-javac-pythonjs-liang-sh-et4y/)。
