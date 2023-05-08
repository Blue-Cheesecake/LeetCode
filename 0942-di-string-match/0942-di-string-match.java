class Solution {
    public int[] diStringMatch(String s) {
        int[] result = new int[s.length() + 1];
        int low = 0;
        int high = s.length();

        int i = 0;
        while (i < s.length()) {
            char a = s.charAt(i);

            if (a == 'I') {
                result[i] = low;
                low += 1;
            }
            if (a == 'D') {
                result[i] = high;
                high -= 1;
            }

            i++;
        }

        result[s.length()] = low;
        return result;
    }
}
