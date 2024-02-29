extension Substring {
    
    var isUnique: Bool {
        if self.isEmpty {
            return true
        }
        var baseChar = self[self.index(self.startIndex, offsetBy: 0)]
        var isSame = true
        for char in self {
            if char != baseChar {
                isSame = false
                break
            }
        }
        return isSame
    }
}

class Solution {
    func largestGoodInteger(_ num: String) -> String {
        var result = ""
        
        for i in stride(from: 0, to: num.count - 2, by: 1) {
            let start = num.index(num.startIndex, offsetBy: i)
            let end = num.index(num.startIndex, offsetBy: i + 2)
            let substring = num[start...end]
            
            if substring.isUnique {
                if result.isEmpty {
                    result = String(substring)
                    continue
                }
                
                let valRet = Int(result)
                let valSub = Int(substring)
                
                if valSub! > valRet! {
                    result = String(substring)
                    continue
                }
            }
        }
        
        return result
    }
}
