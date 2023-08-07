import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
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
import { EventCard } from "components/EventCard/EventCard";
import { Pagination } from "components/Pagination/Pagination";
import { AiOutlinePlus } from "react-icons/ai";
import css from "./Home.module.css";

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(true);
    const [eventsPerPage, setEventsPerPage] = useState(6);

    const events = useSelector(selectEvents);
    const isLoading = useSelector(selectIsLoading);
    const category = useSelector(selectCategory);
    const keywords = useSelector(selectKeywords);

    const location = useLocation();
    const dispatch = useDispatch();

    // sort by categories
    const normalizedCategory = category.toLowerCase();
    const categorizedEvents = (normalizedCategory === "category")
    ? events
    : events.filter(event => event.category.toLowerCase().includes(normalizedCategory));

    // sort by search keywords
    const normalizedKeywords = keywords.toLowerCase();
    const filteredEvents = categorizedEvents.filter(event => event.name.toLowerCase().includes(normalizedKeywords));

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

    // fetch data
    useEffect(() => {
        dispatch(operations.fetchAllEvents())
    }, [dispatch])

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    return (
        <Main>
            <div className={css.topBar}>
                <div className={css.menu}>
                    <Filters isMobile={isMobile} />
                    <Link 
                        to={"/create"} 
                        state={{ from: location.state?.from ?? "/" }}
                    >
                        <button type="button" className={css.addButton}>
                            <AiOutlinePlus 
                                style={{width: 24, height: 24}} 
                            /> 
                            <span className={css.buttonText}>Add new event</span>
                        </button>
                    </Link>
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