class Solution {
  public boolean isUnivalTree(TreeNode root) {
    if (root == null) {
      return true;
    }
    if (root.left == null && root.right == null) {
      return true;
    }
    if (root.left != null && root.val != root.left.val) {
      return false;
    }
    if (root.right != null && root.val != root.right.val) {
      return false;
    }

    boolean result_from_left = isUnivalTree(root.left);
    boolean result_from_right = isUnivalTree(root.right);

    return result_from_left && result_from_right;
  }
}