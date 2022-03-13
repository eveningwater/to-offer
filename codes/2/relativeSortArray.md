###  数组相对排序

> 题目:给定两个数组，arr1 和 arr2，

* arr2 中的元素各不相同
* arr2 中的每个元素都出现在 arr1 中

对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。


示例1：

```js
// 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// 输出：[2,2,2,1,4,3,3,9,6,7,19]
```

提示:

* 1 <= arr1.length, arr2.length <= 1000
* 0 <= arr1[i], arr2[i] <= 1000
* arr2 中的元素 arr2[i] 各不相同
* arr2 中的每个元素 arr2[i] 都出现在 arr1 中



> 注意：本题与[主站 1122 题](https://leetcode-cn.com/problems/relative-sort-array/ )相同。

### 思路分析

本题考察计数排序的思路。具体地，我们可以定义一个数组fre，统计arr1中每一个元素出现的次数，根据题意，这个数组我们可以初始化为arr1中的最大数（这样能保证arr1中每一个元素出现的次数都被统计到），随后我们再定义一个数组res存储答案，这个数组初始化为0,长度即arr1.length。然后，我们遍历数组arr2,对于arr2的每一项x，当fre[x]大于0的时候，我们就需要遍历fre[x],并添加到res中，然后将fre[x]重置为0,这样当我们遍历完arr2的时候，res数组就已经完成了出现在arr2的元素依照arr2的顺序来排序，但是我们还没有对没有出现在arr2的元素进行排序，因此，我们再遍历一次fre,然后将每一项x添加到res中，就是我们最终想要的答案。代码如下:

```js
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let max = 0;
    //求出arr1中的最大数
    for(const x of arr1){
        max = Math.max(x,max);
    }
    //初始化fre，每一项初始化为0,即arr1中每一个元素出现的次数默认为0
    let fre = [];
    for(let i = 0;i <= max;i++){
        fre[i] = 0;
    }
    //遍历arr1,统计arr1中元素出现的次数
    for(const x of arr1){
        fre[x]++;
    }
    //初始化res
    let res = [];
    //初始化为0
    for(let i = 0;i < arr1.length;i++){
        res[i] = 0;
    }
    //定义循环索引
    let index = 0;
    //遍历arr2
    for(const x of arr2){
        //如果fre[x]中出现次数大于0，就添加到res中
        for(let i = 0;i < fre[x];i++){
            res[index++] = x;
        }
        //fre[x]重置为0,也就是重置元素出现的次数
        fre[x] = 0;
    }
    //再遍历一次fre[x],统计没有再arr2中出现的元素
    for(let x = 0;x <= max;x++){
        for(let i = 0;i < fre[x];i++){
            res[index++] = x;
        }
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(m + n + max)，其中m和n分别是数组arr1和arr2的长度，max是数组arr1中的最大值，在本题中max不会超过 1000。遍历数组arr2的时间复杂度为O(n)，遍历数组fre的时间复杂度为O(max)，而在遍历的过程中，我们一共需要 O(m)的时间得到答案数组。
* 空间复杂度：O(max)，即为数组fre需要使用的空间。我们一般不将存储返回答案的数组计入空间复杂度，并且在我们得到数组fre之后，实际上也是可以将返回答案覆盖在数组arr1上的。如果在面试中遇到了本题，这些细节都可以和面试官进行确认。

[更多思路](https://leetcode-cn.com/problems/0H97ZC/solution/shu-zu-xiang-dui-pai-xu-by-leetcode-solu-sfng/)。
