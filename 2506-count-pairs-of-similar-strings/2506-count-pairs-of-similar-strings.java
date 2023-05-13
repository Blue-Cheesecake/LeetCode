class Solution {

    private Set<Character> castToSet(String s) {
        Set<Character> set = new HashSet<>();
        for (int i = 0; i < s.length(); i++) {
            set.add(s.charAt(i));
        }
        return set;
    }

    public int similarPairs(String[] words) {
        int result = 0;

        Map<Set<Character>, Integer> freqs = new HashMap<>();
        for (String word : words) {
            Set<Character> set = castToSet(word);
            if (freqs.containsKey(set)) {
                freqs.replace(set, freqs.get(set) + 1);
            } else {
                freqs.put(set, 1);
            }
        }

        for (Integer freq : freqs.values()) {
            if (freq == 1) {
                continue;
            }
            result += freq * (freq - 1) / 2;
        }

        return result;
    }
}
