class Solution {
    func countPrefixes(_ words: [String], _ s: String) -> Int {
        var result: Int = 0
        
        words.forEach { word in
            if s.hasPrefix(word) {
                result += 1
            }
        }
        
        return result
    }
}
