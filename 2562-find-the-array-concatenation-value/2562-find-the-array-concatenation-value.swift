class Solution {
    
    private func concatArray(_ currArray: inout [Int], _ currValue: Int) -> Int {
        if currArray.isEmpty {
            return currValue
        }
        if currArray.count == 1 {
            return currValue + currArray.first!
        }
        let firstInt = currArray.remove(at: 0)
        let secondInt = currArray.remove(at: currArray.count - 1)
        let combined = Int(String(firstInt) + String(secondInt))! + currValue
        return concatArray(&currArray, combined)
    }
    
    func findTheArrayConcVal(_ nums: [Int]) -> Int {
        var copied = nums;
        return concatArray(&copied, 0)
    }
}
