public class Solution
{
    public int[] LeftRightDifference(int[] nums)
    {
        int[] result = new int[nums.Length];
        int[] leftSum = new int[nums.Length];
        int[] rightSum = new int[nums.Length];

        int i = 0;
        int j = nums.Length - 1;

        while (i < nums.Length || j >= 0)
        {
            if (i == 0)
            {
                leftSum[i] = 0;
            }
            else
            {
                leftSum[i] = leftSum[i - 1] + nums[i - 1];
            }

            if (j == nums.Length - 1)
            {
                rightSum[j] = 0;
            }
            else
            {
                rightSum[j] = rightSum[j + 1] + nums[j + 1];
            }

            i++;
            j--;
        }

        for (int k = 0; k < nums.Length; k++)
        {
            result[k] = Math.Abs(leftSum[k] - rightSum[k]);
        }

        return result;
    }
}