import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { nanoid } from "nanoid";
import { categories } from "utils/options";
import css from "../EventForm.module.css";

export const CategoryInput = ({
    category,
    handleInputChange,
    showCategories,
    toggleMenu,
    handleSelect
}) => {
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
                            onClick={(e) => handleSelect("category", e)}
                        >
                            {c}
                        </button>
                    )}     
                </ul>
            }  
        </div>
    )
}