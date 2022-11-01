import contacts from "./contacts";

const SideContacts: React.FC = () => {
    return (
        <div id="side-contacts">
            <div className="side-contact">
                <svg className="contact-image" viewBox="0 0 16 16">
                    <path d={contacts["linkedin"].path} />
                </svg>
            </div>
            <div className="side-contact">
                <svg className="contact-image" viewBox="0 0 16 16">
                    <path d={contacts["email"].path} />
                </svg>
            </div>
            <div className="side-contact">
                <svg className="contact-image" viewBox="0 0 16 16">
                    <path d={contacts["github"].path} />
                </svg>
            </div>
        </div>
    )
}

export default SideContacts;
