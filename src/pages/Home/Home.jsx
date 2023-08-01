import { PageTitle } from "components/PageTitle/PageTitle";
import { Filters } from "components/Filters/Filters";
import { EventCard } from "components/EventCard/EventCard";
import { AiOutlinePlus } from "react-icons/ai";
import { events } from "data/data";

const Home = () => {
    return (
        <main>
            <PageTitle 
                title="My events" 
            />
            <Filters />
            <button type="button">
                <AiOutlinePlus /> Add new event
            </button>
            {/* event list will map events */}
            <ul> 
                {events.map(event => <EventCard key={event.id} event={event}/>)}
            </ul>
        </main>
    )
}

export default Home;