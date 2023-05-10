import React from 'react';
import { Card, CardBody, Text, Box } from '@chakra-ui/react';
import { colorType } from '../../types/color';

interface Props {
    children: any;
    title? : string;
    color : colorType;
}

export const ColorCard = ({ children, title, color }: Props) => (
    <Card border='1px' borderColor='gray.100' bg={`${color}.50`} mt={2} mb={2}>
        <CardBody>
            <Box mb={2}>
                <Text fontSize='lg' as='b' color={`${color}.600`}>
                    {title ? title : '노트'}
                </Text>
            </Box>
            {children}
        </CardBody>
    </Card>
);