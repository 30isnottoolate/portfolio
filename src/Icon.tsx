interface IconProps {
    href: string;
    src: string;
    alt: string;
    bGColor?: string;
}

const Icon: React.FC<IconProps> = ({ href, src, alt, bGColor }: IconProps) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <img className="icon-image" src={src} alt={alt} style={{backgroundColor: bGColor}}/>
        </a>
    );
}

export default Icon;
