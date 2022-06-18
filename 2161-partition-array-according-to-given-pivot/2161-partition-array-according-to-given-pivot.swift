class Solution {
	func pivotArray(_ nums: [Int], _ pivot: Int) -> [Int] {
		var left: [Int] = []
		var mid: [Int] = []
		var right: [Int] = []
		var result: [Int] = []
		
		for num in nums {
			if num < pivot {
				left.append(num)
			}
			if num == pivot {
				mid.append(num)
			}
			if num > pivot {
				right.append(num)
			}
		}
		
		for num in left {
			result.append(num)
		}
		
		for num in mid {
			result.append(num)
		}
		
		for num in right {
			result.append(num)
		}
		
		return result
	}
}
