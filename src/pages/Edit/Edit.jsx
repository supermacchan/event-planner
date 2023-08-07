import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { operations } from "redux/operations";
import { selectCurrent, selectIsLoading, selectError } from "redux/selectors";
import { toast } from 'react-toastify';

import { Loader } from "components/Loader/Loader";
import { Main } from "components/Main/Main";
import { PageTitle } from "components/PageTitle/PageTitle";
import { BackButton } from "components/BackButton/BackButton";
import { EventForm } from "components/EventForm/EventForm";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const event = useSelector(selectCurrent);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    // fetch data
    useEffect(() => {
        dispatch(operations.fetchEventDetails(id));

        if (error) {
            toast.error("Oops! Something went wrong...");
            navigate('/not-found');
        }

    }, [dispatch, navigate, id, error])

    return (
        <Main>
            <BackButton />
            <PageTitle title="Edit event" />

            {isLoading && <Loader />}
            
            {!isLoading && event && <EventForm event={event} />}
        </Main>
    )
}

export default Edit;