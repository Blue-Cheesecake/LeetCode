class Solution {
    public int countKeyChanges(String s) {
        int result = 0;

        for (int i = 1; i < s.length(); i++) {
            final char prev = s.charAt(i - 1);
            final char curr = s.charAt(i);
            final String prevS = Character.toString(prev).toLowerCase();
            final String prevC = Character.toString(curr).toLowerCase();

            if (!prevS.equals(prevC)) {
                result += 1;
            }
        }

        return result;
    }
}
