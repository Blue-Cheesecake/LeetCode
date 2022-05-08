import java.util.ArrayList;

class RecentCounter {

  int count;
  ArrayList<Integer> requests;
  int left;
  int right;

  public RecentCounter() {
    count = 0;
    requests = new ArrayList<Integer>();
    left = -1;
    right = -1;
  }

  public int ping(int t) {
    this.requests.add(t);

    if (requests.size() == 1) {
      this.left = 0;
      this.right = 0;
    } else {
      this.right++;
      int min_range = t - 3000;
      int max_range = t;
      int left_element = requests.get(this.left);
      while (left_element < min_range) {
        this.left++;
        left_element = requests.get(this.left);
      }
    }

    return right - left + 1;
  }
}
