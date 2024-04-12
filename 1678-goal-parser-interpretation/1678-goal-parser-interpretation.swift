class Solution {
    func interpret(_ command: String) -> String {
        var result = ""
        var i = 0
        
        while i < command.count {
            let c = command[command.index(command.startIndex, offsetBy: i)]
            
            if c == "G" {
                result += String(c)
                i += 1
                continue
            }
            if c == "(" {
                let d = command[command.index(command.startIndex, offsetBy: i + 1)]
                if d == ")" {
                    result += "o"
                    i += 2
                } else {
                    result += "al"
                    i += 4
                }
            }
        }
        
        
        return result
    }
}
