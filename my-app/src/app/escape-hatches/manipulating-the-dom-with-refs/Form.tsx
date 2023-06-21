import { ForwardedRef, forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
    return <input {...props} ref={ref} />;
});

export default function Form() {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleClick() {
        inputRef.current?.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button
                className='border border-gray-500 rounded-md px-2 py-1'
                onClick={handleClick}
            >
                Focus the input
            </button>
        </>
    );
}
