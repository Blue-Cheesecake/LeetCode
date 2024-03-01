class Solution {
    func leftRightDifference(_ nums: [Int]) -> [Int] {
        var result: Array<Int> = []
        var leftSum: Array<Int> = [0]
        var rightSum: Array<Int> = [0]
        
        for i in 1 ..< nums.count {
            leftSum.append(nums[i - 1] + leftSum.last!)
        }
        for i in stride(from: nums.count - 1, to: 0, by: -1) {
            rightSum.append(nums[i] + rightSum.last!)
        }
        
        rightSum.reverse()
        
        for i in 0 ..< leftSum.count {
            result.append(abs(leftSum[i] - rightSum[i]))
        }
        
        return result
    }
}
