import { useState, useEffect } from "react";
import { Link, useLocation  } from 'react-router-dom';
import { 
    Card,
    ImageContainer,
    Image,
    Description,
    Info,
    Category,
    Priority,
    Where,
    When,
    Actions,
    EditButton,
    DeleteButton
} from "./EventInfo.styled";

export const EventInfo = ({ event: { 
    id,
    description, 
    category, 
    priority, 
    place, 
    date, 
    time, 
    photo 
} }) => {
    const [color, setColor] = useState(null);
    const location = useLocation();

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

    return (
        <Card>
            <ImageContainer>
                <Image src={photo} alt="event illustration" />
            </ImageContainer>
            <Description>{description}</Description>

            <Info>
                <Category>{category}</Category>
                <Priority style={{color: color}}>{priority}</Priority>
                <Where>{place}</Where>
                <When>
                    {date} at {time}
                </When>
            </Info>

            <Actions>
                <Link 
                    to={`/edit/${id}`}
                    state={{ from: location.state?.from ?? `/event/${id}` }}
                >
                    <EditButton type="button">Edit</EditButton>
                </Link>
                <DeleteButton type="button">Delete event</DeleteButton>
            </Actions>
        </Card>
    )
}