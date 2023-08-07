import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { operations } from "redux/operations";
import { selectCurrent, selectIsLoading, selectError } from "redux/selectors";
import { toast } from 'react-toastify';

import { Loader } from "components/Loader/Loader";
import { Main } from "components/Main/Main";
import { BackButton } from "components/BackButton/BackButton";
import { PageTitle } from "components/PageTitle/PageTitle";
import { EventInfo } from 'components/EventInfo/EventInfo';
import css from "./Event.module.css";

const Event = () => {
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

            {isLoading && <Loader />}

            {!isLoading && event && 
                <div className={css.event}>
                    <PageTitle title={event.name} />
                    <EventInfo event={event}/>
                </div> 
            }
        </Main>
    )
}

export default Event;