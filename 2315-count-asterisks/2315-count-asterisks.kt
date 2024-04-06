class Solution {
    fun countAsterisks(s: String): Int {
        var result = 0
        val spl = s.split("|")

        for (i in spl.indices step 2) {
            val word = spl[i]
            val counting = word.count { it == '*' }
            result += counting
        }

        return result
    }

}