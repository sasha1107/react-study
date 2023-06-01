import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react'

interface Props {
    children: any;
    type: "error" | "warning" | "success" | "info";
}
export const AlertBanner = ({children, type}: Props) => (
    <Alert status={type}>
        <AlertIcon />
        {children}
    </Alert>
);