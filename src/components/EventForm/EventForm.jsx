import { useLocation, useNavigate } from "react-router-dom";
import { 
    Form,
    Container,
    Label,
    Input,
    TextArea,
    Enabled,
    Disabled,
    Button
} from "./EventForm.styled";

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
        <Form onSubmit={handleFormSubmit}>
            <Container>
                {/* title */}
                <Enabled>
                    <Label 
                        htmlFor="title"
                    >
                        Title
                    </Label>
                    <Input 
                        type="text"
                        id="title" 
                        name="title" 
                        required
                    />
                </Enabled>
                
                {/* description */}
                <Enabled>
                    <Label 
                        htmlFor="description"
                    >
                        Description
                    </Label>
                    <TextArea 
                        type="text"
                        id="description" 
                        name="description" 
                        required
                    ></TextArea>
                </Enabled>
                
                {/* date */}
                <Enabled>
                    <Label 
                        htmlFor="date"
                    >
                        Select date
                    </Label>
                    <Input 
                        type="date"
                        id="date" 
                        name="date" 
                        required
                    />
                </Enabled>

                {/* time */}
                <Enabled>
                    <Label 
                        htmlFor="time"
                    >
                        Select time
                    </Label>
                    <Input 
                        type="time"
                        id="time" 
                        name="time" 
                        required
                    />
                </Enabled>

                {/* location */}
                <Enabled>
                    <Label 
                        htmlFor="location"
                    >
                        Location
                    </Label>
                    <Input 
                        type="text"
                        id="location" 
                        name="location" 
                        required
                    />
                </Enabled>
                
                {/* category - dropdown */}
                <Disabled>
                    <Label 
                        htmlFor="category"
                    >
                        Category
                    </Label>
                    <Input 
                        type="text"
                        id="category" 
                        name="category" 
                        disabled
                    />
                </Disabled>

                {/* image */}
                <Disabled>
                    <Label 
                        htmlFor="image"
                    >
                        Add picture
                    </Label>
                    <Input 
                        type="file"
                        id="image" 
                        name="image" 
                        disabled
                    />
                    {/* div to overlap over the file input */}
                    <div></div>
                </Disabled>

                {/* priority - dropdown*/}
                <Disabled>
                    <Label 
                        htmlFor="priority"
                    >
                        Priority
                    </Label>
                    <Input 
                        type="text"
                        id="priority" 
                        name="priority" 
                        disabled
                    />
                </Disabled>
            </Container>
        
            {/* adjust text depending on the location */}
            <Button type="submit">
                {
                    location.pathname === '/create'
                    ? "Add event"
                    : "Save"
                }
            </Button>
        </Form>
    )
}