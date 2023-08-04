import { useState, useEffect } from "react";
import { Link, useLocation  } from 'react-router-dom';
import css from "./EventInfo.module.css";

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
        <div className={css.card}>
            <div className={css.imageContainer}>
                <img src={photo} alt="event illustration" className={css.image}/>
            </div>
            <p className={css.description}>{description}</p>

            <div className={css.info}>
                <span className={css.category}>{category}</span>
                <span className={css.priority} style={{color: color}}>{priority}</span>
                <span className={css.where}>{place}</span>
                <span className={css.when}>
                    {date} at {time}
                </span>
            </div>

            <div className={css.actions}>
                <Link 
                    to={`/edit/${id}`}
                    state={{ from: location.state?.from ?? `/event/${id}` }}
                >
                    <button className={css.editButton} type="button">Edit</button>
                </Link>
                <button className={css.deleteButton} type="button">Delete event</button>
            </div>
        </div>
    )
}