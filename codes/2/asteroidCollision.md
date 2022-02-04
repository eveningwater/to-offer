### 小行星碰撞

> 题目:给定一个整数数组 asteroids，表示在同一行的小行星。

对于数组中的每一个元素，其绝对值表示小行星的大小，正负表示小行星的移动方向（正表示向右移动，负表示向左移动）。每一颗小行星以相同的速度移动。

找出碰撞后剩下的所有小行星。碰撞规则：两个行星相互碰撞，较小的行星会爆炸。如果两颗行星大小相同，则两颗行星都会爆炸。两颗移动方向相同的行星，永远不会发生碰撞。

示例1：

```js
// 输入：asteroids = [5,10,-5]
// 输出：[5,10]
// 解释：10 和 -5 碰撞后只剩下 10 。 5 和 10 永远不会发生碰撞。
```

示例2：

```js
// 输入：asteroids = [8,-8]
// 输出：[]
// 解释：8 和 -8 碰撞后，两者都发生爆炸。
```

示例3：

```js
// 输入：asteroids = [10,2,-5]
// 输出：[10]
// 解释：2 和 -5 发生碰撞后剩下 -5 。10 和 -5 发生碰撞后剩下 10 。
```

示例4：

```js
// 输入：asteroids = [-2,-1,1,2]
// 输出：[-2,-1,1,2]
// 解释：-2 和 -1 向左移动，而 1 和 2 向右移动。 由于移动方向相同的行星不会发生碰撞，所以最终没有行星发生碰撞。 
```

提示:

* 2 <= asteroids.length <= 10 ^ 4
* -1000 <= asteroids[i] <= 1000
* asteroids[i] != 0

> 注意：本题与[主站 735 题](https://leetcode-cn.com/problems/asteroid-collision/)相同。

### 思路分析

本题我们需要理解碰撞的规则，根据题意，我们可以模拟栈的弹入和弹出，最后返回这个栈就是最终的答案，碰撞的时候，我们需要理解根据规则来决定是哪个行星消失，如果是栈内存储的行星消失，那么就需要弹出栈内的元素，否则就需要将当前行星给入栈。根据这种思路来解答，那么就很好解答本题呢。

```js
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    //创建一个栈，存储行星
    const stack = [];
    for(const a of asteroids){
        //当栈中存在行星，并且方向与当前行星相反，而且还要绝对值大小小于当前行星，此时栈中的行星就应该消失，弹出栈中的行星
        while(stack.length && stack[stack.length - 1] && stack[stack.length - 1] > 0 && stack[stack.length - 1] < -a){
            stack.pop();
        }
        //当栈中行星大小与当前行星相等，并且当前行星与栈中行星相反方向，则也要弹出栈中的行星
        if(stack.length && a < 0 && stack[stack.length - 1] === -a){
            stack.pop();
        }else if(a > 0 || !stack.length || stack[stack.length - 1] < 0){
            stack.push(a);
        }
    }
    return stack;
};
```

以上算法的时间复杂度和空间复杂度分析如下:

* 时间复杂度：O(n)。
* 空间复杂度：O(1)。

[更多思路](https://leetcode-cn.com/problems/XagZNi/solution/shua-chuan-jian-zhi-offer-day17-zhan-i-0-5yho/)。
