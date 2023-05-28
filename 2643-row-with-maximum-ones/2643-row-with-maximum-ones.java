class Solution {

    private static int countOnes(int[] arr) {
        return Arrays.stream(arr).reduce((left, right) -> {
            if (right == 1) return 1 + left;
            return left;
        }).getAsInt();
    }

    public int[] rowAndMaximumOnes(int[][] mat) {
        int[] result = new int[2];

        for (int i = 0; i < mat.length; i++) {
            int[] arr = mat[i];
            int num = countOnes(arr);
            if (num > result[1]) {
                result[1] = num;
                result[0] = i;
            }
        }

        return result;
    }
}