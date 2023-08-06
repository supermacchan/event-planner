import { MdClose } from "react-icons/md";
import css from "../EventForm.module.css";

export const DescriptionInput = ({
    description,
    handleInputChange,
    reset
}) => {
    return (
        <div className={css.enabled}>
            <label 
                className={css.label}  
                htmlFor="description"
            >
                Description
            </label>
            <textarea
                className={css.textarea} 
                type="text"
                id="description" 
                name="description" 
                value={description}
                onChange={handleInputChange}
            ></textarea>
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