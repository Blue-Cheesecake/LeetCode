class Solution {
    func runningSum(_ nums: [Int]) -> [Int] {
        var copied = nums
        for i in 1 ..< nums.count {
            copied[i] += copied[i-1]
        }
        return copied
    }
}
