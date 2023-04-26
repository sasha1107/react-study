'use client'

import React from 'react';
import { Text } from '@chakra-ui/react';
import Logo from '@assets/react.svg'

export default function Header() {
    return (
        <div className='w-screen bg-black p-4 sticky top-0 z-50 flex items-center gap-2'>
            <Logo width='30' height='30' className='inline animate-bounce  hover:animate-ping transition'/>
            <Text fontSize={"xl"} className='text-[#00D8FF]'>
                정수현의 React Beta
            </Text>
        </div>
    );
}