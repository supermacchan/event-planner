import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DatePicker } from "./DatePicker/DatePicker";
import { convertDateFormat } from "utils/convertDateFormat";
import { MdClose, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import css from "./EventForm.module.css";
import defaultImage from "../../images/events/default2.png";

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

    const collectData = () => {
        const newEvent = {
            id: nanoid(),
            name: title,
            description,
            category,
            priority,
            place,
            date,
            time,
            photo: defaultImage
        }

        return newEvent;
    }

    const formValidation = () => {
        const form =  document.getElementById("form");
        const inputs = form.querySelectorAll("input");
        
        const validate = Array.from(inputs).every(i => i.value.trim());
        console.log(validate);

        if (!validate) {
            inputs.forEach(function(input) {
            // Check if the input is empty (no value entered)
            if (!input.value.trim()) {
                    input.setCustomValidity("This field is required.");
                } else {
                    input.setCustomValidity("");
                }
            });

            return false;
        }

        return true;
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const validate = formValidation();

        if (!validate) {
            toast.error("Please fill out all the required fields!");
            return;
        }

        const newEvent = collectData();
        console.log(newEvent);
        
        toast.success("A new event has been created!");

        if (location.pathname === '/create') {
            navigate('/');
        }

        if (location.pathname === '/edit') {
            navigate('/event');
        }
    }

    return (
        <form className={css.form} id="form" onSubmit={handleFormSubmit}>
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
                        pattern="[A-Z][A-Za-z0-9 ]*"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        onClick={() => setTitle('')}
                    >
                        <MdClose style={{width: 18, height: 18}} />
                    </button>
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
                        value={description}
                        onChange={handleInputChange}
                    ></textarea>
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        onClick={() => setDescription('')}
                    >
                        <MdClose style={{width: 18, height: 18}} />
                    </button>
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
                        placeholder="Choose a date"
                        value={date}
                        onChange={handleInputChange}
                        onClick={() => setShowDatePicker(true)}
                    />
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        onClick={() => setShowDatePicker(prevState => !prevState)}
                    >
                        {showDatePicker 
                            ? <MdKeyboardArrowUp style={{width: 24, height: 24}}/>
                            : <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                        }
                    </button>
                    
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
                        value={time}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        // onClick={() => setKeywords('')}
                    >
                        <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                    </button>
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
                        pattern="[A-Z][A-Za-z ]*"
                        value={place}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        onClick={() => setPlace('')}
                    >
                        <MdClose style={{width: 18, height: 18}} />
                    </button>
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
                        placeholder="Select category"
                        disabled
                        value={category}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        // onClick={() => setKeywords('')}
                    >
                        <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                    </button>
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
                    <div className={css.fakeInput}>
                        <span className={css.fakePlaceholder}>Select image</span>
                    </div>
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        // onClick={() => setImage('')}
                    >
                        <MdClose style={{width: 18, height: 18}} />
                    </button>
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
                        placeholder="Select priority"
                        disabled
                        value={priority}
                        onChange={handleInputChange}
                    />
                    <button 
                        type="button" 
                        className={css.inputBtn} 
                        // onClick={() => setKeywords('')}
                    >
                        <MdKeyboardArrowDown style={{width: 24, height: 24}} />
                    </button>
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