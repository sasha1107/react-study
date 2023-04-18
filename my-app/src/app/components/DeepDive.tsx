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
export const DeepDive = ({children, title}: Props) => (
    <Card bg="#F3F4FD" mt={2} mb={2} border='1px' borderColor='gray.200'>
    <CardBody>
        <Box mb={2}>
        <Text fontSize="lg" as="b" color="#575FB7">
            📖 {title}
        </Text>
        </Box>
        {children}
    </CardBody>
</Card>
);