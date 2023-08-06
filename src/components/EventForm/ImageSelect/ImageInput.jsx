import { MdClose } from "react-icons/md";
import css from "../EventForm.module.css";

export const ImageInput = () => {
    return (
        <div className={css.disabled}>
            <label 
                className={css.label} 
                htmlFor="image"
             >
                Add picture
            </label>
            <input 
                className={css.input} 
                type="file"
                id="image" 
                name="image" 
                disabled
            />
                    
            {/* div to overlap over the file input */}
            <div className={css.fakeInput}>
                <span className={css.fakePlaceholder}>Select image</span>
            </div>
            <button 
                type="button" 
                className={css.inputBtn} 
            >
                <MdClose style={{width: 18, height: 18}} />
                </button>
            </div>
    )
}