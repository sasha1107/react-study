'use client'

import React from 'react';
import { Text } from '@chakra-ui/react';

export default function Header() {
    return (
        <div className='w-screen bg-black p-4 sticky top-0'>
            <Text fontSize={"xl"} className='text-[#149ECA]'>
                정수현의 React Beta
            </Text>
        </div>
    );
}