public class Solution
{
  private static Dictionary<T, int> FindFrequency<T>(IList<T> list) where T : notnull
  {
    var result = new Dictionary<T, int>();
    foreach (var item in list)
    {
      result[item] = result.GetValueOrDefault(item, 0) + 1;
    }
    return result;
  }

  public int[] FrequencySort(int[] nums)
  {
    var freqs = FindFrequency(nums).ToArray();
    var sorted = freqs.OrderBy(a => a.Value).ThenByDescending(a => a.Key);
    var result = new int[nums.Length];
    int j = 0;
    for (int i = 0; i < sorted.Count(); i++)
    {
      var pair = sorted.ElementAt(i);
      for (int k = 0; k < pair.Value; k++)
      {
        result[j] = pair.Key;
        j++;
      }
    }
    return result;
  }
}