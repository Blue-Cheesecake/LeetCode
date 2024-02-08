class Solution {
    
    func truncateSentence(_ s: String, _ k: Int) -> String {
        let spl = s.split(separator: " ")
        var result = ""
        for i in 0..<k {
            result += spl[i]
            if i != k - 1 {
                result += " "
            }
        }
        return result
    }
}
