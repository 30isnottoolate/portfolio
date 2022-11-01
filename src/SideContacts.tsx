import contacts from "./contacts";

const SideContacts: React.FC<{ themeClass: string }> = ({ themeClass }) => {
    return (
        <div id="side-contacts">
            <div className={`side-contact ${themeClass}`} >
                <a href={contacts["linkedin"].href} target="_blank" rel="noreferrer" >
                    <svg className="side-contact-image" viewBox="0 0 16 16">
                        <path d={contacts["linkedin"].path} />
                    </svg>
                </a>
            </div>
            <div className={`side-contact ${themeClass}`} >
                <a href={contacts["email"].href} target="_blank" rel="noreferrer" >
                    <svg className="side-contact-image" viewBox="0 2 16 12">
                        <path d={contacts["email"].path} />
                    </svg>
                </a>
            </div>
            <div className={`side-contact ${themeClass}`} >
                <a href={contacts["github"].href} target="_blank" rel="noreferrer" >
                    <svg className="side-contact-image" viewBox="0 0 16 16">
                        <path d={contacts["github"].path} />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default SideContacts;
