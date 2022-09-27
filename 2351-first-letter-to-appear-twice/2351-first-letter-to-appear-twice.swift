class Solution {
	func repeatedCharacter(_ s: String) -> Character {
		var set = Set<Character>()
		for c in s {
			if set.contains(c) {
				return c
			}
			set.insert(c)
		}
		return " "
	}
}
