import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import css from "./EventCard.module.css";

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
        <div className={css.card}>
            
            <div className={css.filters}>
                <span className={css.category}>{category}</span>
                <span className={css.priority} style={{color: color}}>{priority}</span>
            </div>
            
            <div className={css.imageContainer}>
                <img className={css.image} src={photo} alt={name} />

                <div className={css.info}>
                    <span>
                        {date} at {time}
                    </span>
                    <span>{place}</span>
                </div>
            </div>

            <h3 className={css.title}>{name}</h3>
            <p className={css.description}>{description}</p>

            <Link to={`/event/${id}`} >
                <button type="button" className={css.moreBtn}>More Info</button>
            </Link>
            
        </div>
    )
}