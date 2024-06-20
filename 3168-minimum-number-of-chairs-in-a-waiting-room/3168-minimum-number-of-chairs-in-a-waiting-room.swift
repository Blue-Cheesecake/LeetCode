class Solution {
    func minimumChairs(_ s: String) -> Int {
        var largestChair = 0
        var curr = 0
        
        for char in s {
            if char == "E" {
                curr += 1
                
                if curr > largestChair {
                    largestChair = curr
                }
            } else {
                curr -= 1
            }
        }
        
        return largestChair
    }
}
