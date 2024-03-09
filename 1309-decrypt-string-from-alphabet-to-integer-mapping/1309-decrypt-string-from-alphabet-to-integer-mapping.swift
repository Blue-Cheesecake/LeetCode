class Solution {
    
    func convertIntToChar(_ i: Int) -> Character {
        let startingValue = Int(("a" as UnicodeScalar).value)
        let char = Character(UnicodeScalar(i + startingValue - 1)!)
        return char
    }
    
    func freqAlphabets(_ s: String) -> String {
        var result = ""
        var i = 0
        
        while i < s.count {
            if i + 3 <= s.count {
                let mayHash = s[s.index(s.startIndex, offsetBy: i + 2)]
                if mayHash == "#" {
                    let f = s.index(s.startIndex, offsetBy: i)
                    let l = s.index(s.startIndex, offsetBy: i + 2)
                    let substr = s[f..<l]
                    let num = Int(substr)
                    let char = convertIntToChar(num!)
                    result += String(char)
                    i += 3
                    continue
                }
            }
            
            let num = Int(String(s[s.index(s.startIndex, offsetBy: i)]))
            let char = convertIntToChar(num!)
            result += String(char)
            i += 1
        }
                
        return result
    }
}
