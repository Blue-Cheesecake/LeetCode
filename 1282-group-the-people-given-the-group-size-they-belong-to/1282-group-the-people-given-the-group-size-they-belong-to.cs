public class Solution
{
    public IList<IList<int>> GroupThePeople(int[] groupSizes)
    {
        Dictionary<int, IList<int>> map = [];
        IList<IList<int>> result = [];

        for (int i = 0; i < groupSizes.Length; i++)
        {
            int groupSize = groupSizes[i];

            if (map.TryGetValue(groupSize, out IList<int>? value))
            {
                IList<int> list = value;
                list.Add(i);

                if (list.Count == groupSize)
                {
                    result.Add([.. list]);
                    map.Remove(groupSize);
                }
            }
            else
            {
                IList<int> l = [];
                l.Add(i);
                // case size = 1
                if (groupSize == 1)
                {
                    result.Add(l);
                    continue;
                }

                map[groupSize] = l;

            }
        }

        return result;
    }
}