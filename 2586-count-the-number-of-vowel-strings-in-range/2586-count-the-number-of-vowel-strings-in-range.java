class Solution {

    private boolean isVowelString(String s) {
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        char left = s.charAt(0);
        char right = s.charAt(s.length() - 1);
        return vowels.contains(left) && vowels.contains(right);
    }

    public int vowelStrings(String[] words, int left, int right) {
        int result = 0;
        for (int i = left; i <= right; i++) {
            String s = words[i];
            if (isVowelString(s)) result++;
        }
        return result;
    }
}
