import { PageTitle } from "components/PageTitle/PageTitle";
import { BackButton } from "components/BackButton/BackButton";
import { EventForm } from "components/EventForm/EventForm";
import { Main } from "./Edit.styled";

const Edit = () => {
    return (
        <Main>
            <BackButton />
            <PageTitle title="Edit event" />
            <EventForm />  
        </Main>
    )
}

export default Edit;