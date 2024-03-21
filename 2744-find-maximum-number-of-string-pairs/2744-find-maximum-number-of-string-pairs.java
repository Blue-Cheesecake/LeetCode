class Solution {

    private String reverseString(String str) {
        StringBuilder result = new StringBuilder();
        for (int i = str.length() - 1; i >= 0; i--) result.append(str.charAt(i));
        return result.toString();
    }

    public int maximumNumberOfStringPairs(String[] words) {
        int result = 0;

        for (int i = 0; i < words.length - 1; i++) {
            final String word1 = words[i];
            for (int j = i + 1; j < words.length; j++) {
                final String word2 = words[j];
                final String reversedWord2 = reverseString(word2);

                if (word1.equals(reversedWord2)) {
                    result += 1;
                }
            }
        }

        return result;
    }
}
