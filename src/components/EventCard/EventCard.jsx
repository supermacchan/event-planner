import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { 
    Card,
    Filters,
    Category,
    Priority,
    ImageContainer,
    Image,
    Info,
    Title,
    Description,
    Button
} from "./EventCard.styled"

export const EventCard = ({ event: { 
    id,
    name, 
    description, 
    category, 
    priority, 
    place, 
    date, 
    time, 
    photo 
} }) => {
    const [color, setColor] = useState(null);
    const [more, setMore] = useState(false);

    useEffect(() => {
        switch (priority) {
            case "high":
                setColor("#FF2B77");
                break;
            case "medium": 
                setColor("#E2A300");
                break;
            case "low": 
                setColor("#6BD475");
                break;
            default:
                return;
        }
    }, [priority])

    const handleCardClick = () => {
        setMore(prevstate => !prevstate);
    }

    return (
        <Card onClick={handleCardClick}>
            <Filters>
                <Category>{category}</Category>
                <Priority style={{color: color}}>{priority}</Priority>
            </Filters>
            
            <ImageContainer style={{height: more ? "280px" : "336px"}}>
                <Image src={photo} alt={name} />

                <Info>
                    <span>
                        {date} at {time}
                    </span>
                    <span>{place}</span>
                </Info>
            </ImageContainer>

            <Title>{name}</Title>
            <Description>{description}</Description>

            {more && 
                <Link to={`/event/${id}`} >
                    <Button type="button">More Info</Button>
                </Link>
            }
            
        </Card>
    )
}