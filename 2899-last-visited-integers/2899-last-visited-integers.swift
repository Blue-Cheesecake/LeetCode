class Solution {
    func lastVisitedIntegers(_ nums: [Int]) -> [Int] {
        var ans: [Int] = []
        var seen: [Int] = []
        
        var k = 0
        for num in nums {
            if num > 0 {
                seen.insert(num, at: 0)
                k = 0
                continue
            }
            
            k += 1
            
            // count consecutive k in front of seen
            var i = 0
            while i < seen.count && seen[i] == -1 {
                k += 1
                i += 1
            }
            
            if k <= seen.count {
                ans.append(seen[k - 1])
            } else {
                ans.append(-1)
            }
        }
        
        return ans
    }
}
