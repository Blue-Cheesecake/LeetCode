class Solution {

    String licenseKeyFormatting(String s, int k) {
        StringBuilder result = new StringBuilder();

        for (int i = s.length() - 1; i >= 0; i--) {
            Character c = s.charAt(i);
            if (c == '-') continue;
            if (Character.isDigit(c)) result.insert(0, c);
            else result.insert(0, Character.toUpperCase(c));
        }

        for (int i = result.length() - k; i >= 0; i -= k) {
            if (i == 0) continue;
            result.insert(i, "-");
        }

        return result.toString();
    }
}