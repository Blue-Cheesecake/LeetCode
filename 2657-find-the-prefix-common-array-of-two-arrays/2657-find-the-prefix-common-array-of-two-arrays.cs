public class Solution
{
  public int[] FindThePrefixCommonArray(int[] A, int[] B)
  {
    int[] result = new int[A.Length];
    HashSet<int> setA = new();
    HashSet<int> setB = new();

    for (int i = 0; i < A.Length; i++)
    {
      setA.Add(A[i]);
      setB.Add(B[i]);
      int c = setA.Intersect(setB).Count();
      result[i] = c;
    }

    return result;
  }
}