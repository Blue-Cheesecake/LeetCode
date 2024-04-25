class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        var start = ""
        var base = ""
        var currIndex = 0

        for (i in strs.indices) {
            val element = strs[i]
            if (element.length != 0) {
                start = element
                base = element[currIndex].toString()
                break
            }
        }

        var isAllSatisfied: Boolean
        do {

            var isAllStartsWith = true
            for (i in strs.indices) {
                val str = strs[i]
                if (!str.startsWith(base)) {
                    isAllStartsWith = false
                    break
                }
            }

            isAllSatisfied = isAllStartsWith
            if (isAllSatisfied) {
                currIndex++
                if (currIndex >= start.length) {
                    break
                }
                base += start[currIndex]
            } else {
                base = base.substring(0..<base.length - 1)
            }

        } while (isAllSatisfied)

        return base
    }
}
