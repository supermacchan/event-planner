import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Main } from "components/Main/Main";
import { PageTitle } from "components/PageTitle/PageTitle";
import { BackButton } from "components/BackButton/BackButton";
import { EventForm } from "components/EventForm/EventForm";
import { events } from "data/data";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);

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
            <PageTitle title="Edit event" />
            <EventForm event={event} />  
        </Main>
    )
}

export default Edit;