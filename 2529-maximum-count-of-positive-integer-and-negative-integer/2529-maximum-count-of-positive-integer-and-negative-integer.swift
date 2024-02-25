class Solution {
    func maximumCount(_ nums: [Int]) -> Int {
        var result = 0
        var neg = 0
        var pos = 0
        var i = 0
        while i < nums.count {
            if nums[i] < 0 {
                neg += 1
            } else {
                break
            }
            i += 1
        }
        
        while i < nums.count {
            if nums[i] != 0 {
                break
            }
            i += 1
        }
        
        pos = nums.count - i
                
        return max(pos, neg)
    }
}
