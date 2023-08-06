import { MdClose } from "react-icons/md";
import css from "../EventForm.module.css";

export const TitleInput = ({
    title,
    handleInputChange,
    reset
}) => {
    return (
        <div className={css.enabled}>
            <label 
                className={css.label} 
                htmlFor="title"
            >
                Title
            </label>
            <input 
                className={css.input}
                type="text"
                id="title" 
                name="title" 
                pattern="[A-Z][A-Za-z0-9 ]*"
                value={title}
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