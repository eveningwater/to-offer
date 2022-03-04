###  单词之和

> 题目:实现一个 MapSum 类，支持两个方法，insert 和 sum：

* MapSum() 初始化 MapSum 对象
* void insert(String key, int val) 插入 key-val 键值对，字符串表示键 key ，整数表示值 val 。如果键 key 已经存在，那么原来的键值对将被替代成新的键值对。
* int sum(string prefix) 返回所有以该前缀 prefix 开头的键 key 的值的总和。

示例1：

```js
// 输入：
// inputs = ["MapSum", "insert", "sum", "insert", "sum"]
// inputs = [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
// 输出：
// [null, null, 3, null, 5]

// 解释：
// MapSum mapSum = new MapSum();
// mapSum.insert("apple", 3);  
// mapSum.sum("ap");           // return 3 (apple = 3)
// mapSum.insert("app", 2);    
// mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
```


提示:

* 1 <= key.length, prefix.length <= 50
* key 和 prefix 仅由小写英文字母组成
* 1 <= val <= 1000
* 最多调用 50 次 insert 和 sum


> 注意：本题与[主站 677 题](https://leetcode-cn.com/problems/map-sum-pairs/)相同。

### 思路分析

本题理解了题目，就很简单，我们可以用Map来存储键值对，然后遍历键值，判断键值的前缀与prefix相等，则求和，最后返回和即可。

```js
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.map.set(key,val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    for(const [k,v] of this.map){
        if(k.indexOf(prefix) === 0){
            sum += v;
        }
    }
    return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(n)。

[更多思路](https://leetcode-cn.com/problems/z1R5dt/solution/jian-zhi-offer-ii-066-dan-ci-zhi-he-by-s-3e5i/)。
