class Solution {
    func scoreOfString(_ s: String) -> Int {
        var result = 0
        
        var i = 0
        
        while i < s.count - 1 {
            if i + 1 >= s.count {
                break
            }
            
            let a = s[s.index(s.startIndex, offsetBy: i)]
            let b = s[s.index(s.startIndex, offsetBy: i  + 1)]
            let diff = abs(Int(a.asciiValue!) - Int(b.asciiValue!))
            
            result += diff
            
            i += 1
        }
        
        return result
    }
}