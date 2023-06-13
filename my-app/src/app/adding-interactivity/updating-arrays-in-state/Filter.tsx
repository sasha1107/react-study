import { useState } from 'react';

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

export default function Filter() {
    const [artists, setArtists] = useState(initialArtists);

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <ul>
                {artists.map((artist) => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button
                            className='border border-black bg-gray-200 px-2 py-1 rounded'
                            onClick={() => {
                                setArtists(
                                    artists.filter((a) => a.id !== artist.id)
                                );
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
