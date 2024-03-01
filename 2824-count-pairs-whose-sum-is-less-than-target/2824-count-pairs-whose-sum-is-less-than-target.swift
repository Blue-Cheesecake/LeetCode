class Solution {
    func countPairs(_ nums: [Int], _ target: Int) -> Int {
        var result = 0
        for i in 0 ..< nums.count - 1 {
            for j in i + 1 ..< nums.count {
                let e1 = nums[i]
                let e2 = nums[j]
                
                if e1 + e2 < target {
                    result += 1
                }
            }
        }
        
        
        return result
    }
}
