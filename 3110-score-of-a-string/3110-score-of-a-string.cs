public class Solution
{
    public int ScoreOfString(string s)
    {
        int result = 0;

        for (int i = 0; i < s.Length - 1; i++)
        {
            int c = s[i];
            int n = s[i + 1];

            result += Math.Abs(c - n);
        }

        return result;
    }
}