import { sortingOptions } from "utils/options";
import { nanoid } from "nanoid";

import { LiaSlidersHSolid } from "react-icons/lia";
import { MdArrowUpward } from "react-icons/md";
import css from "../Filters.module.css";

export const SortingFilter = ({
    isMobile,
    showSortingOptions,
    handleSortingClick
}) => {
    return (
        <div 
            className={showSortingOptions && isMobile
                ? `${css.filterContainer} ${css.wideContainer}`
                : css.filterContainer} 
        >
        <button 
            className={showSortingOptions 
                ? `${css.sort} ${css.showMenu}`
                : css.sort} 
            type="button"
            onClick={handleSortingClick}
        >
            <span className={showSortingOptions ? css.expandedButton : css.buttonText}>
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
                        <MdArrowUpward className={css.arrowIcon} />
                    </button>
                )}
            </ul>
        }
    </div>
    )
}