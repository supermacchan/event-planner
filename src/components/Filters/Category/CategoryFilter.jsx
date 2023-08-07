import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { filterByCategory } from "redux/filterSlice";
import { categories } from "utils/options";
import { nanoid } from "nanoid";

import { CiFilter } from "react-icons/ci";
import css from "../Filters.module.css";

export const CategoryFilter = ({
    isMobile,
    showCategory,
    handleCategoryClick,
}) => {
    const [category, setCategory] = useState("Category");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterByCategory(category));
    }, [category, dispatch]);

    const handleCategorySelect = (e) => {
        setCategory(e.target.innerText);
    }

    return (
        <div 
            className={showCategory && isMobile 
                ? `${css.filterContainer} ${css.wideContainer}`
                : css.filterContainer} 
        >
            <button 
                className={showCategory 
                    ? `${css.category} ${css.showMenu}`
                    : css.category} 
                type="button"
                onClick={handleCategoryClick}
            >
                <span className={showCategory ? css.expandedButton : css.buttonText}>
                    {category}
                </span>
                <CiFilter style={{width: 24, height: 24}} />
            </button>

            {showCategory && 
                <ul className={css.optionList}>
                    {categories.map(c => 
                        <button 
                            type="button" 
                            key={nanoid()}
                            className={css.option}
                            onClick={handleCategorySelect}
                        >
                            {c}
                        </button>
                    )}
                </ul>
            }
        </div>
    )
}