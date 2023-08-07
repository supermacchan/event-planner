import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "redux/filterSlice";
import { CiFilter } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia";
import { MdArrowUpward } from "react-icons/md";
import { nanoid } from "nanoid";
import { categories, sortingOptions } from "utils/options";
import css from "./Filters.module.css"

export const Filters = ({ isMobile }) => {
    const [category, setCategory] = useState("Category");
    const [showCategory, setShowCategory] = useState(false);
    const [showSortingOptions, setShowSortingOptions] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterByCategory(category));
    }, [category, dispatch]);

    const handleCategoryClick = () => {
        setShowCategory(prevState => !prevState);
        setShowSortingOptions(false);
    }

    const handleSortingClick = () => {
        setShowSortingOptions(prevState => !prevState);
        setShowCategory(false);
    }

    const handleCategorySelect = (e) => {
        setCategory(e.target.innerText);
    }

    return (
        <div className={css.container}>

            <div 
                className={
                    showCategory && isMobile
                    ? `${css.filterContainer} ${css.wideContainer}`
                    : css.filterContainer
                } 
            >
                <button 
                    className={
                        showCategory 
                        ? `${css.category} ${css.showMenu}`
                        : css.category
                    } 
                    type="button"
                    onClick={handleCategoryClick}
                >
                    <span 
                        className={
                            showCategory 
                            ? css.expandedButton
                            : css.buttonText
                        }
                    >
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
            
            <div className={
                    showSortingOptions && isMobile
                    ? `${css.filterContainer} ${css.wideContainer}`
                    : css.filterContainer
                } >
                <button 
                    className={
                        showSortingOptions 
                        ? `${css.sort} ${css.showMenu}`
                        : css.sort
                    } 
                    type="button"
                    onClick={handleSortingClick}
                >
                    <span 
                        className={
                            showSortingOptions 
                            ? css.expandedButton
                            : css.buttonText
                        }
                    >
                        Sort by
                    </span>
                    <LiaSlidersHSolid style={{width: 24, height: 24}} />
                </button>

                {showSortingOptions && 
                    <ul className={css.optionList}>
                        {sortingOptions.map(o => 
                            <button 
                                type="button" 
                                key={nanoid()}
                                className={css.option}
                            >
                                {o}
                                <MdArrowUpward 
                                    className={css.arrowIcon}
                                    style={{width: 18, height: 18}}
                                 />
                            </button>
                        )}
                    </ul>
                }
            </div>
        
        </div>
    )
}