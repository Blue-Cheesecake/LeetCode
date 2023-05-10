class Solution {

    private static <T> void add(Map<T, Integer> m, T x) {
        if (m.containsKey(x)) m.put(x, m.get(x) + 1);
        else m.put(x, 1);
    }

    private static <T> void rem(Map<T, Integer> m, T x) {
        if (m.containsKey(x)) {
            int f = m.get(x);
            if (f == 1) m.remove(x);
            else m.replace(x, f - 1);
        }
    }

    public int[] distinctDifferenceArray(int[] nums) {
        int[] result = new int[nums.length];
        Map<Integer, Integer> prefix = new HashMap<>();
        Map<Integer, Integer> suffix = new HashMap<>();

        for (int num : nums) {
            add(suffix, num);
        }

        for (int i = 0; i < nums.length; i++) {
            add(prefix, nums[i]);
            rem(suffix, nums[i]);

            int diff = prefix.size() - suffix.size();
            result[i] = diff;
        }


        return result;
    }
}
