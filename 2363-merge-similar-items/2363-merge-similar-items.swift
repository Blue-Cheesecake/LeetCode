class Solution {
	func mergeSimilarItems(_ items1: [[Int]], _ items2: [[Int]]) -> [[Int]] {
		let n = items1.count
		var items1 = items1

		for item2 in items2 {
			var found = false
			for i in 0 ..< n {
				let item1 = items1[i]
				if item1[0] == item2[0] {
					found = true
					items1[i] = [item1[0], item1[1] + item2[1]]
				}

			}

			if !found {
				items1.append(item2)
			}
		}

		items1.sort { a, b in
			a[0] < b[0]
		}

		return items1
	}
}
