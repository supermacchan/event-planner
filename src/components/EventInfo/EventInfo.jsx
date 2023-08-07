import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate  } from 'react-router-dom';

import { operations } from "redux/operations";
import { adjustDate } from "utils/convertDateFormat";

import { toast } from "react-toastify";
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
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const formattedDate = adjustDate(date);

    const handleDelete = async () => {
        await dispatch(operations.deleteEvent(id));
        toast.success("The event has been deleted!")
        navigate('/');
    }

    return (
        <div className={css.card}>
            <div className={css.imageContainer}>
                <img src={photo} alt="event illustration" className={css.image}/>
            </div>
            <p className={css.description}>{description}</p>

            <div className={css.info}>
                { category !== "" &&
                    <span className={css.category}>{category}</span>
                }
                { priority !== "" &&
                    <span className={css.priority} style={{color: color}}>{priority}</span>
                }
                <span className={css.where}>{place}</span>
                <span className={css.when}>
                    {formattedDate} at {time}
                </span>
            </div>

            <div className={css.actions}>
                <Link 
                    to={`/edit/${id}`}
                    state={{ from: location.state?.from ?? `/event/${id}` }}
                >
                    <button className={css.editButton} type="button">Edit</button>
                </Link>
                <button 
                    className={css.deleteButton} 
                    type="button"
                    onClick={handleDelete}
                >
                    Delete event
                </button>
            </div>
        </div>
    )
}