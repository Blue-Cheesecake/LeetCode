import java.util.Stack;

class BrowserHistory {

  private String current = null;
  private int sizeStackBackward = 0;
  private Stack<String> stackBackward = new Stack<String>();
  private int sizeStackForward = 0;
  private Stack<String> stackForward = new Stack<String>();

  public BrowserHistory(String homepage) {
    this.current = homepage;
    stackBackward.add(homepage);
    sizeStackBackward++;
  }

  public void visit(String url) {
    // empty stack forward
    stackForward = new Stack<String>();
    sizeStackForward = 0;

    stackBackward.add(url);
    sizeStackBackward++;
    this.current = url;

  }

  public String back(int steps) {
    if (steps == 0)
      return this.current;
    if (sizeStackBackward == 1) {
      return this.current;
    }

    String retrievedValue = stackBackward.pop();
    sizeStackBackward--;

    this.current = stackBackward.peek();
    stackForward.add(retrievedValue);
    sizeStackForward++;
    return back(steps - 1);
  }

  public String forward(int steps) {
    if (steps == 0)
      return this.current;
    if (sizeStackForward == 0) {
      return this.current;
    }

    String retrievedValue = stackForward.pop();
    sizeStackForward--;

    stackBackward.add(retrievedValue);
    sizeStackBackward++;
    this.current = retrievedValue;
    return forward(steps - 1);
  }

}
