class Solution {
    func findMissingAndRepeatedValues(_ grid: [[Int]]) -> [Int] {
        var result = [-1, -1]
        var set: Set<Int> = []
        
        for arr in grid {
            for num in arr {
                if set.contains(num) {
                    result[0] = num
                } else {
                    set.insert(num)
                }
            }
        }
        
        let maxLength = grid.count * grid.count
        
        for i in 1...maxLength {
            if !set.contains(i) {
                result[1] = i
            }
        }
        
        return result
    }
}
