class Solution {
    func percentageLetter(_ s: String, _ letter: Character) -> Int {
        var counterLetter = 0
        s.forEach({it in
            if it == letter {
                counterLetter += 1
            }
        })
        
        if counterLetter == 0 {
            return 0
        }
        
        let result = Double(counterLetter) / Double(s.count) * 100.0
        return Int(floor(result))
    }
}
