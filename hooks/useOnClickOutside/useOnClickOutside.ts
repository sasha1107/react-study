import { useEffect } from 'react';

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // ref의 요소 또는 하위 요소를 클릭하면 아무 작업도 수행하지 않음.
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };

            // 이벤트 리스너 부착
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            // useEffect가 실행될 때마다 이벤트 리스너가 부착되고, 불필요한 메모리를 많이 잡아먹을 수 있기 때문에 removeEventListener를 해준다.
            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}
export default useOnClickOutside;