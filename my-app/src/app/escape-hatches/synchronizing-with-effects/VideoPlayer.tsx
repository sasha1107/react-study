import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying } : { src : string, isPlaying : boolean }) {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    });

    return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlayerApp() {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
            />
        </>
    );
}
