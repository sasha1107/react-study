import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
    // 로직이 한 번만 실행되도록 초기 상태 함수를 useState에 전달
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            // Get item from local storage by key
            const item = window.localStorage.getItem(key);

            // item이 있으면 JSON을 파싱하여 리턴, 없으면 initialValue를 리턴
            return item ? JSON.parse(item) : initialValue;

        } catch (error) {
            // error 발생시 initialValue 리턴
            console.log(error);
            return initialValue;
        }
    });

    // useState의 setter 함수의 wrapped 버전을 반환
    // localStorage에 new value로 셋팅
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            // Save state
            setStoredValue(valueToStore);

            // localStorage에 저장
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue] as const;
}
export default useLocalStorage;