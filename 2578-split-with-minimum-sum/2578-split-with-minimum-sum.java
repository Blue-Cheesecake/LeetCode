class Solution {
    public int splitNum(int num) {
        String numStr = String.valueOf(num);
        Character[] chars = new Character[numStr.length()];
        for (int i = 0; i < numStr.length(); i++) {
            chars[i] = numStr.charAt(i);
        }
        ArrayList<Integer> listNumber = new java.util.ArrayList<>(Arrays.stream(chars).map(c -> {
            return Integer.parseInt(String.valueOf(c));
        }).toList());

        listNumber.sort(Comparator.comparingInt(a -> a));

        String num1 = "";
        String num2 = "";

        for (int i = 0; i < listNumber.size(); i++) {
            if (i % 2 == 0) {
                num1 += String.valueOf(listNumber.get(i));
                continue;
            }
            num2 += String.valueOf(listNumber.get(i));
        }

        return Integer.parseInt(num1) + Integer.parseInt(num2);
    }
}
