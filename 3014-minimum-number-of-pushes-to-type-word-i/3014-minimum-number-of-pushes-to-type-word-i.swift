class Solution {
    func minimumPushes(_ word: String) -> Int {
        var result = 0
        var mapping: [String] = []
        let maxLength = 8
        
        var counter = 0
        for i in 0..<word.count {
            let c = word[word.index(word.startIndex, offsetBy: i)]
            
            if mapping.count < maxLength {
                mapping.append(String(c))
                continue
            }
            
            counter += 1
            
            if counter == maxLength {
                counter = 0
            }
            
            var s = mapping.remove(at: counter)
            s += String(c)
            mapping.insert(s, at: counter)
        }
        
        for c in word {
            let s = mapping.first { str in str.contains(c) }
            guard let s = s else { continue }
            let range: Range<String.Index>? = s.range(of: String(c))
            guard let range = range else { continue }
            let index = s.distance(from: s.startIndex, to: range.lowerBound)
            result += index + 1
        }
        
        return result
    }
}
