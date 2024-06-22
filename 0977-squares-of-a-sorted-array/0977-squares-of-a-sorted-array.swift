class Solution {
    func sortedSquares(_ nums: [Int]) -> [Int] {
        return nums.map { element in element * element } .sorted()
    }
}