class Solution:
    def numEquivDominoPairs(self, dominoes: List[List[int]]) -> int:
        result = 0

        newMap = dict()  # type: Dict[List[int], int] # key: domino, freq:

        for pair in dominoes:

            shallowCopy = pair.copy()
            shallowCopy = tuple(shallowCopy)
            shallowCopyReversed = shallowCopy[::-1]

            if shallowCopy in newMap:
                # print("shallowCopy: ", shallowCopy)
                # print("newMap[shallowCopy]: ", newMap[shallowCopy])
                result += newMap[shallowCopy]

                newMap[shallowCopy] += 1
                if shallowCopy == shallowCopyReversed:
                    continue
                newMap[shallowCopyReversed] += 1
                continue

            newMap[shallowCopy] = 1
            newMap[shallowCopyReversed] = 1

        return result
