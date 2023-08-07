import { useState } from 'react';
import { langOptions } from 'utils/options';

import { MdKeyboardArrowDown } from "react-icons/md";
import css from "./LangMenu.module.css";

export const LangMenu = () => {
    const defaultOption = langOptions[0];

    const [lang, setLang] = useState(defaultOption);
    const [showOptions, setShowOptions] = useState(false);

    const handleLanguageSelect = (e) => {
        setLang(e.target.innerText);
        setShowOptions(false);
    }

    return (
        <div className={css.dropdown} onClick={() => setShowOptions(prevState => !prevState)}>
            <span className={css.language}>
                {lang}
            </span>
            <button type="button" className={css.arrow}>
                <MdKeyboardArrowDown style={{width: 18, height: 18}} />
            </button>

            {showOptions &&
                <ul className={css.options}>
                    {langOptions.map(o => 
                        <button 
                            type="button" 
                            key={o}
                            className={css.langOption}
                            onClick={handleLanguageSelect}
                        >
                            {o}
                        </button>
                    )}
                </ul>
            }         
        </div>
    )
}