###  和最小的 k 个数对

> 题目:给定两个以升序排列的整数数组 nums1 和 nums2 , 以及一个整数 k 。

示例1：

```js
// 输入: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// 输出: [1,2],[1,4],[1,6]
// 解释: 返回序列中的前 3 对数：
//     [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
```

示例2：

```js
// 输入: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// 输出: [1,1],[1,1]
// 解释: 返回序列中的前 2 对数：
//      [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
```

示例3：

```js
// 输入: nums1 = [1,2], nums2 = [3], k = 3 
// 输出: [1,3],[2,3]
// 解释: 也可能序列中所有的数对都被返回:[1,3],[2,3]
```

提示:

* 1 <= nums1.length, nums2.length <= 10 ^ 4
* -10 ^ 9 <= nums1[i], nums2[i] <= 10 ^ 9
* nums1, nums2 均为升序排列
* 1 <= k <= 1000


> 注意：本题与[主站 373 题](https://leetcode-cn.com/problems/find-k-pairs-with-smallest-sums/)相同。

### 思路分析

本题一个最简单的做法就是用一个数组存储所有的值对，然后将这个存储数组的值对按照和的大小进行升序排列，然后返回从0到k的值对即可。代码如下:

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let arr = [];
    for(const num1 of nums1){
        for(const num2 of nums2){
            arr.push([num1,num2]);
        }
    }
    return arr.sort((a,b) => (a[0] + a[1]) - (b[0] + b[1])).slice(0,k);
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n ^ 2)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/qn8gGX/solution/he-zui-xiao-de-k-ge-shu-dui-by-leetcode-eoce6/)。
