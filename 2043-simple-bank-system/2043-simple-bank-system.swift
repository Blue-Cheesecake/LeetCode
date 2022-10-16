class Bank {
	private var balance: [Int]

	init(_ balance: [Int]) {
		self.balance = balance
	}

	func transfer(_ account1: Int, _ account2: Int, _ money: Int) -> Bool {
		if account2 <= balance.count && withdraw(account1, money) {
			return deposit(account2, money)
		}
		return false
	}

	func deposit(_ account: Int, _ money: Int) -> Bool {
		if account > balance.count {
			return false
		}
		balance[account - 1] += money
		return true
	}

	func withdraw(_ account: Int, _ money: Int) -> Bool {
		if account > balance.count {
			return false
		}
        if balance[account - 1] < money {
            return false
        }
		balance[account - 1] -= money
		return true
	}
}
