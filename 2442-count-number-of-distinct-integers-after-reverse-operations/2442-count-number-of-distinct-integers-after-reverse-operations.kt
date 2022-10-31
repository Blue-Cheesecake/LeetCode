class Solution {
    fun countDistinctIntegers(nums: IntArray): Int {
        val set = HashSet<Int>()

        nums.forEach { num ->
            set.add(num)
            val revInt = num.toString().reversed().toInt()
            set.add(revInt)
        }

        return set.size
    }
}
