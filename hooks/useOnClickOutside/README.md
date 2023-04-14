# useOnClickOutside

이 후크를 사용하면 지정된 요소 외부의 클릭을 감지할 수 있습니다. 아래 예제에서는 모달 외부의 요소를 클릭할 때 모달을 닫는 데 사용합니다. 이 논리를 후크로 추상화하면 이러한 종류의 기능(드롭다운 메뉴, 도구 설명 등)이 필요한 모든 구성 요소에서 쉽게 사용할 수 있습니다.

# 사용
```jsx
import useOnClickOutside from "./useOnClickOutside"

// Usage
function App() {
    // Create a ref that we add to the element for which we want to detect outside clicks
    const ref = useRef();
    // State for our modal
    const [isModalOpen, setModalOpen] = useState(false);
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => setModalOpen(false));
    return (
        <div>
            {isModalOpen ? (
                <div ref={ref}>
                    👋 Hey, I'm a modal. Click anywhere outside of me to close.
                </div>
            ) : (
                <button onClick={() => setModalOpen(true)}>Open Modal</button>
            )}
        </div>
    );
}
```