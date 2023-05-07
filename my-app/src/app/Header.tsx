'use client';

import React, { useRef } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Button,
} from '@chakra-ui/react';
import Logo from '@assets/react.svg';
import { useDisclosure } from '@chakra-ui/react';
import { NavbarContents } from './Navbar';
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLDivElement>(null);
    return (
        <div className='w-screen bg-black p-4 sticky top-0 z-50 flex items-center gap-2'>
            <Logo
                width='30'
                height='30'
                className='inline animate-bounce  hover:animate-ping transition'
            />
            <Text fontSize={'xl'} className='text-[#00D8FF]'>
                정수현의 React Beta
            </Text>
            <div ref={btnRef} onClick={onOpen} className='flex items-center justify-end flex-grow md:hidden'>
                <HamburgerIcon color='gray.50' w={6} h={6}/>
            </div>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <NavbarContents/>
                    </DrawerBody>

                    {/* <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}
                </DrawerContent>
            </Drawer>
        </div>
    );
}
