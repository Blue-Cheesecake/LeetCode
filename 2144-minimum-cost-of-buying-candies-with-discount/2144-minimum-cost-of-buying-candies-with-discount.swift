class Solution {
	func minimumCost(_ cost: [Int]) -> Int {
		if cost.isEmpty {
			return 0
		}
		if cost.count == 1{
			return cost[0]
		}
		
		let sorted_cost: [Int] = cost.sorted()
		var i: Int = sorted_cost.count - 2
		var j: Int = sorted_cost.count - 1
		var result: Int = 0
		
		while j >= 0 {
			
			if i >= 0 {
				result += sorted_cost[i] + sorted_cost[j]
			} else {
				result += sorted_cost[j]
			}
			
	
			i -= 3
			j -= 3
		}
		
		return result
	}
}
