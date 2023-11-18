public class Solution
    {
      public int MostWordsFound(string[] sentences)
      {
        int result = 0;
        foreach (var sentence in sentences)
        {
          int currentLength = sentence.Split(" ").Length;
          result = Math.Max(result, currentLength);
        }
        return result;
      }
    }