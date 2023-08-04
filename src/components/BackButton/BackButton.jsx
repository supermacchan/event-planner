import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import css from "./BackButton.module.css";

export const BackButton = () => {
    const location = useLocation();

    return (
        <Link to={location.state?.from ?? '/'}>
            <button className={css.button} type='button'>
                <AiOutlineArrowLeft style={{width: 18, height: 18}} />
                Back
            </button>
        </Link>
    )
}