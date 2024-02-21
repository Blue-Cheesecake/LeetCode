class Solution {
    func maxFrequencyElements(_ nums: [Int]) -> Int {
        var freq: Dictionary<Int, Int> = [:]
        var maxFreq = 0
        var counter = 0
        
        for num in nums {
            let curr = freq[num]
            let added = curr == nil ? 1 : curr! + 1
            freq.updateValue(added, forKey: num)
            
            maxFreq = max(maxFreq, added)
        }
        
        for f in freq.values {
            if f == maxFreq {
                counter += 1
            }
        }
        
        return counter * maxFreq
    }
}
