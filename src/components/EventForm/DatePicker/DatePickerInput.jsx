import { useState } from "react";
import { DatePicker } from "./DatePicker";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import css from "../EventForm.module.css";

export const DatePickerInput = ({
    date,
    handleInputChange,
    showDatePicker,
    toggleMenu,
    handleSaveDate
}) => {
    const [startDate, setStartDate] = useState(new Date());

    const handleDateChange = (date) => {
        setStartDate(date);
    }

    return (
        <div className={css.enabled} 
            style={{position: "relative"}}
        >
            <label 
                className={css.label} 
                htmlFor="date"
            >
                Select date
            </label>
            <input 
                className={css.input} 
                type="text"
                id="date" 
                name="date" 
                placeholder="Select date"
                value={date}
                onChange={handleInputChange}
                onClick={() => toggleMenu("date")}
                style={{caretColor: "transparent"}}
            />
            <button 
                type="button" 
                className={css.inputBtn} 
                style={{width: "95%", justifyContent: "right"}}
                onClick={() => toggleMenu("date")}
            >
                {showDatePicker 
                    ? <MdKeyboardArrowUp style={{width: 24, height: 24}}/>
                    : <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                }
            </button>
                    
            {showDatePicker && 
                <div className={css.calendar}>
                    <DatePicker 
                        startDate={startDate}
                        onSelect={handleDateChange}
                        onClose={() => toggleMenu("date")}
                        onSave={() => handleSaveDate(startDate)}
                    />
                </div>
            }
        </div>
    )
}