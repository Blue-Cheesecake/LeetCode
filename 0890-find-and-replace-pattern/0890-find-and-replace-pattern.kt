class Solution {
    fun findAndReplacePattern(words: Array<String>, pattern: String): List<String> {
        val result = arrayListOf<String>()

        words.forEach { word ->

            var isValid = true
            val mapPatt = hashMapOf<Char, Char>()
            val mapWord = hashMapOf<Char, Char>()

            for (i in word.indices) {
                val cp = pattern[i]
                val cw = word[i]

                if (mapPatt.containsKey(cp) &&
                    mapWord.containsKey(cw) &&
                    mapPatt[cp] != cw &&
                    mapWord[cw] != cp
                ) {
                    isValid = false
                    break
                }

                if (mapPatt.containsKey(cp) &&
                    mapPatt[cp] != cw
                ) {
                    isValid = false
                    break
                }

                if (mapWord.containsKey(cw) &&
                    mapWord[cw] != cp
                ) {
                    isValid = false
                    break
                }

                mapPatt[cp] = cw
                mapWord[cw] = cp

            }

            if (isValid) {
                result.add(word)
            }
        }

        return result.toList()
    }
}
