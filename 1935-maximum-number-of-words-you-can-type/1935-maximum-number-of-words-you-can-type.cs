public class Solution
{
  public int CanBeTypedWords(string text, string brokenLetters)
  {
    int result = 0;
    var charsSet = new HashSet<char>();
    foreach (char c in brokenLetters)
    {
      charsSet.Add(c);
    }
    var spl = text.Split(" ");
    foreach (string word in spl)
    {
      var isValid = true;
      foreach (char c in word)
      {
        if (brokenLetters.Contains(c))
        {
          isValid = false;
          break;
        }
      }
      if (isValid) result++;
    }
    return result;
  }
}