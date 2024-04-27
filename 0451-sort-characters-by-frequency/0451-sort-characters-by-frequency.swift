class Solution {
    func frequencySort(_ s: String) -> String {
        var freqs: Dictionary<Character, Int> = [:]
        
        s.forEach({ it in
            if let freq = freqs[it] {
                freqs[it] = freq + 1
            } else {
                freqs[it] = 1
            }
        })
        
        let sorted =  freqs.sorted(by: { (p1, p2) in
            return p1.value > p2.value
        })
        
        var result = ""
        sorted.forEach({ pair in
            for _ in 0 ..< pair.value {
                result += String(pair.key)
            }
        })
        return result
    }
}
