class Solution {
    func singleNumber(_ nums: [Int]) -> Int {
        var set: Set<Int> = []
        for num in nums {
            if set.contains(num) {
                set.remove(num)
                continue
            }
            set.insert(num)
        }
        return set.first!
    }
}
