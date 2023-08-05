import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { operations } from "redux/operations";
import { selectEvents, selectIsLoading } from "redux/selectors";

import { Loader } from "components/Loader/Loader";
import { Main } from "components/Main/Main";
import { PageTitle } from "components/PageTitle/PageTitle";
import { Filters } from "components/Filters/Filters";
import { EventCard } from "components/EventCard/EventCard";
import { Pagination } from "components/Pagination/Pagination";
import { AiOutlinePlus } from "react-icons/ai";
import css from "./Home.module.css";

const Home = () => {
    // const [events, setEvents] = useState([]);
    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(true);
    const [eventsPerPage, setEventsPerPage] = useState(6);

    const events = useSelector(selectEvents);
    const isLoading = useSelector(selectIsLoading);

    const location = useLocation();
    const dispatch = useDispatch();

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
        // console.log(events)
        // const firstRender = async () => {
        //     const { payload } = await dispatch(operations.fetchAllEvents());
        //     console.log(payload);
        //     console.log(events);

        //     // setEvents(payload);
        // }
        
        // firstRender();
    }, [dispatch])

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    return (
        <Main>
            <div className={css.menu}>
                <div className={css.buttons}>
                    <Filters isMobile={isMobile}/>
                    <Link 
                        to={"/create"} 
                        state={{ from: location.state?.from ?? "/" }}
                    >
                        <button type="button" className={css.addButton}>
                            <AiOutlinePlus 
                                style={{width: 24, height: 24}} 
                            /> 
                            {!isMobile && 
                                <span className={css.buttonText}>Add new event</span>
                            }
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
                {events.length > 0 && events.map(event => <li key={event.id}><EventCard event={event}/></li>)}
            </ul>

            {events.length > eventsPerPage &&
                <Pagination isMobile={isMobile}/>
            }
            
        </Main>
    )
}

export default Home;