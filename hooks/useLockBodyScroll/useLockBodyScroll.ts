import { useLayoutEffect } from 'react';

function useLockBodyScroll(): void {
    // useLaoutEffect callback return type is "() => void" type
    useLayoutEffect((): (() => void) => {
        // 기존 body의 css overflow 속성값을 저장
        const originalStyle: string = window.getComputedStyle(
            document.body
        ).overflow;

        // 마운트되었을 때 스크롤 막기 overflow: hidden;
        document.body.style.overflow = 'hidden';

        // 컴포넌트가 언마운트 되면 다시 스크롤이 가능하도록 처리
        return () => (document.body.style.overflow = originalStyle);
    }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
}
export default useLockBodyScroll;