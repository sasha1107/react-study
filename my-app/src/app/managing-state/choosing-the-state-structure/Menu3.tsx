import { useState } from 'react';

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
];

export default function Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedId, setSelectedId] = useState(0);

    const selectedItem = items.find((item) => item.id === selectedId);

    function handleItemChange(id: number, e: React.ChangeEvent<HTMLInputElement>) {
        setItems(
            items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        title: e.target.value,
                    };
                } else {
                    return item;
                }
            })
        );
    }

    return (
        <>
            <h2>What's your travel snack?</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={item.id}>
                        <input
                            value={item.title}
                            onChange={(e) => {
                                handleItemChange(item.id, e);
                            }}
                        />{' '}
                        <button
                            className='border border-gray-500 rounded-md px-2 py-1'
                            onClick={() => {
                                setSelectedId(item.id);
                            }}
                        >
                            Choose
                        </button>
                    </li>
                ))}
            </ul>
            <p>You picked {selectedItem?.title}.</p>
        </>
    );
}
