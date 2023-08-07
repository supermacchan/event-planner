import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterByKeywords } from 'redux/filterSlice';

import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import css from "./SearchInput.module.css";

export const SearchInput = () => {
    const [keywords, setKeywords] = useState('');
    const dispatch = useDispatch();

    const changeKeywords = (e) => {
        setKeywords(e.target.value);
        dispatch(filterByKeywords(e.target.value));
    };

    const clearInput = () => {
        setKeywords('');
        dispatch(filterByKeywords(''));
    }

    return (
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
                onClick={clearInput}
            >
                <MdClose style={{width: 18, height: 18}} />
            </button>
        </div>
    )
}