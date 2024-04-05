class Solution {
    fun finalValueAfterOperations(operations: Array<String>): Int {
        var result = 0

        operations.forEach {
            val operation = it.replace("X", "")
            if (operation[0] == '-') {
                result--
            } else {
                result++
            }
        }

        return result
    }

}