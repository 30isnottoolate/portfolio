import contacts from '../utilities/contacts';

interface ContactProps {
    contactType: string;
}

const Contact: React.FC<ContactProps> = ({ contactType }: ContactProps) => {
    return (
        <a className="svg-fill" href={contacts[contactType as keyof typeof contacts].href} target="_blank" rel="noreferrer">
            <svg className="contact-image" viewBox="0 0 16 16">
                <path d={contacts[contactType as keyof typeof contacts].path} />
            </svg>
            <span className="contact-text" >{contacts[contactType as keyof typeof contacts].displayText}</span>
        </a>
    );
}

export default Contact;
