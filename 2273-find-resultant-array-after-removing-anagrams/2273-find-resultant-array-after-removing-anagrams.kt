class Solution {

    private fun findFreq(str: String): HashMap<Char, Int> {
        val result = hashMapOf<Char, Int>()

        str.forEach {
            if (result.containsKey(it)) {
                result.replace(it, result[it]!! + 1)
            } else {
                result[it] = 1
            }
        }

        return result
    }

    fun removeAnagrams(words: Array<String>): List<String> {

        val freqs = arrayListOf<HashMap<Char, Int>>()
        words.forEach {
            freqs.add(findFreq(it))
        }

        val result = words.toMutableList()

        var canPerformOperation: Boolean
        do {
            canPerformOperation = false
            for (i in 1 until freqs.size) {
                if (freqs[i] == freqs[i - 1]) {
                    canPerformOperation = true
                    freqs.removeAt(i)
                    result.removeAt(i)
                    break
                }
            }
        } while (canPerformOperation)

        println(freqs.toString())
        return result.toList()
    }
}
