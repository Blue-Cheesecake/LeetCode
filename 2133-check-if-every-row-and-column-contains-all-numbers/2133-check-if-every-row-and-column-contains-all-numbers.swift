class Solution {
	func checkValid(_ matrix: [[Int]]) -> Bool {
		var rows: [Set<Int>] = []
		var cols: [Set<Int>] = []
		for _ in 0 ..< matrix.count { rows.append(Set()); cols.append(Set()) }

		for i in 0 ..< matrix.count {
			for j in 0 ..< matrix.count {
				rows[i].insert(matrix[i][j])
				cols[j].insert(matrix[i][j])
			}
		}

		let n = rows.count
		for i in 0 ..< n {
			if rows[i].count != n || cols[i].count != n { return false }
		}
		return true
	}
}
