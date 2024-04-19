class Solution {
    
    private func reverseNumber(_ num: Int) -> Int {
        return Int(String(String(num).reversed()))!
    }
    
    func countDistinctIntegers(_ nums: [Int]) -> Int {
        var set: Set<Int> = []
        
        nums.forEach { num in
            set.insert(num)
            set.insert(reverseNumber(num))
        }
        
        return set.count
    }
}
