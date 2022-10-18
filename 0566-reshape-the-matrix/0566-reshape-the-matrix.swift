class Solution {
	func matrixReshape(_ mat: [[Int]], _ r: Int, _ c: Int) -> [[Int]] {
		// check if it's legal
		let m = mat.count
		let n = mat[0].count
		if m * n != r * c {
			return mat
		}

		var result: [[Int]] = []
		var inner: [Int] = []

		for row in mat {
			for num in row {
				inner.append(num)
				if inner.count == c {
					result.append(inner)
					inner.removeAll()
				}
			}
		}

		return result
	}
}
