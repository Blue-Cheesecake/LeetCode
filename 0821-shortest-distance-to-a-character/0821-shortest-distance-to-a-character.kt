import kotlin.math.abs
import kotlin.math.min

class Solution {
    fun shortestToChar(s: String, c: Char): IntArray {

        var curr = 0
        val result = IntArray(s.length)

        for (i in s.indices) {
            if (s[i] == c) {
                result[curr] = 0
                curr++
                continue
            }

            // backward
            var back = -1
            for (j in i - 1 downTo 0) {
                if (s[j] == c) {
                    back = j
                    break
                }
            }

            // forward
            var forward = -1
            for (j in i + 1 until s.length) {
                if (s[j] == c) {
                    forward = j
                    break
                }
            }

            if (back == -1) {
                result[curr] = abs(i - forward)
            } else if (forward == -1) {
                result[curr] = abs(i - back)
            } else {
                val final = min(abs(i - back), abs(i - forward))
                result[curr] = final
            }
            curr++
        }


        return result
    }
}
