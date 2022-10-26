class Solution {
    fun areOccurrencesEqual(s: String): Boolean {
        val dict = HashMap<Char, Int>()

        s.forEach {
            if (dict.containsKey(it)) {
                dict.replace(it, dict.getValue(it) + 1)
            } else {
                dict[it] = 1
            }
        }

        val num = dict[s[0]]
        dict.forEach { (_, v) ->
            if (v != num) return false
        }

        return true
    }
}
