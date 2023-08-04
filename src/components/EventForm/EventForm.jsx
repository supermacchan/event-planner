import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DatePicker } from "./DatePicker/DatePicker";
import { convertDateFormat } from "utils/convertDateFormat";
import css from "./EventForm.module.css";

// import defaultImage from "../../images/events/default2.png";

export const EventForm = ({ event }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [category, setCategory]= useState('');
    const [priority, setPriority] = useState('');
    // const [image, setImage] = useState(defaultImage);

    const [startDate, setStartDate] = useState(new Date());

    const [showDatePicker, setShowDatePicker] = useState(false);

    // filling out the form fields when opening the Edit page
    useEffect(() => {
        if (!event) {
            return;
        }

        const { 
            name, 
            description, 
            category, 
            priority, 
            place, 
            date, 
            time, 
            // photo 
        } = event;
        setTitle(name);
        setDescription(description);
        setDate(date);
        setTime(time);
        setPlace(place);
        setCategory(category);
        setPriority(priority);

    }, [event]);

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "title": 
                setTitle(e.target.value);
                break;
            case "description": 
                setDescription(e.target.value);
                break;
            case "date": 
                setDate(e.target.value);
                break;
            case "time": 
                setTime(e.target.value);
                break;
            case "location": 
                setPlace(e.target.value);
                break;
            case "category": 
                setCategory(e.target.value);
                break;
            case "priority": 
                setPriority(e.target.value);
                break;
            default: 
                return;
        }
    }

    const handleDateChange = (date) => {
        setStartDate(date);
    }

    const handleSaveDate = () => {
        const selectedDate = convertDateFormat(startDate);
        setDate(selectedDate);
        setShowDatePicker(false);
    }

    const handleCloseCalendar = () => {
        setShowDatePicker(false);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // add notification 
        
        if (location.pathname === '/create') {
            navigate('/');
        }

        if (location.pathname === '/edit') {
            navigate('/event');
        }
    }

    return (
        <form className={css.form} onSubmit={handleFormSubmit}>
            <div className={css.container}>

                <div className={css.enabled}>
                    <label 
                        className={css.label} 
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input 
                        className={css.input}
                        type="text"
                        id="title" 
                        name="title" 
                        required
                        value={title}
                        onChange={handleInputChange}
                    />
                </div>
                
                <div className={css.enabled}>
                    <label 
                        className={css.label}  
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        className={css.textarea} 
                        type="text"
                        id="description" 
                        name="description" 
                        required
                        value={description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                
                <div className={css.enabled} 
                    style={{position: "relative"}}
                >
                    <label 
                        className={css.label} 
                        htmlFor="date"
                    >
                        Select date
                    </label>
                    <input 
                        className={css.input} 
                        type="text"
                        id="date" 
                        name="date" 
                        pattern="/^\d{2}\.\d{2}\.\d{4}$/"
                        required
                        value={date}
                        onChange={handleInputChange}
                        onClick={() => setShowDatePicker(true)}
                    />
                    
                    {showDatePicker && 
                        <div className={css.calendar}>
                            <DatePicker 
                                startDate={startDate}
                                onSelect={handleDateChange}
                                onClose={handleCloseCalendar}
                                onSave={handleSaveDate}
                            />
                        </div>
                    }
                </div>

                <div className={css.enabled}>
                    <label 
                        className={css.label}  
                        htmlFor="time"
                    >
                        Select time
                    </label>
                    <input 
                        className={css.input} 
                        type="time"
                        id="time" 
                        name="time" 
                        required
                        value={time}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={css.enabled}>
                    <label 
                        className={css.label}  
                        htmlFor="location"
                    >
                        Location
                    </label>
                    <input 
                        className={css.input} 
                        type="text"
                        id="location" 
                        name="location" 
                        pattern="/^[A-Za-z\s]+$/"
                        required
                        value={place}
                        onChange={handleInputChange}
                    />
                </div>
                
                {/* category - dropdown */}
                <div className={css.disabled}>
                    <label 
                        className={css.label} 
                        htmlFor="category"
                    >
                        Category
                    </label>
                    <input 
                        className={css.input} 
                        type="text"
                        id="category" 
                        name="category" 
                        disabled
                        value={category}
                        onChange={handleInputChange}
                    />
                </div>

                {/* image */}
                <div className={css.disabled}>
                    <label 
                        className={css.label} 
                        htmlFor="image"
                    >
                        Add picture
                    </label>
                    <input 
                        className={css.input} 
                        type="file"
                        id="image" 
                        name="image" 
                        disabled
                    />
                    {/* div to overlap over the file input */}
                    <div></div>
                </div>

                {/* priority - dropdown*/}
                <div className={css.disabled}>
                    <label 
                        className={css.label} 
                        htmlFor="priority"
                    >
                        Priority
                    </label>
                    <input 
                        className={css.input} 
                        type="text"
                        id="priority" 
                        name="priority" 
                        disabled
                        value={priority}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        
            {/* adjust text depending on the location */}
            <button type="submit" className={css.button}>
                {
                    location.pathname === '/create'
                    ? "Add event"
                    : "Save"
                }
            </button>
        </form>
    )
}