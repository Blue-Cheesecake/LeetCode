class Solution {

    private fun shiftRight(array: IntArray, index: Int) {
        for (i in array.size - 1 downTo index + 1) {
            array[i] = array[i - 1]
        }
    }

    fun merge(nums1: IntArray, m: Int, nums2: IntArray, n: Int): Unit {
        var i = 0
        var j = 0
        var currNum1Length = m

        while (j < n) {
            val element1 = nums1[i]
            val element2 = nums2[j]

            if (element2 <= element1 || i >= currNum1Length) {
                shiftRight(nums1, i)
                nums1[i] = element2

                i++
                j++
                currNum1Length++
                continue
            }

            i++
        }
    }
}
