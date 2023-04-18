import React from 'react';
import {
    Card,
    CardBody,
    Text,
    Box
} from '@chakra-ui/react';

interface Props {
    children: any;
    title: string
}

export const Pitfall = ({children, title}: Props) => (
        <Card border='1px' borderColor='gray.200' bg="#fef5e7" mt={2} mb={2}>
    <CardBody>
        <Box mb={2}>
        <Text fontSize="lg" as="b" color="tomato">
            🤔 {title}
        </Text>
        </Box>
        {children}
    </CardBody>
</Card>
);
