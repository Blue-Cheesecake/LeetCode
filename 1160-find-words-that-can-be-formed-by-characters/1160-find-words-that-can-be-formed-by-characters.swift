func getFrequency(_ word: String) -> Dictionary<Character, Int> {
    var result: Dictionary<Character, Int> = [:]
    
    for c in word {
        result[c] = (result[c] ?? 0) + 1
    }
    
    return result
}

func canForm(chars: Dictionary<Character, Int>, word: Dictionary<Character, Int>) -> Bool {
    var mutableChars = chars
    var isValid = true
    
    word.forEach({ key, value in
        if let vc = mutableChars[key] {
            if vc >= value {
                mutableChars[key] = vc - value
            } else {
                isValid = false
            }
        } else {
            isValid = false
        }
    })
    
    return isValid
}

class Solution {
    
    func countCharacters(_ words: [String], _ chars: String) -> Int {
        var result = 0
        let charsFreqs = getFrequency(chars)
        
        for word in words {
            let wordFreqs = getFrequency(word)
            
            if canForm(chars: charsFreqs, word: wordFreqs) {
                result += word.count
            }
        }
        
        return result
    }
    
}
