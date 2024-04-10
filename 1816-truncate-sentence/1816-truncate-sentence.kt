class Solution {
fun truncateSentence(s: String, k: Int): String {
    var result = ""
    var currentWords = 0

    for (i in s.indices) {
        if (s[i] == ' ') {
            currentWords += 1

            if (currentWords == k) return result
        }

        result += s[i]
    }

    return result
}

}