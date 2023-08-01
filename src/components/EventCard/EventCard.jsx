import { useState, useEffect } from "react";
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
            <Filters>
                <Category>{category}</Category>
                <Priority style={{color: color}}>{priority}</Priority>
            </Filters>
            
            <ImageContainer>
                <Image src={photo} alt={name} />
            </ImageContainer>

            <Info>
                <span>
                    {date} at {time}
                </span>
                <span>{place}</span>
            </Info>

            <Title>{name}</Title>
            <Description>{description}</Description>
            <Button type="button">More Info</Button>
        </Card>
    )
}