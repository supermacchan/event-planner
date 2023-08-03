import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Main } from "components/Main/Main";
import { BackButton } from "components/BackButton/BackButton";
import { PageTitle } from "components/PageTitle/PageTitle";
import { EventInfo } from 'components/EventInfo/EventInfo';
import { EventContainer } from './Event.styled';
import { events } from "data/data";
// import { toast } from 'react-toastify';

const Event = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    // const [loading, setLoading] = useState(false);

    // will fetch data via id
    // temporary for development:
    useEffect(() => {
        const currentEvent = events.find(e => Number(e.id) === Number(id));
        setEvent(currentEvent);
    }, [id])

    return (
        <Main>
            <BackButton />

            {event && 
                <EventContainer>
                    <PageTitle title={event.name} />
                    <EventInfo event={event}/>
                </EventContainer> 
            }
        </Main>
    )
}

export default Event;