use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn get_hint(secret: String, guess: String) -> String {
        let mut num_bull = 0_u16;
        let mut num_cow = 0_u16;

        let mut init_map = HashMap::<char, HashSet<usize>>::new();

        for (i, c) in secret.chars().enumerate() {
            match init_map.get_mut(&c) {
                Some(set) => {
                    set.insert(i);
                }
                None => {
                    let mut set = HashSet::<usize>::new();
                    set.insert(i);
                    init_map.insert(c, set);
                }
            }
        }

        // let mut init_map = dbg!(init_map);
        let mut bull_map = HashMap::<char, HashSet<usize>>::new();

        for (i, c) in guess.chars().enumerate() {
            if let Some(index_set) = init_map.get_mut(&c) {
                if index_set.contains(&i) {
                    index_set.remove(&i);
                    num_bull += 1;

                    match bull_map.get_mut(&c) {
                        Some(bull_set) => {
                            bull_set.insert(i);
                        }
                        None => {
                            bull_map.insert(c, HashSet::from([i]));
                        }
                    }
                }
            }
        }

        // let bull_map = dbg!(bull_map);
        // let mut cow_map = dbg!(init_map);
        let mut cow_map = init_map;
        for (i, c) in guess.chars().enumerate() {
            if let Some(index_set) = cow_map.get_mut(&c) {
                // dbg!(i, c);
                let index_set = index_set;
                if index_set.is_empty() {
                    continue;
                }

                for j in 0..secret.len() {
                    if index_set.contains(&j) {
                        if let Some(v) = bull_map.get(&c) {
                            if v.contains(&i) {
                                continue;
                            }
                        }
                        index_set.remove(&j);
                        // println!("Plus cow");
                        num_cow += 1;
                        break;
                    }
                }
            }
        }

        format!("{num_bull}A{num_cow}B")
    }
}
