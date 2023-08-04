import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import css from "./Header.module.css";
import { MdClose } from "react-icons/md"
import { AiOutlineDown } from "react-icons/ai";

export const Header = () => {
    const [keywords, setKeywords] = useState('');

    const options = [
        'UK', 'UA', 'EN'
    ];
    const defaultOption = options[0];

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Link to={"/"}>
                    <h1 className={css.title}>Event Planner</h1>
                </Link>
                
                <Dropdown 
                    options={options} 
                    value={defaultOption} 
                    className={css.dropdown}
                    controlClassName={css.control}
                    placeholderClassName={css.placeholder}
                    menuClassName={css.menu}
                    arrowClassName={css.arrow}
                    arrowOpen={<AiOutlineDown />}
                />

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