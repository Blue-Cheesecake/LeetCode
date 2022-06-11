class Solution:
    def makeEqual(self, words: List[str]) -> bool:
        Map = dict()

        for word in words:
            for cha in word:
                Map[cha] = Map.get(cha, 0) + 1

        for v in Map.values():
            if v % len(words) != 0:
                return False

        return True
