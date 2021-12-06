###  调整数组顺序使奇数位于偶数前面

> 题目:输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。

示例：

```js
// 输入：nums = [1,2,3,4]
// 输出：[1,3,2,4] 
// 注：[3,1,2,4] 也是正确的答案之一。
```

提示：

* 0 <= nums.length <= 50000
* 1 <= nums[i] <= 10000

思路分析:

本题的思路比较简单，那就是通过定义一个新数组，然后循环这个数组，判断数组的每一项如果是偶数就添加到数组的末尾，否则就添加到数组的头部。数组的`push`与`unshift`方法分别对应添加到尾部与头部。代码如下:

```js
var exchange = function(nums) {
    let res = [],len = nums.length,i = 0;
    while(i < len){
        if(nums[i] % 2 === 0){
            res.push(nums[i]);
        }else{
            res.unshift(nums[i]);
        }
        i++;
    }
    return res;
};
```

该算法的时间复杂度为O(n),空间复杂度也为O(n)。

以下为其它的解法。如:

--方法一

利用数组的原生排序方法进行排序处理。

```js
  var exchange = function(nums){
      return nums.sort((a,b) => b%2 - a % 2)
  }
```

-- 双指针法

定义两个指针，然后通过位运算符判断是否奇偶性，然后改变指针的方向,通过一个中间变量来交换双方的位置。代码如下:

```js
var exchange = function(nums){
    let left = 0,right = nums.length - 1,temp;
    while(left < right){
        // 判断是否是奇数
        if((nums[left] & 1) !== 0){
            left++:
            continue;
        }
        // 判断是否是偶数
        if((nums[right] & 1) !== 1){
            right--;
            continue;
        }
        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
    return nums;
}
```

时间复杂度为O(n),空间复杂度为O(1)。

