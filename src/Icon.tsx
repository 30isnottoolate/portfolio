interface IconProps {
    href: string;
    src: string;
    alt: string;
}

const Icon: React.FC<IconProps> = ({href, src, alt}: IconProps) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <img src={src} alt={alt} />
        </a>
    );
}

export default Icon;