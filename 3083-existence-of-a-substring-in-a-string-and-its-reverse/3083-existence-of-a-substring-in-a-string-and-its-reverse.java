class Solution {
    static private String reverseString(String s) {
        StringBuilder result = new StringBuilder();

        for (int i = s.length() - 1; i >= 0; i--) {
            result.append(s.charAt(i));
        }

        return result.toString();
    }

    public boolean isSubstringPresent(String s) {
        final String reversed = Solution.reverseString(s);

        for (int i = 0; i < s.length() - 1; i++) {
            final String substring = s.substring(i, i + 2);
            if (reversed.contains(substring)) {
                return true;
            }
        }

        return false;
    }
}
