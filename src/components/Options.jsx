import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faLanguage } from '@fortawesome/free-solid-svg-icons';

function Options({selectedLanguage, setSelectedLanguage}) {
    const [showOptions, setShowOptions] = useState(false)

    return ( 
        <div className={showOptions ? "options options--active" : "options"}>
            <div className="options__open">
                {showOptions ? <FontAwesomeIcon icon={faXmark} onClick={() => setShowOptions(false)}/> : <FontAwesomeIcon icon={faLanguage} onClick={() => setShowOptions(true)}/>}
            </div>

            <h5 className='options__title'>Select your preferred language for articles</h5>

            <select value={selectedLanguage} className='options__select' onChange={(e) => setSelectedLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="pl">Polish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="es">Spanish</option>
            </select>

            <p className='options__info'>* Not all categories are available in every language</p>

            <p className="options__author">Created by <a href="https://github.com/Piotr-Kuras97" target='_blank' rel="noreferrer">Piotr Kuraś</a></p>
        </div>
     );
}

export default Options;