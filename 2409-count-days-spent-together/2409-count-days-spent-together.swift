extension String {
	func substring(from start: Int, to end: Int) -> String {
		let startIndex = self.index(self.startIndex, offsetBy: start)
		let endIndex = self.index(self.startIndex, offsetBy: end)
		return String(self[startIndex ..< endIndex])
	}
}

class Solution {
	func countDaysTogether(_ arriveAlice: String, _ leaveAlice: String, _ arriveBob: String, _ leaveBob: String) -> Int {
		let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

		// max arrive - min leave
		let arriveAliceMonth = Int(arriveAlice.substring(from: 0, to: 2))!
		let arriveBobMonth = Int(arriveBob.substring(from: 0, to: 2))!
		let leaveAliceMonth = Int(leaveAlice.substring(from: 0, to: 2))!
		let leaveBobMonth = Int(leaveBob.substring(from: 0, to: 2))!

		let arriveAliceDay = Int(arriveAlice.substring(from: 3, to: 5))!
		let arriveBobDay = Int(arriveBob.substring(from: 3, to: 5))!
		let leaveAliceDay = Int(leaveAlice.substring(from: 3, to: 5))!
		let leaveBobDay = Int(leaveBob.substring(from: 3, to: 5))!

		var maxArriveMonth = -1
		var maxArriveDay = -1

		if arriveAliceMonth > arriveBobMonth {
			maxArriveMonth = arriveAliceMonth
			maxArriveDay = arriveAliceDay
		} else if arriveBobMonth > arriveAliceMonth {
			maxArriveMonth = arriveBobMonth
			maxArriveDay = arriveBobDay
		} else {
			maxArriveMonth = arriveAliceMonth
			maxArriveDay = max(arriveAliceDay, arriveBobDay)
		}

		var minLeaveMonth = -1
		var minLeaveDay = -1

		if leaveAliceMonth < leaveBobMonth {
			minLeaveMonth = leaveAliceMonth
			minLeaveDay = leaveAliceDay
		} else if leaveAliceMonth > leaveBobMonth {
			minLeaveMonth = leaveBobMonth
			minLeaveDay = leaveBobDay
		} else {
			minLeaveMonth = leaveAliceMonth
			minLeaveDay = min(leaveAliceDay, leaveBobDay)
		}

		//print("\(maxArriveMonth):\(maxArriveDay)")
		//print("\(minLeaveMonth):\(minLeaveDay)")

		if maxArriveMonth == minLeaveMonth {
			return minLeaveDay - maxArriveDay + 1 < 0 ? 0 : minLeaveDay - maxArriveDay + 1
		} else if maxArriveMonth < minLeaveMonth {
			var c = 0
			for i in maxArriveMonth + 1 ..< minLeaveMonth {
				c += months[i - 1]
			}
			return (months[maxArriveMonth - 1] - maxArriveDay + 1) + c + minLeaveDay
		}
		return 0
	}
}
