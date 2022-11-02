import contacts from "./contacts";

const SideContacts: React.FC<{ scrollPos: number, themeClass: string }> = ({ scrollPos, themeClass }) => {
    return (
        <div id="side-contacts">
            <a href={contacts["linkedin"].href} target="_blank" rel="noreferrer" >
                <div className={`side-contact ${themeClass}`} style={{left: (scrollPos > 1410 ? "-80px" : "-25px")}} >
                    <svg className="side-contact-image" viewBox="0 0 16 16">
                        <path d={contacts["linkedin"].path} />
                    </svg>
                </div>
            </a>
            <a href={contacts["email"].href} target="_blank" rel="noreferrer" >
                <div className={`side-contact ${themeClass}`} style={{left: (scrollPos > 1350 ? "-80px" : "-25px")}} >
                    <svg className="side-contact-image" viewBox="0 2 16 12">
                        <path d={contacts["email"].path} />
                    </svg>
                </div>
            </a>
            <a href={contacts["github"].href} target="_blank" rel="noreferrer" >
                <div className={`side-contact ${themeClass}`} style={{left: (scrollPos > 1300 ? "-80px" : "-25px")}} >
                    <svg className="side-contact-image" viewBox="0 0 16 16">
                        <path d={contacts["github"].path} />
                    </svg>
                </div>
            </a>
        </div>
    )
}

export default SideContacts;
