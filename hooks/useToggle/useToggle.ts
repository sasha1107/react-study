import { useCallback, useState } from 'react';


// 파라미터는 불리언 값이고, 기본값은 'false'이다.
const useToggle = (initialState: boolean = false): [boolean, any] => {
    const [state, setState] = useState<boolean>(initialState);
    // 불필요한 리렌더링을 방지 + 특정 함수를 새로 만들지 않고 재사용하기 위해 useCallback 사용
    const toggle = useCallback((): void => setState(state => !state), []);
    return [state, toggle]
}

export default useToggle;