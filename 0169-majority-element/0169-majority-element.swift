class Solution {
    func majorityElement(_ nums: [Int]) -> Int {
        var map: Dictionary<Int, Int> = [:]
        var result = 0
        nums.forEach({ (it: Int) in
            if let freq = map[it] {
                map[it] = freq + 1
            } else {
                map[it] = 1
            }
            
            let freq = map[it]!
            if freq > nums.count / 2 {
                result = it
            }
        })
        
        return result
    }
}
