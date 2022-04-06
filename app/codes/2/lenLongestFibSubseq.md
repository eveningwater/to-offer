###  最长斐波那契数列 

> 题目:如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：

* n >= 3
* 对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}

给定一个严格递增的正整数数组形成序列 arr ，找到 arr 中最长的斐波那契式的子序列的长度。如果一个不存在，返回0。

（回想一下，子序列是从原序列  arr 中派生出来的，它从 arr 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）

示例1：

```js
// 输入: arr = [1,2,3,4,5,6,7,8]
// 输出: 5
// 解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。
```


示例2：

```js
// 输入: arr = [1,3,7,11,12,14,18]
// 输出: 3
// 解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。
```


提示:

* 3 <= arr.length <= 1000
* 1 <= arr[i] < arr[i + 1] <= 10^9


> 注意：本题与[主站 873 题](https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/)相同。

### 思路分析

根据题意，斐波那契数列子序列至少长度为2,因此，我们可以创建一个有关于数组的set，然后我们循环遍历数组，依次找到斐波那契数列子序列的第一个数，第二个数，再计算长度。只要找到，我们就将结果加1。

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let set = new Set(arr),
        count = 2, //子序列的起始值至少是2
        res = 0;
    for(let i = 0;i < arr.length - 2;i++){
        for(let j = i + 1;j < arr.length - 1;j++){
            count = 2;//注意这一步很关键，因为每次赋值res，就相当于重新开始找子序列，又从2开始
            let f1 = arr[i],f2 = arr[j],f3 = f1 + f2;
            while(set.has(f3)){
                if(count > res){
                    res = count;
                }
                f1 = f2;
                f2 = f3;
                f3 = f1 + f2;
            }
        }
    }
    return max;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n ^ 2 * m)。
* 空间复杂度：O(n)。


[更多思路](https://leetcode-cn.com/problems/Q91FMA/solution/jian-zhi-offer-2-mian-shi-ti-93-shu-zhon-2ww4/)。
