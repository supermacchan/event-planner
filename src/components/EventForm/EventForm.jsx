import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { operations } from "redux/operations";

import { TitleInput } from "./Title/TitleInput";
import { DescriptionInput } from "./Description/DescriptionInput";
import { DatePickerInput } from "./DatePicker/DatePickerInput";
import { TimePickerInput } from "./TimePicker/TimePickerInput";
import { LocationInput } from "./Location/LocationInput";
import { CategoryInput } from "./CategorySelect/CategoryInput";
import { PriorityInput } from "./PrioritySelect/PriorityInput";
import { ImageInput } from "./ImageSelect/ImageInput";

import { convertDateFormat } from "utils/convertDateFormat";
import { controlInput } from "utils/form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import css from "./EventForm.module.css";

export const EventForm = ({ event }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [category, setCategory]= useState('');
    const [priority, setPriority] = useState('');
    const [image, setImage] = useState(null);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const [showPriorities, setShowPriorities] = useState(false);

    const defaultImage = "https://i.ibb.co/FhD3YJX/default2.png";

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
            photo 
        } = event;
        setTitle(name);
        setDescription(description);
        setDate(date);
        setTime(time);
        setPlace(place);
        setCategory(category);
        setPriority(priority);
        setImage(photo);

    }, [event]);

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "title": 
                setTitle(e.target.value);
                e.target.setCustomValidity("");
                break;
            case "description": 
                setDescription(e.target.value);
                break;
            case "location": 
                setPlace(e.target.value);
                e.target.setCustomValidity("");
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

    const toggleMenu = (id) => {
        const form =  document.getElementById("form");
        const input = form.querySelector(`#${id}`);
        let condition = false;

        switch (id) {
            case "date":
                condition = showDatePicker;
                setShowDatePicker(prevState => !prevState);
                setShowTimePicker(false);
                setShowCategories(false);
                setShowPriorities(false);
                break;
            case "time": 
                condition = showTimePicker;
                setShowTimePicker(prevState => !prevState);
                setShowDatePicker(false);
                setShowCategories(false);
                setShowPriorities(false);
                break;
            case "category":
                condition = showCategories;
                setShowCategories(prevState => !prevState);
                setShowDatePicker(false);
                setShowTimePicker(false);
                setShowPriorities(false);
                break;
            case "priority":
                condition = showPriorities;
                setShowPriorities(prevState => !prevState);
                setShowDatePicker(false);
                setShowTimePicker(false);
                setShowCategories(false);
                break;
            default:
                return;
        }

        controlInput(input, condition);
    }

    const handleSelectOption = (id, e) => {
        switch (id) {
            case "category":
                setCategory(e.target.innerText);
                setShowCategories(false);
                break;
            case "priority":
                setPriority(e.target.innerText);
                setShowPriorities(false);
                break;
            default:
                return;
        }
    }

    const handleSaveDate = (startDate) => {
        const selectedDate = convertDateFormat(startDate);
        setDate(selectedDate);
        setShowDatePicker(false);
    }

    const handleSaveTime = (hour, minute, ampm) => {
        if (hour === '01' && minute === '00' && ampm === 'am') {
            return;
        }

        const newTime = `${hour}:${minute} ${ampm.toLowerCase()}`;
        setTime(newTime);
    }

    const collectData = () => {
        let id = null;
        if (event) {
            id = event.id
        }

        const newEvent = {
            id: id ?? nanoid(),
            name: title,
            description,
            category,
            priority: priority.toLowerCase(),
            place,
            date,
            time,
            photo: image ?? defaultImage
        }

        return newEvent;
    }

    const formValidation = () => {
        console.log("Here!")
        const form =  document.getElementById("form");
        const inputs = form.querySelectorAll("input:not(:disabled)");
        
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const validate = formValidation();

        if (!validate) {
            toast.error("Please fill out all the required fields!");
            return;
        }

        const newEvent = collectData();
        console.log(newEvent);

        if (location.pathname === '/create') {
            await dispatch(operations.createEvent(newEvent));
            toast.success("A new event has been created!");
            navigate('/');
            return;
        }

        if (location.pathname === `/edit/${event.id}`) {
            const id = event.id;
            await dispatch(operations.updateEvent({id, newEvent}));
            toast.success("The event info has been updated!");
            navigate(`/event/${event.id}`);
        }
    }

    return (
        <form 
            className={css.form} 
            id="form" 
            onSubmit={handleFormSubmit}
        >
            <div className={css.container}>

                <TitleInput 
                    title={title}
                    reset={() => setTitle('')}
                    handleInputChange={handleInputChange}
                />
                
                <DescriptionInput 
                    description={description}
                    reset={() => setDescription('')}
                    handleInputChange={handleInputChange}   
                />
                
                <DatePickerInput 
                    date={date}
                    handleInputChange={handleInputChange}
                    showDatePicker={showDatePicker}
                    toggleMenu={toggleMenu}
                    handleSaveDate={handleSaveDate}
                />

                <TimePickerInput 
                    time={time}
                    handleInputChange={handleInputChange}
                    showTimePicker={showTimePicker}
                    toggleMenu={toggleMenu}
                    saveTime={handleSaveTime}
                />

                <LocationInput 
                    place={place}
                    reset={() => setPlace('')}
                    handleInputChange={handleInputChange}
                />
                
                <CategoryInput 
                    category={category}
                    handleInputChange={handleInputChange}
                    showCategories={showCategories}
                    toggleMenu={toggleMenu}
                    handleSelect={handleSelectOption}
                />

                <ImageInput />
                
                <PriorityInput 
                    priority={priority}
                    handleInputChange={handleInputChange}
                    showPriorities={showPriorities}
                    toggleMenu={toggleMenu}
                    handleSelect={handleSelectOption}
                />
            </div>
        
            {/* adjusts text depending on the location */}
            <button type="submit" className={css.button} onClick={handleFormSubmit}>
                {
                    location.pathname === '/create'
                    ? "Add event"
                    : "Save"
                }
            </button>
        </form>
    )
}