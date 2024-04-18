class Solution {
    func findPeaks(_ mountain: [Int]) -> [Int] {
        var result: [Int] = []
        
        for i in 1 ..< mountain.count - 1 {
            let lhs = mountain[i - 1]
            let mid = mountain[i]
            let rhs = mountain[i + 1]
            
            if mid > lhs && mid > rhs {
                result.append(i)
            }
        }
        
        return result
    }
}
