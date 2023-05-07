import { useState } from 'react';

export default function Scoreboard() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
        <div className='flex gap-2 flex-col'>
            {isPlayerA ? (
                <Counter person='Taylor' />
            ) : (
                <Counter person='Sarah' />
            )}
            <button
                className='border bg-blue-400 p-1'
                onClick={() => {
                    setIsPlayerA(!isPlayerA);
                }}
            >
                Next player!
            </button>
        </div>
    );
}

function Counter({ person } : { person: string }) {
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
            <h1>
                {person}'s score: {score}
            </h1>
            <button 
            className='border bg-blue-400 p-1'
            onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    );
}
