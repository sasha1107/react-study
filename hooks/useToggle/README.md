# useToggle

true 또는 false인 매개변수를 사용하고 해당 값을 반대 값으로 토글하는 것

ex) 모달 표시 및 숨기기, 사이드 메뉴 열기/닫기와 같이 반대 작업에 어떤 작업을 수행하려는 경우에 유용합니다.

# 사용
```jsx
import useToggle from "./useToggle"

function App() {
    // Call the hook which returns, current value and the toggler function
    const [isTextChanged, setIsTextChanged] = useToggle();
    return (
        <button onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
    );
}
```
