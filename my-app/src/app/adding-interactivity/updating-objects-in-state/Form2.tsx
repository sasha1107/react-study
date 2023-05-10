'use client';
import { useState } from 'react';

export default function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    });

    function handleFirstNameChange(e: any) {
        setPerson({
            ...person,
            firstName: e.target.value,
        });
    }

    function handleLastNameChange(e: any) {
        setPerson({
            ...person,
            lastName: e.target.value,
        });
    }

    function handleEmailChange(e: any) {
        setPerson({
            ...person,
            email: e.target.value,
        });
    }

    return (
        <div className='border border-gray-300 p-2'>
            <label className='block'>
                First name:
                <input
                    className='border border-black'
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label className='block'>
                Last name:
                <input
                    className='border border-black'
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label className='block'>
                Email:
                <input
                    className='border border-black'
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p className='mt-2 mb-2'>
                {person.firstName} {person.lastName} ({person.email})
            </p>
        </div>
    );
}
