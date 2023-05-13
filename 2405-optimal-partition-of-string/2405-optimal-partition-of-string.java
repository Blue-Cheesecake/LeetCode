class Solution {
    public int partitionString(String s) {
        List<String> array = new ArrayList<>();
        StringBuilder curr = new StringBuilder();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            String cs = Character.toString(c);
            if (curr.toString().contains(cs)) {
                array.add(curr.toString());
                curr = new StringBuilder(cs);
            } else {
                curr.append(cs);
            }

        }

        if (!curr.isEmpty()) {
            array.add(curr.toString());
        }

        return array.size();
    }
}