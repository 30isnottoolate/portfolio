import contacts from './contacts';

interface ContactProps {
    svgFillClass: string;
    contactType: string;
    text: string;
}

const Contact: React.FC<ContactProps> = ({ svgFillClass, contactType, text }: ContactProps) => {
    return (
        <div>
            <a className={svgFillClass} href={contacts[contactType as keyof typeof contacts].href} target="_blank" rel="noreferrer">
                <svg className="contact-image" viewBox="0 0 16 16">
                    <path d={contacts[contactType as keyof typeof contacts].path} />
                </svg>
                <span className="contact-text" >{text}</span>
            </a>
        </div>
    );
}

export default Contact;
