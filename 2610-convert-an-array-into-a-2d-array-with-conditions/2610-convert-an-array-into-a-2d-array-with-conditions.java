class Solution {

    public List<List<Integer>> findMatrix(int[] nums) {
        List<Set<Integer>> s = new ArrayList<>();

        for (int num : nums) {
            boolean isAdded = false;
            for (Set<Integer> sub : s) {
                if (!sub.contains(num)) {
                    sub.add(num);
                    isAdded = true;
                    break;
                }
            }

            if (!isAdded) {
                Set<Integer> set = new HashSet<>();
                set.add(num);
                s.add(set);
            }
        }

        List<List<Integer>> result = new ArrayList<>();
        for (Set<Integer> set : s) {
            result.add(set.stream().toList());
        }
        return result;
    }
}
