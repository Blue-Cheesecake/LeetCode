struct Pair {
    let isExistFirst: Bool
    let isExistSecond: Bool
}

class Solution {
    func intersection(_ nums1: [Int], _ nums2: [Int]) -> [Int] {
        var map: Dictionary<Int, Pair> = [:]
        var i = 0
        var j = 0
        
        while i < nums1.count || j < nums2.count {
            if i < nums1.count {
                let num = nums1[i]
                i += 1
                
                if let pair = map[num] {
                    map.updateValue(
                        Pair(
                            isExistFirst: true,
                            isExistSecond: pair.isExistSecond
                        ),
                        forKey: num
                    )
                } else {
                    map[num] = Pair(isExistFirst: true, isExistSecond: false)
                }
            }
            if j < nums2.count {
                let num = nums2[j]
                j += 1
                
                if let pair = map[num] {
                    map.updateValue(
                        Pair(
                            isExistFirst: pair.isExistFirst,
                            isExistSecond: true
                        ),
                        forKey: num
                    )
                } else {
                    map[num] = Pair(isExistFirst: false, isExistSecond: true)
                }
            }
        }
        
        var result: [Int] = []
        map.forEach({ it in
            if it.value.isExistFirst && it.value.isExistSecond {
                result.append(it.key)
            }
        })
        return result
    }
}
