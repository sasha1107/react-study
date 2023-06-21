import { useState, useRef } from 'react';

export default function Counter() {
    const [show, setShow] = useState(true);
    const ref = useRef<HTMLParagraphElement>(null);

    return (
        <div>
            <button
                className='border border-gray-500 rounded-md px-2 py-1'
                onClick={() => {
                    setShow(!show);
                }}
            >
                Toggle with setState
            </button>
            <button
                className='border border-gray-500 rounded-md px-2 py-1'
                onClick={() => {
                    ref.current?.remove();
                }}
            >
                Remove from the DOM
            </button>
            {show && <p ref={ref}>Hello world</p>}
        </div>
    );
}
