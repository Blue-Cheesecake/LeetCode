class Solution {
    fun heightChecker(heights: IntArray): Int {
        val sortedHeight = heights.sorted()
        var result = 0

        for (i in sortedHeight.indices) {
            if (heights[i] != sortedHeight[i]) result++
        }

        return result
    }
}