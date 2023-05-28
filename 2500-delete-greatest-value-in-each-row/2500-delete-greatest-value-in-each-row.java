class Solution {
    public int deleteGreatestValue(int[][] grid) {
        // First, sort each row
        for (int[] row : grid) {
            Arrays.sort(row);
        }
        
        int totalMax = 0;

        // Then, find the maximum in each column
        for (int col = 0; col < grid[0].length; col++) {
            int max = 0;
            for (int[] row : grid) {
                if (row[col] > max) {
                    max = row[col];
                }
            }
            totalMax += max;
        }

        return totalMax;
    }
}