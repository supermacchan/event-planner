import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Main } from "components/Main/Main";
import { PageTitle } from "components/PageTitle/PageTitle";
import { Filters } from "components/Filters/Filters";
import { EventCard } from "components/EventCard/EventCard";
import { Pagination } from "components/Pagination/Pagination";
import { AiOutlinePlus } from "react-icons/ai";
import css from "./Home.module.css";
import { events } from "data/data";

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(true);
    const location = useLocation();

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
    }, [windowWidth]);

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
            
            <ul className={css.cardList}> 
                {events.map(event => <li key={event.id}><EventCard event={event}/></li>)}
            </ul>

            <Pagination isMobile={isMobile}/>
        </Main>
    )
}

export default Home;