public class Solution
{
  public bool CloseStrings(string word1, string word2)
  {
    if (word1.Length != word2.Length)
    {
      return false;
    }

    var f1 = new int[26];
    var f2 = new int[26];

    for (var i = 0; i < word1.Length; i++)
    {
      f1[Convert.ToChar(word1[i]) - 'a'] += 1;
      f2[Convert.ToChar(word2[i]) - 'a'] += 1;
    }

    for (var i = 0; i < f1.Length; i++)
    {
      if (f1[i] == 0 && f2[i] != 0)
      {
        return false;
      }
    }

    var map = new Dictionary<int, int>();
    for (var i = 0; i < f1.Length; i++)
    {
      map[f1[i]] = map.GetValueOrDefault(f1[i], 0) + 1;
      map[f2[i]] = map.GetValueOrDefault(f2[i], 0) - 1;
    }

    foreach (var item in map.Values)
    {
      if (item != 0)
      {
        return false;
      }
    }
    return true;
  }
}