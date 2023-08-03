import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const BackButton = () => {
    const location = useLocation();

    return (
        <Link to={location.state?.from ?? '/'}>
            <button type='button'>
                <AiOutlineArrowLeft />
                Back
            </button>
        </Link>
    )
}