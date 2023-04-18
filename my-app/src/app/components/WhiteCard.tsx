import React from 'react';
import { Card, CardBody, Text, Box } from '@chakra-ui/react';

interface Props {
    children: any;
    title: string;
}

export const WhiteCard = ({ children, title }: Props) => (
    <Card border='1px' borderColor='gray.100' mt={2} mb={2}>
        <CardBody>
            <Box mb={2}>
                <Text fontSize='lg' as='b' color='cyan.600'>
                    {title}
                </Text>
            </Box>
            {children}
        </CardBody>
    </Card>
);
