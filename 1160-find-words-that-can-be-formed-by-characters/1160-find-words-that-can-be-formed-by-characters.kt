class Solution {
    fun countCharacters(words: Array<String>, chars: String): Int {
        var result = 0
        val freq = HashMap<Char, Int>()
        chars.forEach {
            freq[it] = if (freq.containsKey(it)) freq[it]!! + 1 else 1
        }

        words.forEach {
            var isGood = true
            val copied = freq.clone() as HashMap<Char, Int>
            it.forEach { it1 ->
                if (!copied.containsKey(it1) || copied[it1]!! == 0) {
                    isGood = false
                    return@forEach
                }

                copied[it1] = copied[it1]!! - 1
            }

            if (isGood) result += it.length
        }

        println(freq.toString())
        return result
    }
}
