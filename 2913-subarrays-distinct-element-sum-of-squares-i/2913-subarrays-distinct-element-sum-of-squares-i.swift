class Solution {
    
    static private func countDistinctValues(nums: ArraySlice<Int>) -> Int {
        var set: Set<Int> = []
        nums.forEach({it in
            set.insert(it)
        })
        return set.count
    }
    
    func sumCounts(_ nums: [Int]) -> Int {
        var distinctElements: [Int] = []
        
        for i in 0 ..< nums.count {
            for j in 1 ... nums.count - i {
                let subArray = nums[i..<i + j]
                let counter = Solution.countDistinctValues(nums: subArray)
                distinctElements.append(counter)
            }
        }
        
        var result: Int = 0
        distinctElements.forEach({it in
            let square = pow(Decimal(it), 2)
            result += Int(truncating: NSDecimalNumber(decimal: square))
        })
        return result
    }
}
