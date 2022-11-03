import contacts from "./contacts";

const SideContacts: React.FC<{ scrollPos: number, themeClass: string }> = ({ scrollPos, themeClass }) => {
    return (
        <div id="side-contacts">
            <a id="side-contact-1" className={`side-contact ${themeClass}`} style={{left: (scrollPos > 1410 ? "-80px" : "")}} href={contacts["linkedin"].href} target="_blank" rel="noreferrer" >
                    <svg className="side-contact-image" viewBox="0 0 16 16">
                        <path d={contacts["linkedin"].path} />
                    </svg>
            </a>
            <a id="side-contact-2" className={`side-contact ${themeClass}`} style={{left: (scrollPos > 1350 ? "-80px" : "")}} href={contacts["email"].href} target="_blank" rel="noreferrer" >
                    <svg className="side-contact-image" viewBox="0 2 16 12">
                        <path d={contacts["email"].path} />
                    </svg>
            </a>
            <a id="side-contact-3" className={`side-contact ${themeClass}`} style={{left: (scrollPos > 1300 ? "-80px" : "")}} href={contacts["github"].href} target="_blank" rel="noreferrer" >
                    <svg className="side-contact-image" viewBox="0 0 16 16">
                        <path d={contacts["github"].path} />
                    </svg>
            </a>
        </div>
    )
}

export default SideContacts;
