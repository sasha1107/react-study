'use client';

import React from 'react';
import MD1 from './md/1.mdx';
import MD2 from './md/2.mdx';
import MD3 from './md/3.mdx';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionIcon,
    AccordionPanel,
    Card,
    CardBody,
    Divider
} from '@chakra-ui/react';

export default function page() {
    return (
        <div>
            <MD1 />
            <br/>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton
                        _expanded={{ bg: 'rgb(243 244 253)', color: 'purple' }}
                    >
                        <Box as='span' flex='1' textAlign='left'>
                            심화
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        <MD2 />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Divider/>
            <br/>
            <Card>
                <CardBody>
                    <MD3 />
                </CardBody>
            </Card>
        </div>
    );
}
