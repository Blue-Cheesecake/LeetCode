class Solution {
	public int mostFrequentEven(int[] nums) {
		int result = -1;
		int mostFreqSoFar = 0;
		HashMap<Integer, Integer> evenFreq = new HashMap<Integer, Integer>();

		for (int num : nums) {
			if (num % 2 == 1)
				continue;

			if (!evenFreq.containsKey(num)) {
				evenFreq.put(num, 1);
			} else {
				evenFreq.put(num, evenFreq.get(num) + 1);
			}

			int currFreq = evenFreq.get(num);
			if (currFreq > mostFreqSoFar || (currFreq == mostFreqSoFar && num < result)) {
				result = num;
				mostFreqSoFar = currFreq;
			}

		}

		return result;
	}
}
