class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        var r1 = -1
        var r2 = -1
        val map = mutableMapOf<Int, Int>()

        for (i in nums.indices) {
            val num1 = nums[i]
            val num2 = target - num1
            val j = map[num2]

            if (j != null) {
                r1 = i
                r2 = j
                break
            }

            map[num1] = i
        }


        return intArrayOf(r1, r2)
    }
}
