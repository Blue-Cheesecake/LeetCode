class Solution {
    fun oddString(words: Array<String>): String {
        val diffIntArray = mutableMapOf<ArrayList<Int>, Pair<Int, String>>()
        var result = ""
        words.forEach { word ->
            val intArr = arrayListOf<Int>()
            for (i in 0 until word.length - 1) {
                intArr.add(word[i + 1].toInt() - word[i].toInt())
            }
            if (diffIntArray.containsKey(intArr)) {
                diffIntArray[intArr] = Pair(diffIntArray[intArr]!!.first + 1, diffIntArray[intArr]!!.second)
            } else {
                diffIntArray[intArr] = Pair(1, word)
            }

            val diffLi = diffIntArray.toList()
            if (diffLi.size == 2) {
                var isAllOne = true
                var res = ""
                for (i in diffLi.indices) {
                    if (diffLi[i].second.first != 1) {
                        isAllOne = false
                    } else {
                        res = diffLi[i].second.second
                    }
                }

                if (!isAllOne) {
                    result = res
                }

            }

        }
        return result
    }
}
