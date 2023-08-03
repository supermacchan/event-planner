import { useLocation, useNavigate } from "react-router-dom";

export const EventForm = () => {
    const location = useLocation();
    const navigate = useNavigate();

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
        <form onSubmit={handleFormSubmit}>
            {/* title */}
            <label 
                htmlFor="title"
            >
                Title
            </label>
            <input 
                type="text"
                id="title" 
                name="title" 
                required
            />

            {/* description */}
            <label 
                htmlFor="description"
            >
                Description
            </label>
            <textarea 
                type="text"
                id="description" 
                name="description" 
                required
            ></textarea>

            {/* date */}
            <label 
                htmlFor="date"
            >
                Select date
            </label>
            <input 
                type="date"
                id="date" 
                name="date" 
                required
            />

            {/* time */}
            <label 
                htmlFor="time"
            >
                Select time
            </label>
            <input 
                type="time"
                id="time" 
                name="time" 
                required
            />

            {/* location */}
            <label 
                htmlFor="location"
            >
                Location
            </label>
            <input 
                type="text"
                id="location" 
                name="location" 
                required
            />

            {/* category - dropdown */}
            <label 
                htmlFor="category"
            >
                Category
            </label>
            <input 
                type="text"
                id="category" 
                name="category" 
                disabled
            />

            {/* image */}
            <label 
                htmlFor="image"
            >
                Add picture
            </label>
            <input 
                type="file"
                id="image" 
                name="image" 
                disabled
            />
            {/* div to overlap over the file input */}
            <div></div>

            {/* priority - dropdown*/}
            <label 
                htmlFor="priority"
            >
                Priority
            </label>
            <input 
                type="text"
                id="priority" 
                name="priority" 
                disabled
            />

            {/* adjust text depending on the location */}
            <button type="submit">
                {
                    location.pathname === '/create'
                    ? "Add event"
                    : "Save"
                }
            </button>
        </form>
    )
}