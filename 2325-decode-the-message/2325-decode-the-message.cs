public class Solution
{
  public string DecodeMessage(string key, string message)
  {
    var map = new Dictionary<char, char>();
    int counter = 97;
    foreach (char k in key)
    {
      if (map.ContainsKey(k) || k == ' ')
      {
        continue;
      }
      map.Add(k, Convert.ToChar(counter));
      counter++;
    }

    var result = new StringBuilder();
    foreach (char c in message)
    {
      result.Append(map.GetValueOrDefault(c, ' '));
    }
    return result.ToString();
  }
}