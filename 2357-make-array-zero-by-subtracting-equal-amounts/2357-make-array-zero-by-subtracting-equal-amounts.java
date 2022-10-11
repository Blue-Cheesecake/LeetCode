class Solution {
	public int minimumOperations(int[] nums) {

		// find min
		// minus all with min
		// if all is 0 -> break -> return

		int result = 0;
		boolean isAllZero = true;

		do {
			isAllZero = true;
			int min = Integer.MAX_VALUE - 1;

			for (int num : nums) {
				if (num != 0)
					isAllZero = false;
				if (num < min && num != 0)
					min = num;
			}

			if (!isAllZero) {
				result++;
				for (int i = 0; i < nums.length; i++) {
					if (nums[i] == 0)
						continue;
					nums[i] -= min;
				}
			}

		} while (!isAllZero);

		return result;
	}
}
