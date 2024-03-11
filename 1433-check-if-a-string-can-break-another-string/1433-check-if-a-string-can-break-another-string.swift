class Solution {
    func checkIfCanBreak(_ s1: String, _ s2: String) -> Bool {
        let sortedS1 = s1.sorted()
        let sortedS2 = s2.sorted()
        
        var breakByS1 = true
        var breakByS2 = true
        
        for i in 0 ..< sortedS1.count {
            let charS1 = sortedS1[i]
            let charS2 = sortedS2[i]
            
            if charS1 > charS2 {
                breakByS1 = false
            }
            if charS2 > charS1 {
                breakByS2 = false
            }
        }
        
        return breakByS1 || breakByS2
    }
}
