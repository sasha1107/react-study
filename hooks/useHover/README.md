# useHover

마우스가 요소를 가리키고 있는지 감지
useHover 훅은 해당 참조가 있는 요소가 현재 가리키고 있는지 여부를 나타내는 boolean 값과 참조를 반환합니다.
호버 상태를 모니터링하려는 요소에 반환된 ref를 추가하기만 하면 됩니다.

> ### 🐞 이 방법의 한 가지 잠재적인 버그
hoverRef가 추가되는 요소를 변경하는 로직이 있는 경우 이벤트 리스너가 반드시 새 요소에 적용되지는 않습니다.
[대안](https://gist.github.com/gragland/a32d08580b7e0604ff02cb069826ca2f)

# 사용
```jsx
import useHover from "./useHover";

// Usage
function App() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
}
```