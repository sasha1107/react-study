import { useState } from 'react';

export default function MyComponent() {
    const [counter, setCounter] = useState(0);

    function MyTextField() {
        const [text, setText] = useState('');

        return <input className='border border-black' value={text} onChange={(e) => setText(e.target.value)} />;
    }

    return (
        <div className='border flex gap-2 p-2 bg-white'>
            <MyTextField />
            <button
                className='border bg-blue-400 p-1'
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Clicked {counter} times
            </button>
        </div>
    );
}
