class Solution {
    fun findWords(words: Array<String>): Array<String> {
        val result = ArrayList<String>()
        val rows = arrayOf(
            "qwertyuiopQWERTYUIOP",
            "asdfghjklASDFGHJKL",
            "zxcvbnmZXCVBNM"
        )

        words.forEach { w ->
            val word = w
            var isSameRow = false
            rows.forEach { row ->
                var thisRow = true
                word.forEach { c ->
                    if (!row.contains(c)) {
                        thisRow = false
                        return@forEach
                    }
                }
                if (thisRow) {
                    isSameRow = true
                    return@forEach
                }
            }
            if (isSameRow) {
                result.add(word)
            }
        }


        return result.toTypedArray()
    }
}
