# useWindowSize

컴포넌트 내에서 window.innerWidth로 받아오면 처음 렌더링할 때의 가로 길이는 받아올 수 있었는데, 새로 고침을 하지 않고 화면 사이즈가 변경되었을 때는 동적으로 브라우저의 가로 길이를 받아올 수 없다.
브라우저 화면 사이즈가 변경될 때마다 그 값을 리턴하고 리렌더링하는 리액트 커스텀 훅을 사용

> ### useEffect
useEffect 를 사용하여 이벤트 리스너를 부착하고, window size가 변경될 때 state를 변경해준다.

> ### removeEventListener
removeEventListener를 하지 않을 경우 이벤트가 붙어있는 컴포넌트가 unmount되어도 addEventListener가 남아있기 때문에 sideEffect(부작용)이 일어날 수 있다.
따라서 useEffect가 실행될 때마다 이벤트 리스너가 부착되고, 불필요한 메모리를 많이 잡아먹을 수 있기 때문에 removeEventListener를 해준다.

# 사용
```jsx
import useWindowSize from './useWindowSize'

function App () {
    const { width, height } = useWindowSize();

    return (
        <div>
            {size.width}px / {size.height}px
        </div>
    )
}
```