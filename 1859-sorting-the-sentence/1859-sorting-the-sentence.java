class Solution {
    public String sortSentence(String s) {
        final String[] spl = s.split(" ");

        final List<String> sorted = Arrays.stream(spl).sorted((a, b) -> {
            final Integer orderA = Integer.parseInt(String.valueOf(a.charAt(a.length() - 1)));
            final Integer orderB = Integer.parseInt(String.valueOf(b.charAt(b.length() - 1)));

            return orderA - orderB;
        }).toList();


        final StringBuilder result = new StringBuilder();

        for (String str : sorted) {
            final String word = str.substring(0, str.length() - 1);
            result.append(word + " ");
        }

        return result.substring(0, result.toString().length() - 1);
    }
}
