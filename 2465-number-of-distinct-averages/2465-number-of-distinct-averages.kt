class Solution {
    fun distinctAverages(nums: IntArray): Int {
        val distinctAverage = mutableSetOf<Double>()
        val sortedNum = nums.sortedArray()
        var i = 0
        var j = sortedNum.size - 1

        while (i < sortedNum.size / 2) {
            val mini = sortedNum[i]
            val max = sortedNum[j]
            val avg: Double = (mini + max) / 2.0
            distinctAverage.add(avg)
            i++
            j--
        }
        
        return distinctAverage.size
    }
}
