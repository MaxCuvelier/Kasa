import {useState} from 'react';
import "../styles/collapse.css"


export default function Collapse ( {title, paragraphe, list} ) {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
    setIsActive(current => !current)
}

function typeCollapse() {
        if (paragraphe === 0) {
            return (
                <div className={isActive ? 'paragraphe-collapse base-paragraphe' : 'display-none base-paragraphe'}>
                    <ul className="listecollapse">
                        {list.map((liste, index) =>
                        <li key={`${liste}-${index}`}>{liste}</li>
                    )}
                    </ul>
                </div>
            )
        } else {
            return (
                <p className={isActive ? 'paragraphe-collapse base-paragraphe' : 'display-none base-paragraphe'}>{paragraphe}</p>
            )
        }
    }

    return (
        <div className="contenue-collapse">
            <div className="en-tête-collapse">
                <h3>{title}</h3>
                <svg id="collapse" className={isActive ? 'icon-chevron-reverse' : 'icon-chevron'} onClick={handleClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
                {typeCollapse()}
            </div>
    )
}

