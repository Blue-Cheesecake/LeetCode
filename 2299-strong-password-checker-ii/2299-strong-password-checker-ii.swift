class Solution {
	func strongPasswordCheckerII(_ password: String) -> Bool {
		if password.count < 8 {
			return false
		}

		var haveLower = false
		var haveUpper = false
		var haveDigit = false
		var haveSpecial = false

		for i in 0 ..< password.count {
			var c: Character = password[password.index(password.startIndex, offsetBy: i)]
			if c.isLowercase {
				haveLower = true
			}
			else if c.isUppercase {
				haveUpper = true
			}
			else if c.isNumber {
				haveDigit = true
			}
			else {
				haveSpecial = true
			}

			if i + 1 < password.count {
				var d = password[password.index(password.startIndex, offsetBy: i + 1)]
				if c == d {
					return false
				}
			}
		}

		return haveDigit && haveUpper && haveLower && haveSpecial
	}
}
