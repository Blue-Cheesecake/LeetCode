class Solution {
    func sortTheStudents(_ score: [[Int]], _ k: Int) -> [[Int]] {
        let result = score.sorted(by: {
            (score1, score2) in
            return score1[k] > score2[k]
        })
        
        return result
    }
}
