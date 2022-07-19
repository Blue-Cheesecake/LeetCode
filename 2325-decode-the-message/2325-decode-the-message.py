class Solution:
    def decodeMessage(self, key: str, message: str) -> str:
        result = ""
        mapKeys = dict()
        asciiIndex = ord("a")
        for char in key:
            if len(mapKeys) == 26:
                break
            if char == " ":
                continue
            if char in mapKeys:
                continue

            asciiChar = chr(asciiIndex)
            mapKeys[char] = asciiChar
            asciiIndex += 1

        # print(mapKeys)
        for char in message:
            if char == " ":
                result += " "
                continue
            result += mapKeys[char]

        return result
