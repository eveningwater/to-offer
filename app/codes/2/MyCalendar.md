###  日程表

> 题目:请实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内没有其他安排，则可以存储这个新的日程安排。

MyCalendar 有一个 book(int start, int end)方法。它意味着在 start 到 end 时间内增加一个日程安排，注意，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，  start <= x < end。

当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生重复预订。

每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true。否则，返回 false 并且不要将该日程安排添加到日历中。

请按照以下步骤调用 MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

示例1：

```js
// 输入:
// ["MyCalendar","book","book","book"]
// [[],[10,20],[15,25],[20,30]]
// 输出: [null,true,false,true]
// 解释: 
// MyCalendar myCalendar = new MyCalendar();
// MyCalendar.book(10, 20); // returns true 
// MyCalendar.book(15, 25); // returns false ，第二个日程安排不能添加到日历中，因为时间 15 已经被第一个日程安排预定了
// MyCalendar.book(20, 30); // returns true ，第三个日程安排可以添加到日历中，因为第一个日程安排并不包含时间 20
```


提示:

* 每个测试用例，调用 MyCalendar.book 函数最多不超过 1000次。
* 0 <= start < end <= 10 ^ 9


> 注意：本题与[主站 729 题](https://leetcode-cn.com/problems/my-calendar-i/)相同。

### 思路分析

本题其实理解了题意很简单。我们可以使用一个数组来存储每一个日程，日程为一个对象，存储开始日期和结束日期，遍历这个数组，然后判断新添加的start和end只要满足start > item["end"] || end - 1 < item["start"]的取反，就不符合题意，即日期已经被预定过了，所以直接返回false，无需添加，否则就添加到数组中。代码如下:

```js
var MyCalendar = function() {
    this.calendarList = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for(const item of this.calendarList){
         const s = item["start"],e = item["end"];
         //因为end是开区间，所以需要减1
         if(!(start > e || end - 1 < s)){
             return false;
         }
    }
    //存储end的时候需要减1
    this.calendarList.push({ start,end:end - 1 });
    return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/fi9suh/solution/c-hong-hei-shu-map058-ri-cheng-biao-by-d-f7q9/)。
