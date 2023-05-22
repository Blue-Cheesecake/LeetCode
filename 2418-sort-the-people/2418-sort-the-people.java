class Pair implements Comparable<Pair> {
    String word;
    Integer number;

    public Pair(String _word, Integer _number) {
        this.word = _word;
        this.number = _number;
    }


    @Override
    public int compareTo(Pair o) {
        return number.compareTo(o.number);
    }
}

class Solution {
    public String[] sortPeople(String[] names, int[] heights) {
        List<Pair> pairs = new ArrayList<>();
        for (int i = 0; i < names.length; i++) {
            pairs.add(new Pair(names[i], heights[i]));
        }
        pairs.sort(Comparator.reverseOrder());
        String[] result = new String[pairs.size()];
        for (int i = 0; i < pairs.size(); i++) {
            result[i] = pairs.get(i).word;
        }
        return result;
    }
}