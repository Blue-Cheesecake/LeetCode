class Solution {
    func distinctDifferenceArray(_ nums: [Int]) -> [Int] {
        var result: [Int] = []
        var prefixSet: Dictionary<Int, Int> = [:]
        var suffixSet: Dictionary<Int, Int> = [:]
        
        for num in nums {
            suffixSet.updateValue((suffixSet[num] ?? 0) + 1, forKey: num)
        }
        
        for num in nums {
            suffixSet.updateValue((suffixSet[num] ?? 0) - 1, forKey: num)
            if let val = suffixSet[num] {
                if val == 0 {
                    suffixSet.removeValue(forKey: num)
                }
            }
            prefixSet.updateValue((prefixSet[num] ?? 0) + 1, forKey: num)
            let r = prefixSet.count - suffixSet.count
            result.append(r)
        }
        
        return result
    }
}
