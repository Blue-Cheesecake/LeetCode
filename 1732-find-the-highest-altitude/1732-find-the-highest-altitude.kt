import kotlin.math.max

class Solution {
    fun largestAltitude(gain: IntArray): Int {
        if (gain.size == 1) {
            return max(0, gain[0])
        }

        var result = max(0, gain[0])
        var prev = gain[0]

        for (i in 1 until gain.size) {
            val curr = gain[i]
            val sum = curr + prev
            result = max(result, sum)
            prev = sum
        }


        return result
    }
}
