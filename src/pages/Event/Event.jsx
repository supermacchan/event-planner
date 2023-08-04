import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Main } from "components/Main/Main";
import { BackButton } from "components/BackButton/BackButton";
import { PageTitle } from "components/PageTitle/PageTitle";
import { EventInfo } from 'components/EventInfo/EventInfo';
import css from "./Event.module.css";
import { events } from "data/data";
// import { toast } from 'react-toastify';

const Event = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    // const [loading, setLoading] = useState(false);

    // will fetch data via id
    // temporary for development:
    useEffect(() => {
        const currentEvent = events.find(e => Number(e.id) === Number(id));

        if (!currentEvent) {
            navigate('/not-found');
        }

        setEvent(currentEvent);
    }, [id, navigate])

    return (
        <Main>
            <BackButton />

            {event && 
                <div className={css.event}>
                    <PageTitle title={event.name} />
                    <EventInfo event={event}/>
                </div> 
            }
        </Main>
    )
}

export default Event;