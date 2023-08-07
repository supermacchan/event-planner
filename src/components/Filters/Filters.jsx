import { useState  } from "react";

import { CategoryFilter } from "./Category/CategoryFilter";
import { SortingFilter } from "./Sort/SortFilter";

import css from "./Filters.module.css";

export const Filters = ({ isMobile }) => {
    const [showCategory, setShowCategory] = useState(false);
    const [showSortingOptions, setShowSortingOptions] = useState(false);

    const handleCategoryClick = () => {
        setShowCategory(prevState => !prevState);
        setShowSortingOptions(false);
    }

    const handleSortingClick = () => {
        setShowSortingOptions(prevState => !prevState);
        setShowCategory(false);
    }

    return (
        <div className={css.container}>
            <CategoryFilter
                isMobile={isMobile}
                showCategory={showCategory}
                handleCategoryClick={handleCategoryClick}
            />

            <SortingFilter 
                isMobile={isMobile}
                showSortingOptions={showSortingOptions}
                handleSortingClick={handleSortingClick}
            />
        </div>
    )
}