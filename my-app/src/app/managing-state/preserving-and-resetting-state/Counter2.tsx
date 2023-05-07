import { useState } from 'react';

export default function Counter2() {
    const [showB, setShowB] = useState(true);
    return (
        <div>
            <div className='flex gap-2'>
            <Counter />
            {showB && <Counter />}
            </div>
            <label>
                <input
                    type='checkbox'
                    checked={showB}
                    onChange={(e) => {
                        setShowB(e.target.checked);
                    }}
                />
                Render the second counter
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
