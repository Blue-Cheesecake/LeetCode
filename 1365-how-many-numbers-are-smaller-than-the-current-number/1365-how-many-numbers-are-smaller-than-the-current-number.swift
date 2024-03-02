class Solution {
    func smallerNumbersThanCurrent(_ nums: [Int]) -> [Int] {
        var freqs: Dictionary<Int, Int> = [:]
        
        for num in nums {
            freqs.updateValue((freqs[num] ?? 0) + 1, forKey: num)
        }
        
        var result: Array<Int> = []
        
        for i in 0 ..< nums.count {
            let num: Int = nums[i]
            var counting: Int = 0
            
            for k in freqs.keys {
                if k == num {
                    continue
                }
                if k < num {
                    counting += freqs[k]!
                }
            }
            
            result.append(counting)
        }
        
        return result
    }
}
