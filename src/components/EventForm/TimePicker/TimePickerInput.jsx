import { useRef } from "react";
import { TimePicker } from "./TimePicker";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import css from "../EventForm.module.css";

export const TimePickerInput = ({ 
    time, 
    handleInputChange,
    showTimePicker,
    toggleMenu,
    saveTime
}) => {   
    const timePickerInputRef = useRef(null);

    const handleSelectTime = () => {
        if (timePickerInputRef.current) {
            timePickerInputRef.current.setCustomValidity('');
        }
    }

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
                ref={timePickerInputRef}
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
                <TimePicker 
                    initialTime={time}
                    saveTime={saveTime}
                    handleSelectTime={handleSelectTime}
                />
            }
        </div>
    )
}