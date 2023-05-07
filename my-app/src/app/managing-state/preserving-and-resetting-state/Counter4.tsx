import { useState } from 'react';

export default function Counter4() {
    const [isPaused, setIsPaused] = useState(false);
    return (
        <div>
            <div className='flex'>
            {isPaused ? <p>See you later!</p> : <Counter />}
            </div>
            <label>
                <input
                    type='checkbox'
                    checked={isPaused}
                    onChange={(e) => {
                        setIsPaused(e.target.checked);
                    }}
                />
                Take a break
            </label>
        </div>
    );
}

function Counter() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'p-2 border border-gray-400';
    if (hover) {
        className += ' hover:bg-yellow-100';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button className='border bg-blue-400 p-1' onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    );
}
