import { Link, useLocation } from 'react-router-dom';

import { AiOutlinePlus } from "react-icons/ai";
import css from "./AddEventButton.module.css";

export const AddEventButton = () => {
    const location = useLocation();

    return (
        <Link 
            to={"/create"} 
            state={{ from: location.state?.from ?? "/" }}
        >
            <button type="button" className={css.addButton}>
                <AiOutlinePlus style={{width: 24, height: 24}} /> 
                <span className={css.buttonText}>Add new event</span>
            </button>
        </Link>
    )
}