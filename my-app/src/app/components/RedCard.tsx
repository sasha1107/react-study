import React from 'react';
import { Card, CardBody, Text, Box } from '@chakra-ui/react';

interface Props {
    children: any;
    title?: string;
}

export const RedCard = ({ children, title }: Props) => (
    <Card bg='red.100' mt={2} mb={2} border='1px' borderColor='gray.200'>
        <CardBody>
            <Box mb={2}>
                <Text fontSize='lg' as='b' color='red.600'>
                    🚨 {title ? title : '경고'}
                </Text>
            </Box>
            {children}
        </CardBody>
    </Card>
);
