import SyntaxHighlighter from 'react-syntax-highlighter';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark.js';

interface Props {
    children: any;
    lang?: string;
}

export const CodeBlock = ({ children, lang }: Props) => (
    <SyntaxHighlighter language={lang ? lang : 'javascript'} style={atomOneDark}>
        {children}
    </SyntaxHighlighter>
);
