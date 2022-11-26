class Solution {
    fun subdomainVisits(cpdomains: Array<String>): List<String> {
        val map = hashMapOf<String, Int>()

        cpdomains.forEach { countPaired ->
            val spl = countPaired.split(" ")
            val counter = spl[0].toInt()
            val domain = spl[1]

            val splitDomain = domain.split(".")
            var curr = ""
            for (i in splitDomain.lastIndex downTo 0) {

                curr = if (curr == "") {
                    splitDomain[i]
                } else {
                    splitDomain[i] + "." + curr
                }

                val currentCounter = map[curr] ?: 0
                map[curr] = currentCounter + counter

            }
        }

        val result = mutableListOf<String>()
        map.forEach { entry ->
            result.add("${entry.value} ${entry.key}")
        }
        return result
    }
}
