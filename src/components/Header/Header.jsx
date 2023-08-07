import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
import { filterByKeywords } from 'redux/filterSlice';
import { CiSearch } from "react-icons/ci";
import { MdClose, MdKeyboardArrowDown } from "react-icons/md";
import { langOptions } from 'utils/options';
import css from "./Header.module.css";

export const Header = () => {
    const defaultOption = langOptions[0];
    const dispatch = useDispatch();
    const location = useLocation();

    const [keywords, setKeywords] = useState('');
    const [lang, setLang] = useState(defaultOption);
    const [showOptions, setShowOptions] = useState(false);

    const handleLanguageSelect = (e) => {
        setLang(e.target.innerText);
        setShowOptions(false);
    }

    const changeKeywords = e => {
        setKeywords(e.target.value)
        dispatch(filterByKeywords(e.target.value));
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.location.reload();
        }
    }

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Link to={"/"} onClick={handleLogoClick}>
                    <h1 className={css.title}>Event Planner</h1>
                </Link>
                
                <div className={css.dropdown} onClick={() => setShowOptions(prevState => !prevState)}>
                    <span className={css.language}>
                        {lang}
                    </span>
                    <button 
                        type="button"
                        className={css.arrow}
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
                        onChange={changeKeywords}
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