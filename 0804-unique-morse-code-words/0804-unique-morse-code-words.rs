use std::collections::{HashSet};

const MORSE_CODE: [&str; 26]  = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
const BASE_CHAR: u8 = 'a'.to_ascii_lowercase() as u8;

impl Solution {
    pub fn unique_morse_representations(words: Vec<String>) -> i32 {
        let mut set = HashSet::<String>::new();        

        for word in words.iter() {
            let mut str = String::new();

            for c in word.chars().into_iter() {
                let ascii = c.to_ascii_lowercase() as u8 - BASE_CHAR;
                let mc = MORSE_CODE.get(ascii as usize).unwrap();

                str.push_str(mc);
            }

            set.insert(str);
        }

        set.len() as i32
    }
}
