import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { operations } from "redux/operations";
import { 
    selectEvents, 
    selectIsLoading, 
    selectCategory,
    selectKeywords
} from "redux/selectors";

import { Loader } from "components/Loader/Loader";
import { Main } from "components/Main/Main";
import { PageTitle } from "components/PageTitle/PageTitle";
import { Filters } from "components/Filters/Filters";
import { AddEventButton } from "components/AddEventButton/AddEventButton";
import { EventCard } from "components/EventCard/EventCard";
import { Pagination } from "components/Pagination/Pagination";

import css from "./Home.module.css";

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(true);
    const [eventsPerPage, setEventsPerPage] = useState(6);

    const events = useSelector(selectEvents);
    const isLoading = useSelector(selectIsLoading);
    const category = useSelector(selectCategory);
    const keywords = useSelector(selectKeywords);

    const dispatch = useDispatch();

    // sort by categories
    const normalizedCategory = category.toLowerCase();
    const categorizedEvents = (normalizedCategory === "category")
    ? events
    : events.filter(event => event.category.toLowerCase().includes(normalizedCategory));

    // sort by search keywords
    const normalizedKeywords = keywords.toLowerCase();
    const filteredEvents = categorizedEvents.filter(event => event.name.toLowerCase().includes(normalizedKeywords));

    // fetch data
    useEffect(() => {
        dispatch(operations.fetchAllEvents())
    }, [dispatch]);

    // tracking window size (for changing screen orientation on mobile devices)
    useEffect(() => {
        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    //  device check
    useEffect(() => {
        if (windowWidth >= 768) {
        setIsMobile(false);
        }

        if (windowWidth < 768) {
        setIsMobile(true);
        }

        if (windowWidth >= 1280) {
            setEventsPerPage(8);
        } else {
            setEventsPerPage(6);
        }
    }, [windowWidth]);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    return (
        <Main>
            <div className={css.topBar}>

                <div className={css.menu}>
                    <Filters isMobile={isMobile} />
                    <AddEventButton />
                </div>

                {!isMobile && 
                    <PageTitle 
                        title="My events" 
                    />
                }
            </div>

            {isLoading && <Loader />}
            
            <ul className={css.cardList}> 
                {filteredEvents.length > 0 && filteredEvents.map(event => 
                    <li key={event.id}>
                        <EventCard event={event}/>
                    </li>
                )}
            </ul>

            {filteredEvents.length >= eventsPerPage &&
                <Pagination isMobile={isMobile}/>
            }
            
        </Main>
    )
}

export default Home;