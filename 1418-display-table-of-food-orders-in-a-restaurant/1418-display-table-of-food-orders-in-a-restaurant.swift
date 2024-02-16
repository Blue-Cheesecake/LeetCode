class Solution {
    func displayTable(_ orders: [[String]]) -> [[String]] {
        var map: Dictionary<String, Dictionary<String, Int>> = [:] // tableNumber -> (foodItem -> frequency)
        var foodItems: Set<String> = []
        
        for order in orders {
            let tableNumber = order[1]
            let foodItem = order[2]
            foodItems.insert(foodItem)
            
            if var freqs = map[tableNumber] {
                if let freq = freqs[foodItem] {
                    freqs[foodItem] = freq + 1
                } else {
                    freqs[foodItem] = 1
                }
                map[tableNumber] = freqs
                continue
            }
            
            map[tableNumber] = [foodItem:1]
        }
        
        let sortedTableNumbers: Array<(key: String, value: Dictionary<String, Int>)> = map.sorted(by: {
            pair1, pair2 in
            Int(pair1.key)! < Int(pair2.key)!
        })
        let sortedFoodItems: Array<String> = foodItems.sorted(by: {
            lhs, rhs in
            lhs < rhs
        })
        
//        print(sortedTableNumbers)
//        print(sortedFoodItems)
        
        var result: Array<Array<String>> = []
        var firstRow: Array<String> = ["Table"]
        
        for item in sortedFoodItems {
            firstRow.append(item)
        }
        
        result.append(firstRow)
        
        for pair in sortedTableNumbers {
            var row: Array<String> = [pair.key]
            let foodItemFreqs = pair.value
            for foodItem in sortedFoodItems {
                if let freq = foodItemFreqs[foodItem] {
                    row.append(String(freq))
                    continue
                }
                row.append("0")
            }
            result.append(row)
        }
        
        return result
    }
}
