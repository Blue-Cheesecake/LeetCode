let MORSE_CODE: [String] = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

class Solution {
    func uniqueMorseRepresentations(_ words: [String]) -> Int {
        var unique_code: Set<String> = []
        
        let base: Character = "a"
        for word in words {
            var morseCode = ""
            
            for c in word {
                let index = c.asciiValue! - base.asciiValue!
                let mc = MORSE_CODE[Int(index)]
                morseCode.append(mc)
            }
            
            unique_code.insert(morseCode)
        }
        
        return unique_code.count
    }
}

