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

    return (
        <div>
            <span>{category}</span>
            <span>{priority}</span>
            <img src={photo} alt={name} />
            <div>
                <span>
                    {date} at {time}
                </span>
                <span>{place}</span>
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
            <button type="button">More Info</button>
        </div>
    )
}