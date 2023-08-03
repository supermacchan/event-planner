import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Button } from './BackButton.styled';

export const BackButton = () => {
    const location = useLocation();

    return (
        <Link to={location.state?.from ?? '/'}>
            <Button type='button'>
                <AiOutlineArrowLeft style={{width: 18, height: 18}} />
                Back
            </Button>
        </Link>
    )
}