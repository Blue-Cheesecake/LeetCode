public class Solution
{

    public int MinimizedStringLength(string s)
    {
        HashSet<char> chars = new(s);
        return chars.Count;
    }
}