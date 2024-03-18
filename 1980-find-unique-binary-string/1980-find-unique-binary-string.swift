class Solution {
    private func addOneBinary(bin: String) -> String {
        var characters = Array(bin)
         var index = characters.count - 1
         var carry = true
         
         while index >= 0 && carry {
             if characters[index] == "1" {
                 characters[index] = "0"
                 carry = true
             } else {
                 characters[index] = "1"
                 carry = false
             }
             index -= 1
         }
         
         if carry {
             characters.insert("1", at: 0)
         }
         
         return String(characters)
    }
    
    
    func findDifferentBinaryString(_ nums: [String]) -> String {
        var currBin = ""
        for _ in 0 ..< nums.count {
            currBin += "0"
        }
        
        while nums.contains(where: {val in currBin == val}) {
            let nextBin = addOneBinary(bin: currBin)
            currBin = nextBin
        }
        
        return currBin
    }
}
