class Solution {
    fun sortArrayByParity(nums: IntArray): IntArray {
        var curr = 0
        val result = IntArray(nums.size)

        val temp = arrayListOf<Int>()

        nums.forEach {
            if (it % 2 == 0) {
                result[curr] = it
                curr += 1
            } else {
                temp.add(it)
            }
        }

        for (i in temp.indices) {
            result[curr] = temp[i]
            curr += 1
        }

        return result
    }
}
