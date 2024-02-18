class Solution {
    
    private func findFreqsWord(str: String) -> Dictionary<Character, Int> {
        var result: Dictionary<Character, Int> = [:]
        
        for char in str {
            let freq = result[char]
            if let freq {
                result[char] = freq + 1
                continue
            }
            result[char] = 1
        }
        
        return result
    }
    
    func groupAnagrams(_ strs: [String]) -> [[String]] {
        var result: [[String]] = []
        var freqMapIndex: Dictionary<Dictionary<Character, Int>, Int> = [:]
        
        for string in strs {
            let freqs = findFreqsWord(str: string)
            let resultIndex = freqMapIndex[freqs]
            
            if let resultIndex {
                var array = result[resultIndex]
                array.append(string)
                result[resultIndex] =  array
                continue
            }
            
            result.append([string])
            freqMapIndex[freqs] = result.count - 1
        }
        
        return result
    }
}
