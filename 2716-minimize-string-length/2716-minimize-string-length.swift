class Solution {
    func minimizedStringLength(_ s: String) -> Int {
        var set: Set<Character> = []
        
        s.forEach({ it in
            set.insert(it)
        })
        
        return set.count
    }
}
