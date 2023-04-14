# useLocalStorage
로컬스토리지에 값을 저장하는 훅

서버 사이드 렌더링 환경에서는 로컬스토리지 API를 사용할 수 없으므로 `typeof window !== "undefined"`를 통해 SSR, SSG가 제대로 작동하는지 확인한다.

# 사용
```jsx
import useLocalStorage from "./useLocalStorage"

function App() {
    // Similar to useState but first arg is key to the value in local storage.
    // 첫 번째 인자: localStorage key, 두 번째 인자: initialValue
    const [name, setName] = useLocalStorage<string>('name', 'Bob');
    return (
        <div>
            <input
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
}
```