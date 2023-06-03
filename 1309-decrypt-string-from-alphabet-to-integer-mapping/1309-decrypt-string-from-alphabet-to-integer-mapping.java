class Solution {

    private char castIntToChar(int i) {
        int base = 'a';
        int pos = base + i - 1;
        char casted = (char) pos;
        // System.out.println("Num: " + i);
        // System.out.println("Cas: " + casted);
        return casted;
    }

    public String freqAlphabets(String s) {
        if (s.length() == 0) {
            return "";
        }
        if (s.length() == 1) {
            return String.valueOf(castIntToChar(Integer.parseInt(String.valueOf(s.charAt(0)))));
        }
        if (s.length() == 2) {
            return castIntToChar(Integer.parseInt(String.valueOf(s.charAt(0)))) + freqAlphabets(s.substring(1));
        }

        if (s.charAt(2) == '#') {
            return castIntToChar(Integer.parseInt(s.substring(0, 2))) + freqAlphabets(s.substring(3));
        }
        return castIntToChar(Integer.parseInt(String.valueOf(s.charAt(0)))) + freqAlphabets(s.substring(1));
    }
}