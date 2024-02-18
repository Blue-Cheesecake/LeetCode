class Solution {
    func strStr(_ haystack: String, _ needle: String) -> Int {
        var result = -1
        var i = 0
        
        while i < haystack.count - needle.count + 1 {
            let firstIndex = haystack.index(haystack.startIndex, offsetBy: i)
            let lastIndex = haystack.index(haystack.startIndex, offsetBy: i + needle.count)
            let substring = haystack[firstIndex..<lastIndex]
            
            if substring == needle {
                result = i
                break
            }
            
            i += 1
        }
        
        
        return result
    }
}
