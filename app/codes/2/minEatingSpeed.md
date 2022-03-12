###  狒狒吃香蕉

> 题目:狒狒喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。狒狒可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉，下一个小时才会开始吃另一堆的香蕉。狒狒喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

示例1：

```js
// 输入: piles = [3,6,7,11], H = 8
// 输出: 4
```

示例2：

```js
// 输入: piles = [30,11,23,4,20], H = 5
// 输出: 30
```

示例3：

```js
// 输入: piles = [30,11,23,4,20], H = 5
// 输出: 
```

提示:

* 1 <= piles.length <= 10^4
* piles.length <= H <= 10^9
* 1 <= piles[i] <= 10^9

> 注意：本题与[主站 875 题](https://leetcode-cn.com/problems/koko-eating-bananas/)相同。

### 思路分析

本题主要难点在于题目的理解，事实上如果理解了题目的话，那么本题就很好解答了。实际上也就是二分算法的一种应用场景。我们知道k最大的可能是piles中的最大值(当k与数组的长度相等时)，而k最小可能就是1。因此我们只要在1到max(piles[i])中选择一个中间值，用piles[i] / m(即中间值)得到吃这堆香蕉需要多长时间，然后需要合计所有的时间，判断时间是否小于H，如果时间足够即time <= H,那么则继续缩小中间值的大小，否则时间不够，就需要增加H的大小。

```js
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const getTime = function(k){
        let hour = 0;
        for(const pile of piles){
            //香蕉数除以最大速度就是所需时间
            hour += Math.floor(pile / k);
            //如果有余数，代表会有剩余，需要放到下次再吃，所以时间也需要增加
            if(pile % k){
                hour++;
            }
        }
        return hour;
    }
    //k 在[1,max]之间
    const max = Math.max(...piles);
    let l = 0,r = max,res;
    while(l <= r){
        const m = Math.floor((l + r) / 2);
        const time = getTime(m);
        //如果时间刚好小于了h,则代表能够吃完，那么结果就是m，m也是最小的速度
        if(time <= h){
            res = m;
            r = m - 1;
        }else{
            l = m + 1;
        }
    }
    return res;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n * log<sup>n</sup>)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/nZZqjQ/solution/er-fen-cha-zhao-kuai-su-ding-wei-si-lu-j-xy22/)。
