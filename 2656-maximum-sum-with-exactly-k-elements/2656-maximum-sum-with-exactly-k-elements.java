class Solution {
    public int maximizeSum(int[] nums, int k) {
        int x = -1;
        for (int num : nums) {
            if (x < num) {
                x = num;
            }
        }
        return k * x + (k - 1) * k / 2;
    }
}