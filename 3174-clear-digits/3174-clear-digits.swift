class Solution {
    func clearDigits(_ s: String) -> String {
        var curr = s
        
        var should_continue = true
        repeat {
            var applied: String = ""
            
            var i = 0
            var should_add = true
            while i < curr.count {
                let c = curr[curr.index(curr.startIndex, offsetBy: i)]
                if !should_add {
                    applied += "\(c)"
                    i += 1
                    continue
                }
                if i == curr.count - 1{
                    applied += "\(c)"
                    break
                }
                
                let n = curr[curr.index(curr.startIndex, offsetBy: i + 1)]
                
                if n.isNumber {
                    i += 2
                    should_add = false
                    continue
                }
                
                applied += "\(c)"
                i += 1
            }
            
            should_continue = !should_add
            curr = applied
        } while should_continue
        
        
        return curr
    }
}
