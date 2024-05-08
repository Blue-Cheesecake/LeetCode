use std::collections::HashMap;

impl Solution {
    pub fn find_relative_ranks(score: Vec<i32>) -> Vec<String> {
        let mut result: Vec<String> = Vec::new();
        let mut sorted_score = score.to_vec();
        sorted_score.sort();
        let mut map_sequence = HashMap::<&i32, usize>::new();
        let mut sequence = sorted_score.len();

        for s in sorted_score.iter() {
            map_sequence.insert(s, sequence);
            sequence -= 1;
        }

        for s in score.iter() {
            let seq = map_sequence.get(s).unwrap();
            println!("{},  {}", s, seq);

            if *seq == 1 {
                result.push(String::from("Gold Medal"));
            } else if *seq == 2 {
                result.push(String::from("Silver Medal"));
            } else if *seq == 3 {
                result.push(String::from("Bronze Medal"));
            } else {
                result.push(seq.to_string());
            }
        }

        return result;
    }
}
