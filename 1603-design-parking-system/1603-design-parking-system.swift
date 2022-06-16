
class ParkingSystem {
	var s: Int = 0
	var m: Int = 0
	var b: Int = 0
	var curr_s: Int = 0
	var curr_m: Int = 0
	var curr_b: Int = 0

	init(_ big: Int, _ medium: Int, _ small: Int) {
		self.s = small
		self.m = medium
		self.b = big
	}

	func addCar(_ carType: Int) -> Bool {
		// print("Type: \(carType)")
		// print("Big   : \(self.b), Current \(self.curr_b)")
		// print("Medium: \(self.m), Current \(self.curr_m)")
		// print("Small : \(self.s), Current \(self.curr_s)\n")
		if carType == 3, self.curr_s + 1 <= self.s {
			self.curr_s += 1
			return true
		}
		if carType == 2, self.curr_m + 1 <= self.m {
			self.curr_m += 1
			return true
		}
		if carType == 1, self.curr_b + 1 <= self.b {
			self.curr_b += 1
			return true
		}
		return false
	}
}
