class Solution {
    
    private func getSquare(_ n: Int) -> Int {
        var result = 0
        var n = n
        while n != 0 {
            let remainder = n % 10
            n -= remainder
            n /= 10
            
            result += remainder * remainder
        }
        return result
        
    }
    
    func isHappy(_ n: Int) -> Bool {
        var memoi: Set<Int> = []
        var curr = n
        
        repeat {
            if memoi.contains(curr) {
                return false
            }
            memoi.insert(curr)
            curr = getSquare(curr)
        } while curr != 1
        
        return true
    }
}
