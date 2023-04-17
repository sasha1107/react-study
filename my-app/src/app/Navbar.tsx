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
    Link
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
                        <Link href='../../describing-the-ui/your-first-component'>Your First Component</Link>
                        <br/>
                        <Link href='../../describing-the-ui/importing-and-exporting-components'>Importing and Exporting Components</Link>
                        <br/>
                        <Link href='../../describing-the-ui/writing-markup-with-jsx'>Writing Markup with JSX</Link>
                        <br/>
                        <Link href='../../describing-the-ui/javascript-in-jsx-with-curly-braces'>JavaScript in JSX with Curly Braces</Link>
                        <br/>
                        <Link href='../../describing-the-ui/passing-props-to-a-component'>Passing Props to a Component</Link>
                        <br/>
                        <Link href='../../describing-the-ui/conditional-rendering'>Conditional Rendering</Link>
                        <br/>
                        <Link href='../../describing-the-ui/rendering-lists'>Rendering Lists</Link>
                        <br/>
                        <Link href='../../describing-the-ui/keeping-components-pure'>Keeping Components Pure</Link>
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
