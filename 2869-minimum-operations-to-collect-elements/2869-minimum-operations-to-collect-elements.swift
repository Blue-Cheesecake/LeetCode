class Solution {
    func minOperations(_ nums: [Int], _ k: Int) -> Int {
        var result = 0
        var numLeft: Set<Int> = []
        
        for num in 1 ... k {
            numLeft.insert(num)
        }
                
        for i in stride(from: nums.count - 1, to: -1, by: -1) {
            let num = nums[i]
            result += 1
            if numLeft.contains(num) {
                numLeft.remove(num)
                
                if numLeft.isEmpty {
                    return result
                }
            }
        }
        
        
        return result
    }
}
