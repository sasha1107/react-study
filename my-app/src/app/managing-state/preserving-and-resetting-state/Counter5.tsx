import { useState } from 'react';

export default function Counter5() {
    const [isFancy, setIsFancy] = useState(false);
    return (
        <div>
            {isFancy ? (
                <div className='flex'>
                    <Counter isFancy={true} />
                </div>
            ) : (
                <section className='flex'>
                    <Counter isFancy={false} />
                </section>
            )}
            <label>
                <input
                    type='checkbox'
                    checked={isFancy}
                    onChange={(e) => {
                        setIsFancy(e.target.checked);
                    }}
                />
                Use fancy styling
            </label>
        </div>
    );
}

function Counter({ isFancy }: { isFancy: boolean }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    let className = 'p-2 border border-gray-400';
    if (hover) {
        className += ' hover:bg-yellow-100';
    }

    if (isFancy) {
        className += ' text-red-500 border-yellow-400 border-4';
    }

    return (
        <div
            className={className}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button
                className='border bg-blue-400 p-1'
                onClick={() => setScore(score + 1)}
            >
                Add one
            </button>
        </div>
    );
}