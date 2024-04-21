class Solution {
    func canBeEqual(_ target: [Int], _ arr: [Int]) -> Bool {
        var mapTarget: Dictionary<Int, Int> = [:]
        var mapArr: Dictionary<Int, Int> = [:]
        
        var i = 0
        var j = 0
        while i < target.count || j < arr.count {
            if i < target.count {
                let element = target[i]
                let curr = mapTarget[element]
                mapTarget[element] = (curr ?? 0) + 1
                i += 1
            }
            if j < arr.count {
                let element = arr[j]
                let curr = mapArr[element]
                mapArr[element] = (curr ?? 0) + 1
                j += 1
            }
        }
        
        return mapTarget == mapArr
    }
}
