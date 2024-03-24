class TreeNode{
    constructor(val = 0, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var postorderTraversal = function(root) {
    if(!root) return [];

    const stack = [];
    const result = [];

    stack.push(root);

    while(stack.length){
        const node = stack.pop();
        result.unshift(node.val);

        if(node.left) stack.push(node.left);
        if(node.right) stack.push(node.right);
    }
    return result;
};

//Example usage:
const root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);

console.log("Postorder traversal:", postorderTraversal(root1));

const root2 = null;
console.log("Postorder traversal:", postorderTraversal(root2));

const root3 = new TreeNode(1);
console.log("Postorder traversal:", postorderTraversal(root3));