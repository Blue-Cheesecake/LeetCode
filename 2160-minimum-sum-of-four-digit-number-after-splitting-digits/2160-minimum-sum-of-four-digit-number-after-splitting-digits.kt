class Solution {
    fun minimumSum(num: Int): Int {
        val s = num.toString()
        val sortedS = s.toCharArray().sorted()
        val pair1: Int = (sortedS[0].toString() + sortedS[2].toString()).toInt()
        val pair2: Int = (sortedS[1].toString() + sortedS[3].toString()).toInt()
        return pair1 + pair2
    }
}
