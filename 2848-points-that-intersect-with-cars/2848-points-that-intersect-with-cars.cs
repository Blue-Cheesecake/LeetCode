public class Solution
{
  public int NumberOfPoints(IList<IList<int>> nums)
  {
    int result = 0;
    var sorted = nums.OrderBy(element => element[0]).ToList();
    int maxPrev = -1;

    for (int i = 0; i < sorted.Count; i++)
    {
      var start = Math.Max(sorted[i][0], maxPrev);
      var end = sorted[i][1];
      var val = end - start;
      if (val > 0)
      {
        result += val;
      }
      if (start != maxPrev)
      {
        result++;
      }
      maxPrev = Math.Max(end, maxPrev);
    }

    return result;
  }
}