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
        <div className='float-left min-h-screen w-60 p-2 border-r border[../../custom-hooks/e2e8f0]'>
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
                                리스트를 렌더링하기
                            </Text>
                        </Link>
                        <Link href='../../describing-the-ui/keeping-components-pure'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                컴포넌트를 순수하게 유지
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
                        <Link href='../../adding-interactivity/responding-to-events'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                이벤트에 반응하기
                            </Text>
                        </Link>
                        <Link href='../../adding-interactivity/state-a-components-memory'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                state: 컴포넌트의 memory
                            </Text>
                        </Link>
                        <Link href='../../adding-interactivity/render-and-commit'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                렌더와 커밋
                            </Text>
                        </Link>
                        <Link href='../../adding-interactivity/state-as-a-snapshot'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                스냅샷으로서의 state
                            </Text>
                        </Link>
                        <Link href='../../adding-interactivity/queueing-a-series-of-state-updates'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                일련의 state 업데이트 대기열
                            </Text>
                        </Link>
                        <Link href='../../adding-interactivity/updating-objects-in-state'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                객체 state 업데이트
                            </Text>
                        </Link>
                        <Link href='../../adding-interactivity/updating-arrays-in-state'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                배열 state 업데이트
                            </Text>
                        </Link>
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

                <AccordionItem>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            Custom Hooks
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Link href='../../custom-hooks/useWindowSize'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useWindowSize
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useToggle'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useToggle
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useLockBodyScroll'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useLockBodyScroll
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useKeyPress'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useKeyPress
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useOnClickOutside'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useOnClickOutside
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useHover'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useHover
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useAxios'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useAxios
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useLocalStorage'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useLocalStorage
                            </Text>
                        </Link>
                        <Link href='../../custom-hooks/useTitle'>
                            <Text
                                color='gray.500'
                                fontSize={'sm'}
                                _hover={{ color: 'cyan.600' }}
                            >
                                useTitle
                            </Text>
                        </Link>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
