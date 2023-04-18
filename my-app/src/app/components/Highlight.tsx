interface Props {
    children: any;
    color: string;
}
export const Highlight = ({ children, color }: Props) => (
    <span
        style={{
            backgroundColor: color,
            borderRadius: '2px',
            color: '#fff',
            padding: '0.2rem',
        }}
    >
        {children}
    </span>
);
