class MyStack {

    private final Queue<Integer> q1;
    private final Queue<Integer> q2;
    private boolean isUsingQ1;

    public MyStack() {
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
        isUsingQ1 = true;
    }

    public void push(int x) {
        if (isUsingQ1) q1.add(x);
        else q2.add(x);
    }

    public int pop() {
        // move q1 to q2 until the next is empty
        int latest = -1;
        Queue<Integer> a;
        Queue<Integer> b;

        if (isUsingQ1) {
            a = q1;
            b = q2;
        } else {
            a = q2;
            b = q1;
        }

        while (!a.isEmpty()) {
            latest = a.poll();
            if (a.isEmpty()) {
                break;
            }
            b.add(latest);
        }

        isUsingQ1 = !isUsingQ1;

        return latest;
    }

    public int top() {

        int latest = -1;
        Queue<Integer> a;
        Queue<Integer> b;

        if (isUsingQ1) {
            a = q1;
            b = q2;
        } else {
            a = q2;
            b = q1;
        }

        while (!a.isEmpty()) {
            latest = a.poll();
            b.add(latest);
        }

        isUsingQ1 = !isUsingQ1;

        return latest;
    }

    public boolean empty() {
        return q1.isEmpty() && q2.isEmpty();
    }
}


/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */