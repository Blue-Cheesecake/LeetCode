class Solution {
	func floodFill(_ image: [[Int]], _ sr: Int, _ sc: Int, _ color: Int, _ prev: Int = -1) -> [[Int]] {
		var copied: [[Int]] = image
		let replace_this: Int = prev == -1 ? copied[sr][sc] : prev
		if sr >= 0, sc < image[sr].count, copied[sr][sc] != color, copied[sr][sc] == replace_this {
			copied[sr][sc] = color
		} else {
			return image
		}
		// up
		if sr - 1 >= 0 {
			copied = self.floodFill(copied, sr - 1, sc, color, replace_this)
		}
		// down
		if sr + 1 < image.count {
			copied = self.floodFill(copied, sr + 1, sc, color, replace_this)
		}
		// left
		if sc - 1 >= 0 {
			copied = self.floodFill(copied, sr, sc - 1, color, replace_this)
		}
		// right
		if sc + 1 < image[sr].count {
			copied = self.floodFill(copied, sr, sc + 1, color, replace_this)
		}

		return copied
	}
}
