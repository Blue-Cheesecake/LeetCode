class Solution {
    fun frequencySort(nums: IntArray): IntArray {
        val freq = mutableMapOf<Int, Int>()
        nums.forEach {
            freq[it] = freq.getOrDefault(it, 0) + 1
        }

        val sortedPairs = freq.toList().sortedWith(Comparator compare@{ o1, o2 ->
            if (o1.second == o2.second) return@compare o2.first - o1.first
            return@compare o1.second - o2.second
        })

        val result = IntArray(nums.size) { 0 }

        var i = 0
        var j = 0
        while (i < sortedPairs.size) {
            val key = sortedPairs[i].first
            val f = sortedPairs[i].second

            for (k in 0..<f) {
                result[j] = key
                j++
            }

            i++
        }

        return result
    }

}