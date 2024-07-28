public class Solution
{
    public string FinalString(string s)
    {
        string result = "";

        foreach (var c in s)
        {
            if (c != 'i')
            {
                result += c;
                continue;
            }

            result = new string(result.Reverse().ToArray());
        }

        return result;
    }
}