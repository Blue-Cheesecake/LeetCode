public class Solution
{
  public int FindLucky(int[] arr)
  {
    Dictionary<int, int> freq = new();
    foreach (int num in arr)
    {
      freq[num] = freq.GetValueOrDefault(num, 0) + 1;
    }

    int result = -1;
    foreach (KeyValuePair<int, int> pair in freq)
    {
      if (pair.Key == pair.Value)
      {
        result = Math.Max(result, pair.Key);
      }
    }
    return result;
  }
}