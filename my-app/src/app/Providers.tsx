'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MDXProvider>
            <ChakraProvider resetCSS={true}>{children}</ChakraProvider>
        </MDXProvider>
    );
}
