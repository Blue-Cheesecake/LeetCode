class Solution {
    
    func findThePrefixCommonArray(_ A: [Int], _ B: [Int]) -> [Int] {
        var result: [Int] = []
        
        for i in 0 ..< A.count {
            var counting = 0
            
            var freqs: [Int: Int] = [:]
            for j in 0 ... i {
                let e1 = A[j]
                let e2 = B[j]
                
                if let freq = freqs[e1] {
                    freqs[e1] = freq + 1
                } else {
                    freqs[e1] = 1
                }
                
                if let freq = freqs[e2] {
                    freqs[e2] = freq + 1
                } else {
                    freqs[e2] = 1
                }

            }
            
            freqs.forEach({ (key: Int, value: Int) in
                if value == 2 {
                    counting += 1
                }
            })
            
            result.append(counting)
        }
        
        return result
    }
}
