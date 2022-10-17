interface ContactProps {
    href: string;
    src: string;
    alt: string;
    text: string;
}

const Contact: React.FC<ContactProps> = ({ href, src, alt, text }: ContactProps) => {
    return (
        <div>
            <a href={href} target="_blank" rel="noreferrer">
                <img className="contact-image" src={src} alt={alt} /> <span className="contact-text">{text}</span>
            </a>
        </div>
    );
}

export default Contact;
