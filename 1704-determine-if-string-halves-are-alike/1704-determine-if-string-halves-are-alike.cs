public class Solution
{
  public bool HalvesAreAlike(string s)
  {
    int halfLength = s.Length / 2;
    int counterA = 0;
    int counterB = 0;
    string lower = s.ToLower();

    for (int i = 0; i < s.Length; i++)
    {
      char c = lower[i];
      if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u')
      {
        if (i < halfLength)
        {
          counterA++;
        }
        else
        {
          counterB++;
        }
      }
    }

    return counterA == counterB;
  }
}