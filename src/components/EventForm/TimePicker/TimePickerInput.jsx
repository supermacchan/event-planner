import { TimePicker } from "./TimePicker";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import css from "../EventForm.module.css";

export const TimePickerInput = ({ 
    time, 
    handleInputChange,
    showTimePicker,
    toggleMenu
}) => {    
    return (
        <div className={css.enabled}>
            <label 
                className={css.label}  
                htmlFor="time"
            >
                Select time
            </label>
            <input 
                className={css.input} 
                type="text"
                id="time" 
                name="time" 
                placeholder="Select time"
                value={time}
                onChange={handleInputChange}
                onClick={() => toggleMenu("time")}
                style={{caretColor: "transparent"}}
            />
            <button 
                type="button" 
                className={css.inputBtn} 
                style={{width: "95%", justifyContent: "right"}}
                onClick={() => toggleMenu("time")}
            >
                {showTimePicker 
                    ? <MdKeyboardArrowUp style={{width: 24, height: 24}}/>
                    : <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                }
            </button>

            {showTimePicker && 
                <TimePicker onClick={() => toggleMenu("time")} />
            }
        </div>
    )
}