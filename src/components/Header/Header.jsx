import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { langOptions } from 'utils/options';
import css from "./Header.module.css";

export const Header = () => {
    const defaultOption = langOptions[0];

    const [keywords, setKeywords] = useState('');
    const [lang, setLang] = useState(defaultOption);
    const [showOptions, setShowOptions] = useState(false);

    const handleLanguageSelect = (e) => {
        setLang(e.target.innerText);
        setShowOptions(false);
    }

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Link to={"/"}>
                    <h1 className={css.title}>Event Planner</h1>
                </Link>
                
                <div className={css.dropdown}>
                    <span className={css.language}>
                        {lang}
                    </span>
                    <button 
                        type="button"
                        className={css.arrow}
                        onClick={() => setShowOptions(prevState => !prevState)}
                    >
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

                <div className={css.search}>
                    <label className={css.label} htmlFor="search">
                        <CiSearch style={{width: 24, height: 24}} />
                    </label>
                    <input 
                        className={css.input}
                        type="text" 
                        name="search"
                        placeholder="Search by keywords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                    <button 
                        type="button" 
                        className={css.clear} 
                        onClick={() => setKeywords('')}
                    >
                        <MdClose style={{width: 18, height: 18}} />
                    </button>
                </div>
            </div>
        </header>
    )
}