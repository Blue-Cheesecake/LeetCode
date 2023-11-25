public class Solution
{
  public int CountConsistentStrings(string allowed, string[] words)
  {
    int result = 0;
    HashSet<char> set = new();

    foreach (char c in allowed)
    {
      set.Add(c);
    }

    foreach (string word in words)
    {
      bool isValid = true;

      foreach (char c in word)
      {
        if (!set.Contains(c))
        {
          isValid = false;
          break;
        }
      }

      if (isValid)
      {
        result++;
      }
    }

    return result;
  }
}