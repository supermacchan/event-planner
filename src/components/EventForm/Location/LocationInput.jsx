import { MdClose } from "react-icons/md";
import css from "../EventForm.module.css";

export const LocationInput = ({
    place,
    handleInputChange,
    reset
}) => {
    return (
        <div className={css.enabled}>
            <label 
                className={css.label}  
                htmlFor="location"
            >
                Location
            </label>
            <input 
                className={css.input} 
                type="text"
                id="location" 
                name="location" 
                pattern="[A-Z][A-Za-z ]*"
                value={place}
                onChange={handleInputChange}
            />
            <button 
                type="button" 
                className={css.inputBtn} 
                onClick={reset}
            >
                <MdClose style={{width: 18, height: 18}} />
            </button>
        </div>
    )
}