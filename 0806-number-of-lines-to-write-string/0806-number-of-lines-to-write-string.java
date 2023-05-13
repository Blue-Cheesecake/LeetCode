class Solution {

    public int[] numberOfLines(int[] widths, String s) {
        int totalLine = 0;
        int widthCurrentLine = 0;

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            int index = (int) c - (int) 'a';
            int requiredWidth = widths[index];

            if (widthCurrentLine + requiredWidth > 100) {
                widthCurrentLine = requiredWidth;
                totalLine += 1;
            } else {
                widthCurrentLine += requiredWidth;
            }
        }

        return new int[]{totalLine + 1, widthCurrentLine};
    }
}
