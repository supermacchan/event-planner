import { useRef } from "react";

import { nanoid } from "nanoid";
import { categories } from "utils/options";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import css from "../EventForm.module.css";

export const CategoryInput = ({
    category,
    handleInputChange,
    showCategories,
    toggleMenu,
    handleSelect
}) => {
    const categoryInputRef = useRef(null);

    const handleCategorySelect = (e) => {
        handleSelect("category", e);

        if (categoryInputRef.current) {
            categoryInputRef.current.setCustomValidity('');
        }
    }

    return (
        <div className={css.enabled}>
            <label 
                className={css.label} 
                htmlFor="category"
            >
                Category
            </label>
            <input 
                className={css.input} 
                type="text"
                id="category" 
                name="category" 
                placeholder="Select category"
                value={category}
                onChange={handleInputChange}
                style={{caretColor: "transparent"}}
                ref={categoryInputRef}
            />
            <button 
                type="button" 
                className={css.inputBtn} 
                style={{width: "95%", justifyContent: "right"}}
                onClick={() => toggleMenu("category")}
            >
                {showCategories
                    ? <MdKeyboardArrowUp style={{width: 24, height: 24}}/>
                    : <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                }
            </button>

            {showCategories &&
                <ul className={css.popUp}>
                    {categories.map(c => 
                        <button 
                            type="button" 
                            key={nanoid()}
                            className={css.popUpOption}
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