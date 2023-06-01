'use client';

import React from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    AccordionItem,
    Box,
    Text,
    Link,
} from '@chakra-ui/react';
import { navbarData } from '@constants/index';

export const NavbarContents = () => (
    <Accordion defaultIndex={[0]} allowMultiple>
        {navbarData.map(
            (item: {
                category: string;
                children: { href: string; title: string }[];
            }) => (
                <AccordionItem>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            {item.category}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        {item.children.map((child) => (
                            <Link href={child.href}>
                                <Text
                                    color='gray.500'
                                    fontSize={'sm'}
                                    _hover={{ color: 'cyan.600' }}
                                >
                                    {child.title}
                                </Text>
                            </Link>
                        ))}
                    </AccordionPanel>
                </AccordionItem>
            )
        )}
    </Accordion>
);
export default function Navbar() {
    return (
        <div className='float-left min-h-screen md:w-60 p-2 border-r border[../../custom-hooks/e2e8f0] hidden md:block'>
            <Text fontSize='xl' className='p-1'>
                Learn React
            </Text>
            <NavbarContents />
        </div>
    );
}
