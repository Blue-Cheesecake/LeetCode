class Solution {
	
	func isPerfectSquare(_ num: Int) -> Bool {
		var l =  1
		var r = num
		
		while l <= r {
			let mid = (l + r) / 2
			if Double(mid) == Double(num) / Double(mid) {
				return true
			}
			if mid * mid > num {
				r = mid - 1
			} else {
				l = mid + 1
			}
			
		}
		return false
	}
}