    public class Solution
    {
      public IList<bool> KidsWithCandies(int[] candies, int extraCandies)
      {
        var result = new List<bool>();

        int max = 0;

        foreach (var candy in candies)
        {
          max = Math.Max(max, candy);
        }
        foreach (var candy in candies)
        {
          int extra = candy + extraCandies;
          if (extra >= max)
          {
            result.Add(true);
            continue;
          }
          result.Add(false);
        }

        return result;
      }
    }
