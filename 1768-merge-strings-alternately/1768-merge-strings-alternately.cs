public class Solution
{
  public string MergeAlternately(string word1, string word2)
  {
    var result = new StringBuilder();
    int i = 0;
    int j = 0;
    while (i < word1.Length || j < word2.Length)
    {
      if (i < word1.Length)
      {
        result.Append(word1[i]);
        i++;
      }
      if (j < word2.Length)
      {
        result.Append(word2[j]);
        j++;
      }
    }

    return result.ToString();
  }
}