public class Solution
{
  public string SortSentence(string s)
  {
    string[] spl = s.Split(" ");
    Dictionary<int, string> map = new();

    foreach (string wordAll in spl)
    {
      int sequence = Convert.ToInt32(wordAll.Substring(wordAll.Length - 1));
      map.Add(sequence, wordAll.Substring(0, wordAll.Length - 1));
    }

    // System.Console.WriteLine(map);

    StringBuilder result = new();
    for (int i = 1; i < 10; i++)
    {
      result.Append(map.GetValueOrDefault(i));
      if (i != 9)
      {
        result.Append(" ");
      }
    }
    return result.ToString().TrimEnd();
  }
}