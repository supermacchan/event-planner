import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { nanoid } from "nanoid";
import { priorities } from "utils/options";
import css from "../EventForm.module.css";

export const PriorityInput = ({
    priority,
    handleInputChange,
    showPriorities,
    toggleMenu,
    handleSelect
}) => {
    return (
        <div className={css.enabled}>
            <label 
                className={css.label} 
                htmlFor="priority"
            >
                Priority
            </label>
            <input 
                className={css.input} 
                type="text"
                id="priority" 
                name="priority" 
                placeholder="Select priority"    
                value={priority}
                onChange={handleInputChange}
                style={{caretColor: "transparent"}}
            />
            <button 
                type="button" 
                className={css.inputBtn} 
                style={{width: "95%", justifyContent: "right"}}
                onClick={() => toggleMenu("priority")}
            >
                {showPriorities
                    ? <MdKeyboardArrowUp style={{width: 24, height: 24}}/>
                    : <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                }
            </button>

            {showPriorities &&
                <ul className={css.popUp}>
                    {priorities.map(p => 
                        <button 
                            type="button" 
                            key={nanoid()}
                            className={css.popUpOption}
                            onClick={(e) => handleSelect("priority", e)}
                        >
                            {p}
                        </button>
                    )}     
                </ul>
            }  
        </div>
    )
}