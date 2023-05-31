class Solution {
    public int countWords(String[] words1, String[] words2) {
        AtomicInteger result = new AtomicInteger();
        Map<String, int[]> map = new HashMap<>();

        int i = 0;
        int j = 0;
        while (i < words1.length || j < words2.length) {
            if (i < words1.length) {
                if (!map.containsKey(words1[i])) {
                    int[] a = {1, 0};
                    map.put(words1[i], a);
                } else {
                    int[] a = map.get(words1[i]);
                    a[0] += 1;
                    map.replace(words1[i], a);
                }
            }
            if (j < words2.length) {
                if (!map.containsKey(words2[j])) {
                    int[] b = {0, 1};
                    map.put(words2[j], b);
                } else {
                    int[] b = map.get(words2[j]);
                    b[1] += 1;
                    map.replace(words2[j], b);
                }
            }

            i++;
            j++;
        }

        map.forEach((s, ints) -> {
            if (ints[0] == 1 && ints[1] == 1) {
                result.addAndGet(1);
            }
        });
        return result.get();
    }
}