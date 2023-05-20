class Solution {
    public int differenceOfSum(int[] nums) {
        int eleSum = 0;
        int digSum = 0;

        for (int num : nums) {
            eleSum += num;
            String s = String.valueOf(num);
            for (int i = 0; i < s.length(); i++) {
                digSum += Integer.parseInt(String.valueOf(s.charAt(i)));
            }
        }

        return Math.abs(eleSum - digSum);
    }
}