import { useState, useEffect } from "react";
import { PageTitle } from "components/PageTitle/PageTitle";
import { Filters } from "components/Filters/Filters";
import { EventCard } from "components/EventCard/EventCard";
import { AiOutlinePlus } from "react-icons/ai";
import { 
    Main,
    Menu,
    Buttons,
    AddButton,
    ButtonText,
    CardList 
} from "./Home.styled";
import { events } from "data/data";

const Home = () => {
    const [windowWidth, setWindowWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(true);

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
            <Menu>
                <Buttons>
                    <Filters isMobile={isMobile}/>
                    <AddButton type="button">
                        <AiOutlinePlus 
                            style={{width: 24, height: 24}} 
                        /> 
                        {!isMobile && 
                            <ButtonText>Add new event</ButtonText>
                        }
                    </AddButton>
                </Buttons>

                {!isMobile && 
                    <PageTitle 
                        title="My events" 
                    />
                }
            </Menu>
            
            <CardList> 
                {events.map(event => <li key={event.id}><EventCard event={event}/></li>)}
            </CardList>
        </Main>
    )
}

export default Home;