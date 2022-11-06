class Solution {

    private val set = HashSet<Int>()

    fun isHappy(n: Int): Boolean {
        var sum = 0
        n.toString().forEach { num ->
            sum += num.toString().toInt() * num.toString().toInt()
        }
        if (sum == 1) {
            return true
        }
        if (set.contains(sum)) {
            return false
        }
        set.add(sum)
        return isHappy(sum)
    }
}
