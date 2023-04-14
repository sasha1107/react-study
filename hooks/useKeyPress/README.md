# useKeyPress

사용자가 키보드에서 특정 키를 누를 때 쉽게 감지

```jsx
import useKeyPress from "./useKeyPress"
// Usage
function App() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress("h");
  const sadPress = useKeyPress("s");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");
  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
```