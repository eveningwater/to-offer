### 二叉树中和为某一值的路径

> 题目:二叉树中和为某一值的路径给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
(叶子节点 是指没有子节点的节点)。

示例 1:

![示例1](../images/pathsumii1.jpg)

输入: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出: [[5,4,11,2],[5,8,4,5]]
 

示例 2:

![示例2](../images/pathsum2.jpg)

输入: root = [1,2,3], targetSum = 5
输出: []

示例 3:


输入: root = [1,2], targetSum = 0
输出: []

提示：

* 树中节点总数在范围 [0, 5000] 内
* -1000 <= Node.val <= 1000
* -1000 <= targetSum <= 1000

### 思路分析

本题，首先我们需要思考一点，那就是需要求出所有值的和为targetSum,那么应该如何求和?我们可以利用数组的`reduce`方法来完成，代码如下:

```js
const sum = arr => arr.reduce((r,i) => r += i,0);
```

这只是完成的第一步，接下来，我们来想一想，我们要求出从根节点到叶子节点的值相加起来和为targetSum,意味着我们需要遍历该二叉树。遍历二叉树有三种方法，前序遍历，中序遍历和后序遍历。相关遍历的概念我们在再之前的示例中都已经了解到了，这里我们可以采用后序遍历，即根->右->左。只要满足了以下三种可能，就说明值相加一定是满足条件的，所以添加到结果数组中去。

1. 左子树没有节点了
2. 右子树没有节点了
3. 节点值加起来和为targetSum

我们可以模拟一个栈`stack`，将节点以及节点值存在这个栈中。并且我们用一个数组`res`来存储满足条件的节点值。由于节点值可以是多个的，所以我们还需要包一层一维数组来协助栈存储节点中的值。然后，我们按照后序遍历的遍历顺序，将遍历到的节点与其对应的节点值不停的添加到这个栈中。当然，首先我们是先从栈中取出节点，循环的判断条件就是栈中是否含有节点，也就是`stack.length`是否大于0。如此一来，本题我们也就找到了解法。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var pathSum = function(root,target) {
    //首先判断root是否为空节点，如果为空节点，则直接返回一个空数组
    if(!root){
        return [];
    }
    //定义一个栈以及存储满足条件值的数组，还有定义好sum求和函数
    let stack = [[root,[root.val]]],
        res = [],
        sum = arr => arr.reduce((r,i) => r += i,0);
    //循环条件就是stack.length
    while(stack.length){
        //从栈中取出节点与节点值，可以利用数组解构的取,注意是后序遍历，所以使用pop
        let [node,nodeVal] = stack.pop();
        // 满足三种情况，我们就需要将值添加到结果数组中去,这里的nodeVal本身就是一个数组
        if(!node.left && !node.right && sum(nodeVal) === target){
            res.push(nodeVal);
        }
        //后序遍历顺序，先递归右子树，再递归左子树,分别将右子树与左子树的节点与节点值弹入栈中
        node.right && stack.push([node.right,[...nodeVal,node.right.val]])
        node.left && stack.push([node.left,[...nodeVal,node.left.val]])
    }
    //返回结果值
    return res;
};
```

以上算法，时间复杂度是O(n),空间复杂度也为O(n)。

