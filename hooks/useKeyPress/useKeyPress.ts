import { useState, useEffect } from 'react';

function useKeyPress(targetKey: string): boolean {
    // 키가 눌렸는지 여부를 추적하기 위한 state
    const [keyPressed, setKeyPressed] = useState(false);
    // 누른 key === targetKey라면 keyPressed를 true로 설정
    function downHandler({ key }): void {
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
    
    // 누른키가 keyup 되면 keyPressed를 false로 변경
    const upHandler = ({ key }): void => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
    useEffect(() => {
        // keydown, keyup 이벤트가 발생할 때 downHandler / upHandler 함수가 실행되도록 한다.
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);

        // useEffect가 실행될 때마다 이벤트 리스너가 부착되고, 불필요한 메모리를 많이 잡아먹을 수 있기 때문에 removeEventListener를 해준다.
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
    return keyPressed;
}

export default useKeyPress;
