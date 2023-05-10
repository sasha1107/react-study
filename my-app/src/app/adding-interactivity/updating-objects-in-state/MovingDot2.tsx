'use client';

import { useState } from 'react';
export default function MovingDot2() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    return (
        <div
            className='border m-2'
            onPointerMove={(e) => {
                setPosition({
                    x: (e.clientX / window.innerWidth) * 200,
                    y: (e.clientY / window.innerHeight) * 200,
                });
            }}
            style={{
                position: 'relative',
                width: '200px',
                height: '200px',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }}
            />
        </div>
    );
}
