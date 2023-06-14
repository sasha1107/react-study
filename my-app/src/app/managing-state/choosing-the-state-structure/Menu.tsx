import { useState } from 'react';

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
];

export default function Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState(items[0]);

    return (
        <>
            <h2>What's your travel snack?</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.title}{' '}
                        <button
                            className='border border-gray-500 rounded-md px-2 py-1'
                            onClick={() => {
                                setSelectedItem(item);
                            }}
                        >
                            Choose
                        </button>
                    </li>
                ))}
            </ul>
            <p>You picked {selectedItem.title}.</p>
        </>
    );
}
