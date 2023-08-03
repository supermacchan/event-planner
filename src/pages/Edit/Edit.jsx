import { Main } from "components/Main/Main";
import { PageTitle } from "components/PageTitle/PageTitle";
import { BackButton } from "components/BackButton/BackButton";
import { EventForm } from "components/EventForm/EventForm";

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