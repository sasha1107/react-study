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

export default function Navbar() {
    return (
        <div className='float-left min-h-screen w-60 p-2 border-r border[#e2e8f0]'>
            <Text fontSize='xl' className='p-1'>
                Learn React
            </Text>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Describing the UI
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Link href='../../describing-the-ui/your-first-component'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                컴포넌트 생성
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/importing-and-exporting-components'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                컴포넌트 import, export
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/writing-markup-with-jsx'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                JSX로 마크업
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/javascript-in-jsx-with-curly-braces'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                중괄호로 자바스크립트 사용
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/passing-props-to-a-component'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                컴포넌트에 props 넘기기
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/conditional-rendering'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                조건부 렌더링
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/rendering-lists'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                Rendering Lists
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/keeping-components-pure'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                Keeping Components Pure
                            </Text>
                        </Link>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Adding Interactivity
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Managing State
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Escape Hatches
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
