public class Solution
{

  private int CountChars(string s, char c)
  {
    int result = 0;
    foreach (char item in s)
    {
      if (item == c)
      {
        result++;
      }
    }

    return result;
  }

  public int CountAsterisks(string s)
  {
    int result = 0;
    var spl = s.Split("|");
    int i = 0;
    while (i < spl.Length)
    {
      string word = spl[i];
      result += CountChars(word, '*');

      i += 2;
    }
    return result;
  }
}
