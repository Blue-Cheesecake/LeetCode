impl Solution {
    pub fn find_local_largest(grid: &Vec<Vec<i32>>, row: usize, column: usize) -> &i32 {
        let mut largest = grid.get(row).unwrap().get(column).unwrap();

        for i in row - 1..=row + 1 {
            for j in column - 1..=column + 1 {
                let element = grid.get(i).unwrap().get(j).unwrap();
                if element > largest {
                    largest = element;
                }
            }
        }

        largest
    }

    pub fn largest_local(grid: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut result = Vec::<Vec<i32>>::new();
        let n = grid.len();

        for i in 1..n - 1 {
            let mut v = Vec::<i32>::new();
            for j in 1..n - 1 {
                let largest = Solution::find_local_largest(&grid, i, j);
                v.push(*largest);
            }
            result.push(v);
        }

        result
    }
}