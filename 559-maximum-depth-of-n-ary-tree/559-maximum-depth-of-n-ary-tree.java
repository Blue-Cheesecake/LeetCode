class Solution {

  public int maxDepth(Node root) {
    if (root == null)
      return 0;
    int maxChildrenDept = 0;
    for (Node chilNode : root.children) {
      int depthChild = maxDepth(chilNode);
      maxChildrenDept = Math.max(maxChildrenDept, depthChild);
    }
    return 1 + maxChildrenDept;
  }
}