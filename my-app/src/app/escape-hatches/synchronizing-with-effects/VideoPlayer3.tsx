import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }: { src: string; isPlaying: boolean }) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            console.log('Calling video.play()');
            ref.current?.play();
        } else {
            console.log('Calling video.pause()');
            ref.current?.pause();
        }
    }, [isPlaying]);

    return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button
                onClick={() => setIsPlaying(!isPlaying)}
                className='border-2 border-indigo-400 bg-indigo-100 hover:bg-indigo-200'
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
            />
        </>
    );
}
