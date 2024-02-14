class Solution {
    private func countOnes(_ str: String) -> Int {
        var result = 0
        for char in str {
            if char == "1" {
                result += 1
            }
        }
        return result
    }
    
    func numberOfBeams(_ bank: [String]) -> Int {
        if bank.count == 1 {
            return 0
        }
        
        var result = 0
        var index = 0
        
        while index < bank.count - 1 {
            let lasers = bank[index]
            let lOnes = countOnes(lasers)
            if lOnes > 0 {
                var fIndex = -1
                var fOnes = -1
                for i in stride(from: index + 1, to: bank.count, by: 1) {
                    let frontLasers = bank[i]
                    let rOnes = countOnes(frontLasers)
                    if rOnes > 0 {
                        fOnes = rOnes
                        fIndex = i
                        break
                    }
                }
                if fIndex != -1 {
                    result += lOnes * fOnes
                    index = fIndex
                    continue
                }
                
            }
            index += 1
        }
        return result
    }
}
